import { RequestHandler } from "express";
import * as injuryService from './injury.service'
import ApiError from "../errors/api.error";
import { getInjuryParams } from "./injury.schema";

export const createNewInjury: RequestHandler = async(req, res) => {
    const data = req.body
    const newInjury = await injuryService.createNewInjury(data)
    res.status(200).json({
        status: 'SUCCESS', 
        data: {
            newInjury
        }
    })
}

export const getInjuryById: RequestHandler<getInjuryParams> = async(req, res) => {
    const id = req.params.injuryId
    const injury = await injuryService.getInjuryById(id)
    res.status(200).json({
        status: 'SUCCESS', 
        data: {
            injury
        }
    })
}

