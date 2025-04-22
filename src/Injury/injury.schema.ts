import { z } from "zod";

export const createInjuryBodySchema = z.object({
    period: z.number().int().positive('period must be positive integer'),
    playerId: z.number().int().positive('id must be positive integer'),
    date: z.coerce.date()
})

export const getInjuryParamsSchema = z.object({
    injuryId: z.coerce.number().int().positive('id must be positive integer'),
})
export type getInjuryParams = z.infer<typeof getInjuryParamsSchema>