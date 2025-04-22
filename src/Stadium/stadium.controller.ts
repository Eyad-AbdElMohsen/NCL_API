import { RequestHandler } from "express";
import * as stadiumService from './stadium.service'
import ApiError from "../errors/api.error";
import { getStadiumParams } from "./stadium.shema";

export const createStadium: RequestHandler = async (req, res) => {
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

export const getStadiumById: RequestHandler<getStadiumParams> = async (req, res) => {
    const id = req.params.stadiumId
    const stadium = await stadiumService.getStadiumById(id)
    res.status(200).json({
        status: 'SUCCESS',
        data: {
            stadium
        }
    })
}