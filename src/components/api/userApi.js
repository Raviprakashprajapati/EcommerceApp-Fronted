import axios from "axios";

const userBaseURL = '/api/v1/users'
const productBaseURL = '/api/v1/products'

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

export const cartsUserAPI = async()=>{
    try {
        const response = await axios.get(`${productBaseURL}/get-cart`)
        return response.data
        
    } catch (error) {
        throw error
    }
}