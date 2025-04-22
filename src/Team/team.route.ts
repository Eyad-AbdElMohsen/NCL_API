import { Router } from "express";
import * as teamController from './team.controller'
import { validateMiddleware } from "../middlewares/validation.middleware";
import { createTeamBodySchema, getTeamParamsSchema, updateTeamCaptainBodySchema, updateTeamStadiumBodySchema } from "./team.shema";
import { z } from "zod";

const teamRouter = Router()

teamRouter.post('/teams', 
    validateMiddleware(createTeamBodySchema, z.object({}), z.object({})), teamController.createTeam)

teamRouter.get('/teams', 
    teamController.getTeams)

teamRouter.get('/teams/:teamId', 
    validateMiddleware(z.object({}), z.object({}), getTeamParamsSchema), teamController.getTeamById)

teamRouter.patch('/teams/:teamId', 
    validateMiddleware(updateTeamStadiumBodySchema, z.object({}), getTeamParamsSchema), teamController.updateTeamStadium)

teamRouter.get('/teams/:teamId/players', 
    validateMiddleware(z.object({}), z.object({}), getTeamParamsSchema), teamController.getTeamPlayers)

teamRouter.patch('/teams/:teamId/captain',
    validateMiddleware(updateTeamCaptainBodySchema, z.object({}), getTeamParamsSchema), teamController.updateTeamCaptain);


export default teamRouter