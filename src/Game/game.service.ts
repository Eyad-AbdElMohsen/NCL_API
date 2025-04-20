import ApiError from "../errors/api.error";
import { Game, sequelize } from "../models";


type createGameData = {
    date: Date;
    hScore?: number;
    aScore?: number;
    stadiumId: number
}

type updateGameData = {
    date?: Date;
    hScore?: number;
    aScore?: number;
    stadiumId?: number
}

export const createNewGame = async (data: createGameData) => {
    const inputDate = new Date(data.date)
    if (inputDate < new Date() && (data.hScore == null || data.aScore == null))
        throw new ApiError('Result must be added for past games', 400)
    else if (inputDate >= new Date() && (data.hScore != null || data.aScore != null))
        throw new ApiError('Result must not be added for future games', 400)
    try {
        const newGame = await Game.create(data)
        return newGame
    } catch (err) {
        console.log('err in creating game: ', err)
        throw new ApiError('Game is not created', 400)
    }
}

export const getAllGames = async() => await Game.findAll()

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
        const inputDate = new Date(updatedGame.date)
        if (inputDate < new Date() && (updatedGame.hScore == null || updatedGame.aScore == null)) {
            await t.rollback();
            throw new ApiError('Result must be added for past games', 400);
        } else if (inputDate >= new Date() && (updatedGame.hScore != null || updatedGame.aScore != null)) {
            await t.rollback();
            throw new ApiError('Result must not be added for future games', 400);
        }
        await t.commit();
        return updatedGame
    } catch (err) {
        await t.rollback();
        console.log("Error in transaction: ", err);
        throw new ApiError('An error occurred during the update', 500);
    }
};