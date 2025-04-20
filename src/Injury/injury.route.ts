import { Router } from "express";
import * as injuryController from './injury.controller'

const injuryRouter = Router()

injuryRouter.post('/injuries', injuryController.createNewInjury)
injuryRouter.get('/injuries/:injuryId', injuryController.getInjuryById)

// we may add features in the future -> get injuries for all people with queries ex: date from .. to ..  etc.....

export default injuryRouter