import { Router } from "express";
import * as teamController from './team.controller'

const teamRouter = Router()

teamRouter.post('/teams', teamController.createTeam)
teamRouter.get('/teams', teamController.getTeams)
teamRouter.get('/teams/:teamId', teamController.getTeamById)
teamRouter.patch('/teams/:teamId', teamController.updateTeamStadiumId)

export default teamRouter