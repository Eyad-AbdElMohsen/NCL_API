import { RequestHandler } from "express";
import * as teamService from './team.service'
import ApiError from "../errors/api.error";


export const createTeam: RequestHandler = async(req, res) => {
    // need validation
    const data = req.body
    await teamService.checkTeamStadiumId(data.stadiumId)
    const newTeam = await teamService.createTeam(data) 
    res.status(200).json({
        status: 'SUCCESS',
        data: {
            newTeam
        }
    })
}

export const getTeams: RequestHandler = async (req, res) => {
    const teams = await teamService.getTeams()
    res.status(200).json({
        status: 'SUCCESS',
        data: {
            teams
        }
    })
}

export const getTeamById: RequestHandler = async (req, res) => {
    // need validation
    const id = Number(req.params.teamId)
    if(!id)throw new ApiError('team id is required', 400)
    const team = await teamService.getTeamById(id)
    res.status(200).json({
        status: 'SUCCESS',
        data: {
            team
        }
    })
}

export const updateTeamStadiumId: RequestHandler = async(req, res) => {
    // need validation
    const newId = req.body.newStadiumId
    const teamId = Number(req.params.teamId)
    const updatedTeam = await teamService.updateTeamStadiumId(teamId, newId)
    res.status(200).json({
        status: 'SUCCESS',
        data: {
            updatedTeam
        }
    })
}