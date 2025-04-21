import { RequestHandler } from "express";
import * as gameService from './game.service'
import ApiError from "../errors/api.error";

export const createNewGame: RequestHandler = async (req, res) => {
    // need validation
    // data contain Game data, hTeamId and aTeamId
    const data = req.body
    const newGameDetails = await gameService.createNewGame(data)
    res.status(200).json({
        status: 'SUCCESS',
        data: {
            newGameDetails
        }
    })
}

export const getAllGames: RequestHandler = async(req, res) => {
    const games = await gameService.getAllGames()
    res.status(200).json({
        status: 'SUCCESS',
        data: {
            games
        }
    })
}

export const getGameById: RequestHandler = async (req, res) => {
    const id = Number(req.params.gameId)
    if (!id) throw new ApiError('game id is required', 400)
    const game = await gameService.getGameById(id)
    res.status(200).json({
        status: 'SUCCESS',
        data: {
            game
        }
    })
}

export const updateGame: RequestHandler = async (req, res) => {
    // need validation (every thing in body is option)
    const id = Number(req.params.gameId)
    const data = req.body
    const updatedGame = await gameService.updateGame(id, data)
    res.status(200).json({
        status: 'SUCCESS',
        data: {
            updatedGame
        }
    })
}