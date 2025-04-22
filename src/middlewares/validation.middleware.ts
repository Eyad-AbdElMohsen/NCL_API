import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";


function parse<T> (schema: ZodSchema<T>, rawData: any, res: Response): T | undefined {
    const {error, data} = schema.safeParse(rawData)

    if(error) {
        res.status(400).json({
            satatus: 'Error',
            message: 'Validation',
            data: error
        })
    }

    return data
}

export const validateMiddleware = <B, Q, P>(bodySchema: ZodSchema<B>, querySchema: ZodSchema<Q>, paramsSchema: ZodSchema<P>) => {
    return (req: Request<P, object, B, Q>, res: Response, next: NextFunction) => {
        const bodyData = parse(bodySchema, req.body, res)
        if (!bodyData) return;
        req.body = bodyData

        const queryData = parse(querySchema, req.query, res)
        if (!queryData) return;
        req.query = queryData

        const paramsData = parse(paramsSchema, req.params, res)
        if (!paramsData) return;
        req.params = paramsData

        next();
    }
}