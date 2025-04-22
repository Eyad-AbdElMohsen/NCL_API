import { Router } from "express";
import *  as gameController from './game.controller'
import { validateMiddleware } from "../middlewares/validation.middleware";
import { createGameBodySchema, getGameParamsSchema, updateGameBodySchema } from "./game.schema";
import { z } from "zod";

const gameRouter = Router()

gameRouter.get('/games', 
    gameController.getAllGames)

gameRouter.post('/games', 
    validateMiddleware(createGameBodySchema, z.object({}), z.object({})), gameController.createNewGame)

gameRouter.get('/games/:gameId', 
    validateMiddleware(z.object({}), z.object({}), getGameParamsSchema), gameController.getGameById)

gameRouter.patch('/games/:gameId', 
    validateMiddleware(updateGameBodySchema, z.object({}), getGameParamsSchema), gameController.updateGame)

export default gameRouter