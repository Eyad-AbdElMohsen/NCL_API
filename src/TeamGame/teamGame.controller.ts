import { RequestHandler } from "express";
import * as teamGameService from './teamGame.service'

export const getAllTeamGames: RequestHandler = async(req, res) => {
    // need validation
    const teamId = Number(req.params.teamId)
    const teamGames = await teamGameService.getAllTeamGames(teamId)
    res.status(200).json({
        status: 'SUCCESS',
        data: {
            teamGames
        }
    })
}

export const getTeamGameByGameId: RequestHandler = async(req, res) => {
    // need validation
    const gameId = Number(req.params.gameId)
    const [teamsRoles, gameDetails] = await teamGameService.getTeamGameByGameId(gameId)
    res.status(200).json({
        status: 'SUCCESS',
        data: {
            teamsRoles,
            gameDetails
        }
    })
}