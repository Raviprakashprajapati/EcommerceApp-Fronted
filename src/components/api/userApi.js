import axios from "axios";

const userBaseURL = '/api/v1/users'

export const getCurrentUserAPI = async(username) =>{
    try {
        const response = await axios.get(`${userBaseURL}/${username}`)
        return response.data
        
    } catch (error) {
        throw error;        
    }
}

export const loginUserAPI = async(loginData) =>{
    try {
        const response = await axios.post(`${userBaseURL}/login`,loginData)
        return response.data
    } catch (error) {
        throw error;        
    }
}

export const logoutAPI = async() =>{
    try {
        const response = await axios.post(`${userBaseURL}/logout`)
        return response.data
        
    } catch (error) {
        throw error        
    }
}

export const  registerUserAPI = async(userData) =>{
    try {
        const response = await axios.post(`${userBaseURL}/register`, userData);
        return response.data;
      } catch (error) {
        throw error;
      }
}





//later

export const  changeUserPasswordAPI = async(data) =>{
    try {

        const response = await axios.post(`${userBaseURL}/chnage-password`, data);
        return response.data;
        
    } catch (error) {
        throw error
    }
}

export const updateUserAccountAPI = async(data) =>{
    try {

        const response = await axios.post(`${userBaseURL}/update-account`,data)
        return response.data
        
    } catch (error) {
        throw error 
    }
}

export const updateUserAvatarAPI = async(data) =>{
    try {

        const response = await axios.patch(`${userBaseURL}/avatar`,data)
        return response.data
        
    } catch (error) {
        throw error
    }
}

export const deactivateUserAPI = async() =>{
    try {
        const response = await axios.delete(`${userBaseURL}/delete-current-user`)
        return response.data
        
    } catch (error) {
        throw error
    }
}


