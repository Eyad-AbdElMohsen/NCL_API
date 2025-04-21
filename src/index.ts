import express, { Express } from "express"
import cors from "cors"
import 'express-async-errors';

// Middleware
import { requestLogger } from "./middlewares/requestLogger";
import errorMiddleware from "./middlewares/error.middleware";
import notFoundMiddleware from "./middlewares/notFound.middleware";

// db relashionships
import './models/associations'

// import Routers
import teamRouter from "./Team/team.route";
import stadiumRouter from "./Stadium/stadium.route";
import playerRouter from "./Player/player.route";
import injuryRouter from "./Injury/injury.route";
import gameRouter from "./Game/game.route";
import teamGameRouter from "./TeamGame/teamGame.route";


// Swagger setup
// import swaggerUi from "swagger-ui-express";
// import swaggerJsDoc from "swagger-jsdoc";
// import { swaggerOptions } from "./config/swagger-config";


export const app: Express = express();

app.use(express.json())
app.use(requestLogger)
app.use(
    cors({
        origin: "*",
        credentials: true,
    })
);

// Swagger documentation
// const swaggerSpec = swaggerJsDoc(swaggerOptions);
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


//Routes
app.use(teamRouter)
app.use(playerRouter)
app.use(stadiumRouter)
app.use(injuryRouter)
app.use(gameRouter)
app.use(teamGameRouter)

// glopal middleware
app.all('*', notFoundMiddleware)

//err handler
app.use(errorMiddleware)
