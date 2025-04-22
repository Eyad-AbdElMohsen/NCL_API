import { Router } from "express";
import * as teamGameController from './teamGame.controller'
import { validateMiddleware } from "../middlewares/validation.middleware";
import { z } from "zod";
import { getTeamParamsSchema } from "../Team/team.shema";
import { getGameParamsSchema } from "../Game/game.schema";


const teamGameRouter = Router() 

teamGameRouter.get('/teams-games/team/:teamId', 
    validateMiddleware(z.object({}), z.object({}), getTeamParamsSchema), teamGameController.getAllTeamGames)

teamGameRouter.get('/teams-games/game/:gameId', 
    validateMiddleware(z.object({}), z.object({}), getGameParamsSchema), teamGameController.getTeamGameByGameId)

export default teamGameRouter