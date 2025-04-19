import ApiError from "../errors/api.error";
import { Stadium } from "../models";

type createStadiumData = {
    city: string
}

export const createStadium = async(data: createStadiumData) => {
    let newStadium
    try {
        newStadium = await Stadium.create(data);
    } catch (err) {
        console.log('err in creating stadium: ', err)
        throw new ApiError('Stadium is not created', 400)
    }
    return newStadium
}

export const getAllStadiums = async() => await Stadium.findAll()

export const getStadiumById = async(id: number) => {
    const stadium = await Stadium.findByPk(id)
    if(!stadium){
        throw new ApiError('Team Not Found, wrong id', 404)
    }
    return stadium
}