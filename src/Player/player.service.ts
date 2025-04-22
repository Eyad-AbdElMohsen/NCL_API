import { Op, Transaction } from "sequelize";
import ApiError from "../errors/api.error";
import { Player, sequelize } from "../models";

type createPlayerData = {
    playerName: string;
    age: number;
    SkillLVL: string;
    position: string;
    teamId?: number;
    captainId?: number
};

type updatePlayerData = {
    playerName?: string;
    age?: number;
    SkillLVL?: string;
    position?: string;
    teamId?: number;
    captainId?: number
}

export const addNewPlayer = async (data: createPlayerData) => {
    try {
        const newPlayer = await Player.create(data)
        return newPlayer
    } catch (err) {
        console.log('error in adding player: ', err)
        throw new ApiError('Player is not added', 400)
    }
}

export const getPlayerById = async (id: number) => {
    const player = await Player.findByPk(id)
    if (!player) {
        throw new ApiError('Player Not Found, wrong id', 404)
    }
    return player
}

export const gettingTeamPlayers = async (teamId: number) => {
    const players = await Player.findAll({
        where: {
            teamId
        }
    })
    return players
}

export const getPlayersBySearch = async (name: string) => {
    const players = await Player.findAll({
        where: {
            playerName: {
                [Op.iLike]: `%${name}%`
            }
        }
    })
    return players
}

export const deletePlayer = async (id: number) => {
    try {
        const player = await getPlayerById(id)
        await player.destroy();
    } catch (err) {
        console.log('error in removing player: ', err)
        throw new ApiError('Player is not removed', 400)
    }
}

export const updatePlayerDetails = async (id: number, data: updatePlayerData) => {
    try {
        let player = await getPlayerById(id)
        player = player.set(data);
        await player.save()
        return player
    } catch (err) {
        console.log('error in removing player: ', err)
        throw new ApiError('Player is not removed', 400)
    }
}

export const updatingTeamCaptain = async (teamId: number, captainId: number) => {
    const t = await sequelize.transaction();
    try {
        await Player.update(
            { captainId },
            {
                where: {
                    teamId,
                    id: {
                        [Op.ne]: captainId,
                    },
                },
                transaction: t
            },
        )
        await Player.update(
            { captainId: null },
            {
                where: {
                    teamId,
                    id: captainId
                },
                transaction: t
            }
        )
        await t.commit();
    } catch (err) {
        await t.rollback();
        console.log("err in transaction: ", err)
        throw new ApiError('captain is not updated', 400)
    }
}