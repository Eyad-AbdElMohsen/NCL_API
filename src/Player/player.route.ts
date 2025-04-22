import { Router } from "express";
import * as playerController from './player.controller'
import { validateMiddleware } from "../middlewares/validation.middleware";
import { addPlayerBodySchema, getPlayerBySearchQuerySchema, getPlayerParamsSchema, updatePlayerBodySchema } from "./player.schema";
import { z } from "zod";

const playerRouter = Router()
    
playerRouter.post('/players', 
    validateMiddleware(addPlayerBodySchema, z.object({}), z.object({})), playerController.addNewPlayer)

playerRouter.get('/players/:playerId', 
    validateMiddleware(z.object({}), z.object({}), getPlayerParamsSchema), playerController.getPlayerById)

playerRouter.delete('/players/:playerId', 
    validateMiddleware(z.object({}), z.object({}), getPlayerParamsSchema), playerController.deletePlayer)

playerRouter.patch('/players/:playerId', 
    validateMiddleware(updatePlayerBodySchema, z.object({}), getPlayerParamsSchema), playerController.updatePlayerDetails)

playerRouter.get('/players/search', 
    validateMiddleware(z.object({}), getPlayerBySearchQuerySchema, z.object({})), playerController.getPlayersBySearch)

playerRouter.get('/players/:playerId/injuries',
    validateMiddleware(z.object({}), z.object({}), getPlayerParamsSchema), playerController.getPlayerInjuriesHistory)


export default playerRouter