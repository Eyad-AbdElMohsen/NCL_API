import { Request, Response, NextFunction } from "express";
import ApiError from "../errors/api.error";

const errorMiddleware = (err: unknown, req: Request, res: Response, next: NextFunction) => {
    let message = "Internal server error", code = 500, data, path
    if(err instanceof ApiError){
        message = err.message
        code = err.code
        data = err.data
        path = err.path
    }
    res.status(code).json({
        status: 'Error',
        message: message,
        data: data,
        path: path
    })
}

export default errorMiddleware