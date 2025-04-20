import { Router } from "express";
import *  as gameController from './game.controller'

const gameRouter = Router()

gameRouter.get('/games', gameController.getAllGames) // in the future -> adding some queries
gameRouter.post('/games', gameController.createNewGame)
gameRouter.get('/games/:gameId', gameController.getGameById)
gameRouter.patch('/games/:gameId', gameController.updateGame)

export default gameRouter