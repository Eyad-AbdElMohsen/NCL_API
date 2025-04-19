import ApiError from "../errors/api.error";
import { Stadium, Team } from "../models"

type CreateTeamData = {
    teamName: string;
    city: string;
    coach: string;
    stadiumId: number;
};

export const createTeam = async (data: CreateTeamData) => {
    let newTeam
    try {
        newTeam = await Team.create(data);
    } catch (err) {
        console.log('err in creating team: ', err)
        throw new ApiError('Team is not created', 400)
    }
    return newTeam
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
    const stadium = await Stadium.findByPk(id)
    if(!stadium) 
        throw new ApiError('stadium id not found', 404)
    const oldStadium = await Team.findOne({ where: {stadiumId: id}})
    if(oldStadium)
        throw new ApiError('stadium id is already taken', 400)
}

export const updateTeamStadiumId = async(teamId: number, stadiumId: number) => {    
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