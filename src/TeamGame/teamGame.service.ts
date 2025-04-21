import { Game, TeamGame } from "../models";

export const getAllTeamGames = async (teamId: number) => await TeamGame.findAll({
    where: { teamId },
    include: [{ model: Game }]
})

export const getTeamGameByGameId = async (gameId: number) => {
    const teamsRoles = await TeamGame.findAll({ 
        where: { gameId },
    })
    const gameDetails = await Game.findByPk(gameId)
    return [teamsRoles, gameDetails]
}