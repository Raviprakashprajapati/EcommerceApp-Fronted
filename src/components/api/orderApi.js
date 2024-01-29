import axios from "axios";

const orderBaseURL = 'https://fullmernecommerceapp.onrender.com/api/v1/orders'



const axioswithToken = axios.create({
    baseURL:orderBaseURL,
    withCredentials:true,
    headers:{
        'Content-Type':"application/json"
    }
})

const token = localStorage.getItem('accessToken') || null;
if(token){
    axioswithToken.defaults.headers['Authorization'] = 'Bearer ' + token
}





export const ordersUserAPI = async() =>{
    try {

        const response = await axioswithToken.get(`${orderBaseURL}/all-orders`)
        return response.data
        
    } catch (error) {
        throw error
    }
}


export const orderDetailAPI = async(id) =>{
    try {

        const response = await axioswithToken.get(`${orderBaseURL}/get-order/${id}`)
        return response.data
        
    } catch (error) {
        throw error
    }
}


export const addOrderAPI = async(data) =>{
    try {
        //{productId,quantity}
        const response = await axioswithToken.post(`${orderBaseURL}/add-order`,data)
        return response.data
        
    } catch (error) {
        throw error
    }
}

export const addCartToOrderAPI = async() =>{
    try {

        const response = await axioswithToken.post(`${orderBaseURL}/add-cart-order`)
        return response.data
        
    } catch (error) {
        throw error
    }
}


export const deleteParticularOrderAPI = async(orderId) =>{
    try {
       
        const response = await axioswithToken.delete(`${orderBaseURL}/delete-order/${orderId}`)
        return response.data
        
    } catch (error) {
        throw error
    }
}






