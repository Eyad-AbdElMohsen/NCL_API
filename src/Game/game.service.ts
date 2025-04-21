import ApiError from "../errors/api.error";
import { Game, sequelize, Team, TeamGame } from "../models";

type createGameData = {
    date: Date;
    hScore?: number;
    aScore?: number;
    stadiumId: number;
    hTeamId: number;
    aTeamId: number
}

type updateGameData = {
    date?: Date;
    hScore?: number;
    aScore?: number;
    stadiumId?: number
}

const checkGame = (date: Date, hScore: number, aScore: number) => {
    const inputDate = new Date(date)
    if (inputDate < new Date() && (hScore == null || aScore == null))
        throw new ApiError('Result must be added for past games', 400)
    else if (inputDate >= new Date() && (hScore != null || aScore != null))
        throw new ApiError('Result must not be added for future games', 400)
}

const checkTeamGame = async (teamId: number, gameId: number, role: string) => {
    const teamCount = await TeamGame.count({ where: { gameId } });
    if (teamCount >= 2) {
        throw new ApiError('This game already has 2 teams.', 400);
    }

    const existingRole = await TeamGame.findOne({
        where: { gameId, role }
    });
    if (existingRole) {
        throw new ApiError(`This game already has a team with the '${role}' role.`, 400);
    }

    const existingTeam = await TeamGame.findOne({
        where: { gameId, teamId }
    });
    if (existingTeam) {
        throw new ApiError('This team is already added to the game.', 400);
    }
};

export const createNewGame = async (data: createGameData) => {
    checkGame(data.date, data.hScore!, data.aScore!)
    const t = await sequelize.transaction();
    try {
        const newGame = await Game.create({
            date: data.date,
            stadiumId: data.stadiumId,
            aScore: data.aScore,
            hScore: data.hScore,
        }, { transaction: t })

        const gameId = newGame.id!;

        await checkTeamGame(data.hTeamId, gameId, 'H')
        await checkTeamGame(data.aTeamId, gameId, 'A')

        const newHomeTeamGame = await TeamGame.create({
            gameId,
            teamId: data.hTeamId,
            role: 'H'
        }, { transaction: t })

        const newAwayTeamGame = await TeamGame.create({
            gameId,
            teamId: data.aTeamId,
            role: 'A'
        }, { transaction: t })

        const game = await Game.findByPk(
            gameId, {
                transaction: t,
                include: [
                    {
                        model: TeamGame,
                        attributes: ['role'],
                        include: [{ model: Team }]
                    }
                ]
            },
        )

        await t.commit();
        return game
    } catch (err) {
        await t.rollback();
        console.log("Error in transaction: ", err);
        throw new ApiError('An error occurred during the create', 500);
    }
}

export const getAllGames = async () => await Game.findAll()

export const getGameById = async (id: number) => {
    const game = await Game.findByPk(id)
    if (!game) {
        throw new ApiError('Game Not Found, wrong id', 404)
    }
    return game
}

export const updateGame = async (id: number, data: updateGameData) => {
    const t = await sequelize.transaction();
    try {
        const [updatedCount, updatedGames] = await Game.update(
            data,
            {
                where: { id },
                transaction: t,
                returning: true
            }
        );

        if (updatedCount === 0) {
            await t.rollback();
            throw new ApiError('Game not found or not updated', 404);
        }

        const updatedGame = updatedGames[0]
        checkGame(new Date(updatedGame.date), updatedGame.hScore!, updatedGame.aScore!)

        await t.commit();
        return updatedGame
    } catch (err) {
        await t.rollback();
        console.log("Error in transaction: ", err);
        throw new ApiError('An error occurred during the update', 500);
    }
};