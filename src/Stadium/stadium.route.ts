import { Router } from "express";
import * as stadiumController from './stadium.controller'

const stadiumRouter = Router()

stadiumRouter.post('/stadiums', stadiumController.createStadium)
stadiumRouter.get('/stadiums', stadiumController.getAllStadiums)
stadiumRouter.get('/stadiums/:stadiumId', stadiumController.getStadiumById)

export default stadiumRouter