import ApiError from "../errors/api.error";
import { Stadium, Team } from "../models"
import { getStadiumById } from "../Stadium/stadium.service";

type createTeamData = {
    teamName: string;
    city: string;
    coach: string;
    stadiumId: number;
};

export const createTeam = async (data: createTeamData) => {
    try {
        const newTeam = await Team.create(data);
        return newTeam
    } catch (err) {
        console.log('err in creating team: ', err)
        throw new ApiError('Team is not created', 400)
    }
}

export const getTeams = async () => await Team.findAll()

export const getTeamById = async (id: number) => {
    const team = await Team.findByPk(id)
    if(!team){
        throw new ApiError('Team Not Found, wrong id', 404)
    }
    return team
}

export const checkTeamStadiumId = async (id: number) => {
    await getStadiumById(id)
    const unavailableStadium = await Team.findOne({ where: {stadiumId: id}})
    if(unavailableStadium)
        throw new ApiError('stadium id is unavailable', 400)
}

export const updateTeamStadium = async(teamId: number, stadiumId: number) => {    
    const team = await getTeamById(teamId)
    await checkTeamStadiumId(stadiumId)
    try{
        team!.stadiumId = stadiumId
        await team.save()
        return team
    }catch(err){
        console.log('Error in updating team\'s stadium id: ', err)
        throw new Error('internal error')
    }
}