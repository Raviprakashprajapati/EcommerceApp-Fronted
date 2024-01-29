import axios from "axios";

const adminBaseUrl = "https://fullmernecommerceapp.onrender.com"


const axioswithToken = axios.create({
    baseURL:adminBaseUrl,
    withCredentials:true,
    headers:{
        'Content-Type':"application/json"
    }
})

const token = localStorage.getItem('accessToken') || null;
if(token){
    axioswithToken.defaults.headers['Authorization'] = 'Bearer ' + token
}


//user

export const adminLoginAPI = async(data) =>{
    try {
        // username,emal,password
        const response = await axioswithToken.post(`/api/v1/users/admin/login`,data)
        return response.data
        
    } catch (error) {
        throw error
    }
}

export const adminLogoutAPI = async() =>{
    try {

        const response = await axioswithToken.post(`/api/v1/users/admin/logout`)
        return response.data
        
    } catch (error) {
        throw error
    }
}

export const adminGetAllUsersAPI = async() =>{
    try {

        const response = await axioswithToken.get(`/api/v1/users/admin/users`)
        return response.data
        
    } catch (error) {
        throw error
    }
}

export const adminDeletePerUserAPI = async(id) =>{
    try {

        const response = await axioswithToken.delete(`/api/v1/users/admin/${id}`)
        return response.data
        
    } catch (error) {
        throw error
    }
}


//product

export const adminGetAllProductsAPI = async() =>{
    try {

        const response = await axioswithToken.get(`/api/v1/products/admin/products`)
        return response.data
        
    } catch (error) {
        throw error
    }
}

export const adminAddProductAPI = async(data) =>{
    try {

        const response = await axioswithToken.post(`/api/v1/products/admin/add-product`,data)
        return response.data
        
    } catch (error) {
        throw error
    }
}

export const adminUpdateProductAPI = async(id,body) =>{
    try {

        const response = await axioswithToken.patch(`/api/v1/products/admin/update-product/${id}`,body)
        return response.data
        
    } catch (error) {
        throw error
    }
}

export const adminDeleteProductAPI = async(id) =>{
    try {

        const response = await axioswithToken.delete(`/api/v1/products/admin/delete-product/${id}`)
        return response.data
        
    } catch (error) {
        throw error
    }
}


//order

export const adminGetAllOrders = async() =>{
    try {

        const response = await axioswithToken.get(`/api/v1/products/admin/orders`)
        return response.data
        
    } catch (error) {
        throw error
    }
}

export const adminGetOrderDetail = async(orderId)=>{
    try {

        const response = await axioswithToken.get(`/api/v1/products/admin/orderDetail/${orderId}`)
        return response.data
        
    } catch (error) {
        throw error
    }
}

export const adminUpdateOrderAPI = async(id,status) =>{
    try {

        const response = await axioswithToken.patch(`/api/v1/products/admin/update-order-status/${id}`,status)
        return response.data
        
    } catch (error) {
        throw error
    }
}

export const adminDashboardAPI = async() =>{
    try {

        const response = await axioswithToken.get(`/api/v1/products/admin/dashboard`)
        return response.data
    } catch (error) {
        throw error
    }
}








