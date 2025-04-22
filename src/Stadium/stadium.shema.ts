import { z } from "zod";

export const createStadiumBodySchema = z.object({
    city: z.string().min(2).max(15)
})

export const getStadiumParamsSchema = z.object({
    stadiumId: z.number().int().positive('id must be npositive integer')
})
export type getStadiumParams = z.infer<typeof getStadiumParamsSchema>