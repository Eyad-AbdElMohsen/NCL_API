import { Sequelize } from "sequelize";
import env from "../env";
import createTeam from './team.model'

export const sequelize = new Sequelize(env.DB_URL)

// Test the connection only
sequelize.authenticate().then(() => {
  console.log('DB Connection has been established successfully.');
}).catch((err) => {
  console.log('Unable to connect to the database:', err)
});

// creating models
export const Team = createTeam(sequelize)




export  { Sequelize }
