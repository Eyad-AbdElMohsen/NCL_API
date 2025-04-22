import { Router } from "express";
import * as injuryController from './injury.controller'
import { validateMiddleware } from "../middlewares/validation.middleware";
import { createInjuryBodySchema, getInjuryParamsSchema } from "./injury.schema";
import { z } from "zod";

const injuryRouter = Router()

injuryRouter.post('/injuries',
    validateMiddleware(createInjuryBodySchema, z.object({}), z.object({})), injuryController.createNewInjury)
injuryRouter.get('/injuries/:injuryId',
    validateMiddleware(z.object({}), z.object({}), getInjuryParamsSchema), injuryController.getInjuryById)

// we may add some features in the future -> get injuries for all people with queries ex: date from .. to ..  etc.....

export default injuryRouter