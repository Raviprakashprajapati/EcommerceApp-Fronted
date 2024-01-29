import axios from "axios";

const userBaseURL = 'https://fullmernecommerceapp.onrender.com/api/v1/users'


const axioswithToken = axios.create({
    baseURL:userBaseURL,
    withCredentials:true,
    headers:{
        'Content-Type':"application/json"
    }
})

const token = localStorage.getItem('accessToken') || null;
if(token){
    axioswithToken.defaults.headers['Authorization'] = 'Bearer ' + token
}


export const loginUserAPI = async(loginData) =>{
    try {
        const response = await axioswithToken.post(`/login`,loginData);
        return response.data
    } catch (error) {
        throw error;        
    }
}


export const getCurrentUserAPI = async(id) =>{
    try {
        const response = await axioswithToken.get(`/current-user/${id}`)
        return response.data
        
    } catch (error) {
        throw error;        
    }
}


export const logoutAPI = async() =>{
    try {
        const response = await axioswithToken.post(`/logout`)
        return response.data
        
    } catch (error) {
        throw error        
    }
}

export const  registerUserAPI = async(userData) =>{
    try {
        const response = await axioswithToken.post(`/register`, userData);
        return response.data;
      } catch (error) {
        throw error;
      }
}


export const  changeUserPasswordAPI = async(data) =>{
    try {

        const response = await axioswithToken.post(`/change-password`, data);
        return response.data;
        
    } catch (error) {
        throw error
    }
}

export const updateUserAccountAPI = async(data) =>{
    try {

        const response = await axioswithToken.post(`/update-account`,data)
        return response.data
        
    } catch (error) {
        throw error 
    }
}

export const updateUserAvatarAPI = async(data) =>{
    try {

        const response = await axioswithToken.patch(`/avatar`,data)
        return response.data
        
    } catch (error) {
        throw error
    }
}

export const deactivateUserAPI = async() =>{
    try {
        const response = await axioswithToken.delete(`/delete-current-user`)
        return response.data
        
    } catch (error) {
        throw error
    }
}



//feedback
export const feedbackUserAPI = async(body) =>{
    try {
        const response = await axios.post(`${userBaseURL}/feedback`,body)
        return response.data
        
    } catch (error) {
        throw error
    }
}


export const GetFeedbackUserAPI = async() =>{
    try {
        const response = await axios.get(`${userBaseURL}/get-feedback`)
        return response.data
        
    } catch (error) {
        throw error
    }
}

