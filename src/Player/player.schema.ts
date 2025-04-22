import { z } from "zod";

export const addPlayerBodySchema = z.object({
    playerName: z.string().min(3).max(15),
    age: z.number().int().positive().min(16).max(40),
    SkillLVL: z.enum(['1', '2', '3', '4', '5']),
    position: z.enum(['GK', 'CB', 'LB', 'RB', 'CM', 'CDM', 'CAM', 'ST', 'LW', 'RW']),
    teamId: z.number().int().positive('id must be positive integer').optional(),
    captainId: z.number().int().positive('id must be positive integer').optional(),
})
export const updatePlayerBodySchema = addPlayerBodySchema.extend({}).partial()

export const getPlayerParamsSchema = z.object({
    playerId: z.coerce.number().int().positive('id must be positive integer')
})
export type getPlayerParams = z.infer<typeof getPlayerParamsSchema>

export const getPlayerBySearchQuerySchema = z.object({
    name: z.string().optional()
})
export type getPlayerBySearchQuery = z.infer<typeof getPlayerBySearchQuerySchema>
