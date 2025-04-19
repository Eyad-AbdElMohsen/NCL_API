import { RequestHandler } from "express";
import * as stadiumService from './stadium.service'
import ApiError from "../errors/api.error";

export const createStadium: RequestHandler = async (req, res) => {
    // need validation 
    const data = req.body
    const newStadium = await stadiumService.createStadium(data)
    res.status(200).json({
        status: 'SUCCESS',
        data: {
            newStadium
        }
    })
}

export const getAllStadiums: RequestHandler = async (req, res) => {
    const stadiums = await stadiumService.getAllStadiums()
    res.status(200).json({
        status: 'SUCCESS',
        data: {
            stadiums
        }
    })
}

export const getStadiumById: RequestHandler = async (req, res) => {
    const id = Number(req.params.stadiumId)
    if (!id)
        throw new ApiError('stadium id is required', 400)
    const stadium = await stadiumService.getStadiumById(id)
    res.status(200).json({
        status: 'SUCCESS',
        data: {
            stadium
        }
    })
}