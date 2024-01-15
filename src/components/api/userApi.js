import axios from "axios";

const baseURL = '/api/v1/users'

export const getCurrentUserAPI = async(username) =>{
    try {
        const response = await axios.get(`${baseURL}/${username}`)
        return response.data
        
    } catch (error) {
        throw error;        
    }
}