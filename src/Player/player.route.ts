import { Router } from "express";
import * as playerController from './player.controller'

const playerRouter = Router()

playerRouter.get('/players/search', playerController.getPlayersBySearch)
playerRouter.get('/players/:playerId', playerController.getPlayerById)
playerRouter.post('/players', playerController.addNewPlayer)
playerRouter.delete('/players/:playerId', playerController.deletePlayer)
playerRouter.patch('/players/:playerId', playerController.updatePlayerDetails)
playerRouter.get('/players/:playerId/injuries', playerController.getPlayerInjuriesHistory)

export default playerRouter