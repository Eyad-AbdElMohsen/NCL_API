import { RequestHandler } from "express";
import * as playerService from './player.service'
import ApiError from "../errors/api.error";

export const addNewPlayer: RequestHandler = async(req, res) => {
    // need validation 
    const data = req.body
    const newPlayer = await playerService.addNewPlayer(data)
    res.status(200).json({
        status: 'SUCCESS',
        data: {
            newPlayer
        }
    })
}

export const getPlayerById: RequestHandler = async(req, res) => {
    // need validation 
    const id = Number(req.params.playerId)
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


export const getPlayersBySearch: RequestHandler = async(req, res) => {
    const name = req.query.name || '' 
    if(typeof name != 'string')
        throw new ApiError('search name must be string', 400)
    const players = await playerService.getPlayersBySearch(name)
    res.status(200).json({
        status: 'SUCCESS',
        data: {
            players
        }
    })
}

export const deletePlayer: RequestHandler = async(req, res) => {
    // need validation 
    const id = Number(req.params.playerId)
    if (!id)
        throw new ApiError('player id is required', 400)
    await playerService.deletePlayer(id)
    res.status(200).json({ status: 'SUCCESS' })
}

export const updatePlayerDetails: RequestHandler = async(req, res) => {
    // need validation (every data is optional)
    const data = req.body 
    const id = Number(req.params.playerId)
    const updatedPlayer = await playerService.updatePlayerDetails(id, data)
    res.status(200).json({
        status: 'SUCCESS',
        data: {
            updatedPlayer
        }
    })
}