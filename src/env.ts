import dotenv from "dotenv";
dotenv.config()
import env from 'env-var'

export default{
    PORT: env.get('PORT').required().asPortNumber(),
    NODE_ENV: env.get('NODE_ENV').required().asEnum(['development', 'test', 'production']),
    DB_URL: env.get('DB_URL').required().asString()
}