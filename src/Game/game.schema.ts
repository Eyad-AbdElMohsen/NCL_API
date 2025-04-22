import { z } from "zod";

export const createGameBodySchema = z.object({
    hTeamId: z.number().int().positive('id must be positive integer'),
    aTeamId: z.number().int().positive('id must be positive integer'),
    date: z.coerce.date(),
    hScore: z.number().int().positive('score must be positive integer').optional(),
    aScore: z.number().int().positive('score must be positive integer').optional(),
    stadiumId: z.number().int().positive('id must be positive integer')
})

export const getGameParamsSchema = z.object({
    gameId: z.coerce.number().int().positive('id must be positive integer')
});
export type GetGameParams = z.infer<typeof getGameParamsSchema>;



export const updateGameBodySchema = z.object({
    date: z.coerce.date(),
    hScore: z.number().int().positive('score must be positive integer'),
    aScore: z.number().int().positive('score must be positive integer'),
    stadiumId: z.number().int().positive('id must be positive integer')
}).partial() // that means every thing is optional 