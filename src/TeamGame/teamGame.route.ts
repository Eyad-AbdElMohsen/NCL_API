import { Router } from "express";
import * as teamGameController from './teamGame.controller'


const teamGameRouter = Router() 

teamGameRouter.get('/teams-games/team/:teamId', teamGameController.getAllTeamGames)
teamGameRouter.get('/teams-games/game/:gameId', teamGameController.getTeamGameByGameId)


export default teamGameRouter