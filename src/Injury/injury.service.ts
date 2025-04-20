import ApiError from "../errors/api.error"
import { Injury } from "../models"


type createInjuryData = {
    period: number,
    playerId: number,
    date: Date
}

export const createNewInjury = async(data: createInjuryData) => {
    try{
        const newInjury = await Injury.create(data)
        return newInjury
    }catch(err){
        console.log('error in creating injury: ', err)
        throw new ApiError('Injury is not created', 400)
    }
}

export const getInjuryById = async(id: number) => {
    const injury = await Injury.findByPk(id)
    if (!injury) {
        throw new ApiError('Injury Not Found, wrong id', 404)
    }
    return injury
}

export const getPlayerInjuryHistory = async(playerId: number) => {
    const injuryHistory = await Injury.findAll({
        where: {
            playerId
        }
    })
    return injuryHistory
}