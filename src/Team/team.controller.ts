import { RequestHandler } from "express";
import * as teamService from './team.service'
import { gettingTeamPlayers, updatingTeamCaptain } from "../Player/player.service";
import { getTeamParams } from "./team.shema";

export const createTeam: RequestHandler = async(req, res) => {
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

export const getTeamById: RequestHandler<getTeamParams> = async (req, res) => {
    const id = req.params.teamId
    const team = await teamService.getTeamById(id)
    res.status(200).json({
        status: 'SUCCESS',
        data: {
            team
        }
    })
}

export const updateTeamStadium: RequestHandler<getTeamParams> = async(req, res) => {
    const newId = req.body.newStadiumId
    const teamId = req.params.teamId
    const updatedTeam = await teamService.updateTeamStadium(teamId, newId)
    res.status(200).json({
        status: 'SUCCESS',
        data: {
            updatedTeam
        }
    })
}

export const getTeamPlayers: RequestHandler<getTeamParams> = async(req, res) => {
    const teamId = req.params.teamId
    const players = await gettingTeamPlayers(teamId)
    res.status(200).json({
        status: 'SUCCESS',
        data: {
            players
        }
    })
}

export const updateTeamCaptain: RequestHandler<getTeamParams> = async(req, res) => {
    const  teamId  = req.params.teamId;
    const  newCaptainId  = req.body.newCaptainId; 
    await updatingTeamCaptain(teamId, newCaptainId)
    res.status(200).json({ status: 'SUCCESS' })
}