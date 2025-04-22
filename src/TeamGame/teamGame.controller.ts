import { RequestHandler } from "express";
import * as teamGameService from './teamGame.service'
import { getTeamParams } from "../Team/team.shema";
import { GetGameParams } from "../Game/game.schema";

export const getAllTeamGames: RequestHandler<getTeamParams> = async(req, res) => {
    const teamId = req.params.teamId
    const teamGames = await teamGameService.getAllTeamGames(teamId)
    res.status(200).json({
        status: 'SUCCESS',
        data: {
            teamGames
        }
    })
}

export const getTeamGameByGameId: RequestHandler<GetGameParams> = async(req, res) => {
    const gameId = req.params.gameId
    const [teamsRoles, gameDetails] = await teamGameService.getTeamGameByGameId(gameId)
    res.status(200).json({
        status: 'SUCCESS',
        data: {
            teamsRoles,
            gameDetails
        }
    })
}