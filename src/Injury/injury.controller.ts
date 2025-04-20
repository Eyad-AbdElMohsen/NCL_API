import { RequestHandler } from "express";
import * as injuryService from './injury.service'
import ApiError from "../errors/api.error";

export const createNewInjury: RequestHandler = async(req, res) => {
    // need validation 
    const data = req.body
    const newInjury = await injuryService.createNewInjury(data)
    res.status(200).json({
        status: 'SUCCESS', 
        data: {
            newInjury
        }
    })
}

export const getInjuryById: RequestHandler = async(req, res) => {
    //need validation
    const id = Number(req.params.injuryId)
    if(!id)
        throw new ApiError('injury id is required', 400)
    const injury = await injuryService.getInjuryById(id)
    res.status(200).json({
        status: 'SUCCESS', 
        data: {
            injury
        }
    })
}

