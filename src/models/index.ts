import { Sequelize } from "sequelize";
import env from "../env";
import createTeamModel from './team.model'
import createTeamGameModel from './TeamGame'
import createGameModel from './game.model'
import createStadiumModel from './stadium.model'
import createPlayerModel from './player.model'
import createInjuryModel from './injury.model'

export const sequelize = new Sequelize(env.DB_URL)

// Test the connection only
sequelize.authenticate().then(() => {
  console.log('DB Connection has been established successfully.');
}).catch((err) => {
  console.log('Unable to connect to the database:', err)
});

// creating models
export const Team = createTeamModel(sequelize)
export const Game = createGameModel(sequelize)
export const TeamGame = createTeamGameModel(sequelize)
export const Stadium = createStadiumModel(sequelize)
export const Player = createPlayerModel(sequelize)
export const Injury = createInjuryModel(sequelize)


