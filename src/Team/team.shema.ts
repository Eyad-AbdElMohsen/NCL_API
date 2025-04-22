import { z } from "zod";

export const createTeamBodySchema = z.object({
    teamName: z.string().min(3).max(15),
    city: z.string().min(2).max(10),
    coach: z.string().min(3).max(15),
    stadiumId: z.number().int().positive('id must be positive interger')
})

export const getTeamParamsSchema = z.object({
    teamId: z.coerce.number().int().positive('id must be positive interger')
})
export type getTeamParams = z.infer<typeof getTeamParamsSchema>

export const updateTeamStadiumBodySchema = z.object({
    newStadiumId: z.number().int().positive('id must be positive interger')
})

export const updateTeamCaptainBodySchema = z.object({
    newCaptainId: z.number().int().positive('id must be positive interger')
})