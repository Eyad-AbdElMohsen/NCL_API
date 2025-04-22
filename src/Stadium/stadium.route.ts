import { Router } from "express";
import * as stadiumController from './stadium.controller'
import { validateMiddleware } from "../middlewares/validation.middleware";
import { createStadiumBodySchema, getStadiumParamsSchema } from "./stadium.shema";
import { z } from "zod";

const stadiumRouter = Router()

stadiumRouter.post('/stadiums',
    validateMiddleware(createStadiumBodySchema, z.object({}), z.object({})), stadiumController.createStadium)

stadiumRouter.get('/stadiums', 
    stadiumController.getAllStadiums)

stadiumRouter.get('/stadiums/:stadiumId',
    validateMiddleware(z.object({}), z.object({}), getStadiumParamsSchema) , stadiumController.getStadiumById)

export default stadiumRouter