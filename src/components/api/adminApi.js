import axios from "axios";

const adminUserBaseURL = '/api/v1/users/admin'
const adminProductBaseURL = '/api/v1/products/admin'
const adminOrderBaseURL = '/api/v1/orders/admin'


//user

export const adminLoginAPI = async(data) =>{
    try {
        // username,emal,password
        const response = await axios.post(`${adminUserBaseURL}/login`,data)
        return response.data
        
    } catch (error) {
        throw error
    }
}

export const adminLogoutAPI = async() =>{
    try {

        const response = await axios.post(`${adminUserBaseURL}/logout`)
        return response.data
        
    } catch (error) {
        throw error
    }
}

export const adminGetAllUsersAPI = async() =>{
    try {

        const response = await axios.get(`${adminUserBaseURL}/users`)
        return response.data
        
    } catch (error) {
        throw error
    }
}

export const adminDeletePerUserAPI = async(id) =>{
    try {

        const response = await axios.delete(`${adminUserBaseURL}/${id}`)
        return response.data
        
    } catch (error) {
        throw error
    }
}


//product

export const adminGetAllProductsAPI = async() =>{
    try {

        const response = await axios.get(`${adminProductBaseURL}/products`)
        return response.data
        
    } catch (error) {
        throw error
    }
}

export const adminAddProductAPI = async(data) =>{
    try {

        const response = await axios.post(`${adminProductBaseURL}/add-product`,data)
        return response.data
        
    } catch (error) {
        throw error
    }
}

export const adminUpdateProductAPI = async(id) =>{
    try {

        const response = await axios.patch(`${adminProductBaseURL}/update-product/${id}`)
        return response.data
        
    } catch (error) {
        throw error
    }
}

export const adminDeleteProductAPI = async(id) =>{
    try {

        const response = await axios.delete(`${adminProductBaseURL}/${id}`)
        return response.data
        
    } catch (error) {
        throw error
    }
}


//order

export const adminGetAllOrders = async() =>{
    try {

        const response = await axios.get(`${adminOrderBaseURL}/orders`)
        return response.data
        
    } catch (error) {
        throw error
    }
}

export const adminUpdateOrderAPI = async(id,status) =>{
    try {

        const response = await axios.patch(`${adminOrderBaseURL}/update-order-status/${id}`,status)
        return response.data
        
    } catch (error) {
        throw error
    }
}







