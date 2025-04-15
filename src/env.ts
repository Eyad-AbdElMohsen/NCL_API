import dotenv from "dotenv";
dotenv.config()
import env from 'env-var'

export default{
    PORT: env.get('PORT').required().asPortNumber(),
    // NODE_ENV: env.get('NODE_ENV').required().asString(),

}