import { RequestHandler } from "express";
import * as playerService from './player.service'
import ApiError from "../errors/api.error";
import { getPlayerInjuryHistory } from "../Injury/injury.service";
import { getPlayerBySearchQuery, getPlayerParams } from "./player.schema";

export const addNewPlayer: RequestHandler = async(req, res) => {
    const data = req.body
    const newPlayer = await playerService.addNewPlayer(data)
    res.status(200).json({
        status: 'SUCCESS',
        data: {
            newPlayer
        }
    })
}

export const getPlayerById: RequestHandler<getPlayerParams> = async(req, res) => {
    const id = req.params.playerId
    if (!id)
        throw new ApiError('player id is required', 400)
    const player = await playerService.getPlayerById(id)
    res.status(200).json({
        status: 'SUCCESS',
        data: {
            player
        }
    })
}

export const getPlayersBySearch: RequestHandler<any, any, any, getPlayerBySearchQuery> = async(req, res) => {
    const name = req.query.name || '' 
    const players = await playerService.getPlayersBySearch(name)
    res.status(200).json({
        status: 'SUCCESS',
        data: {
            players
        }
    })
}

export const deletePlayer: RequestHandler<getPlayerParams> = async(req, res) => {
    const id = req.params.playerId
    if (!id)
        throw new ApiError('player id is required', 400)
    await playerService.deletePlayer(id)
    res.status(200).json({ status: 'SUCCESS' })
}

export const updatePlayerDetails: RequestHandler<getPlayerParams> = async(req, res) => {
    const data = req.body 
    const id = req.params.playerId
    const updatedPlayer = await playerService.updatePlayerDetails(id, data)
    res.status(200).json({
        status: 'SUCCESS',
        data: {
            updatedPlayer
        }
    })
}

export const getPlayerInjuriesHistory: RequestHandler<getPlayerParams> = async(req, res) => {
    const playerId = req.params.playerId
    const injuryHistory = await getPlayerInjuryHistory(playerId)
    res.status(200).json({
        status: 'SUCCESS',
        data: {
            injuryHistory
        }
    })
}