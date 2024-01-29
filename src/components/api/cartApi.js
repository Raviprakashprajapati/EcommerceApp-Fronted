import axios from "axios";


const productBaseURL = 'https://fullmernecommerceapp.onrender.com/api/v1/products'



const axioswithToken = axios.create({
    baseURL:productBaseURL,
    withCredentials:true,
    headers:{
        'Content-Type':"application/json"
    }
})

const token = localStorage.getItem('accessToken') || null;
if(token){
    axioswithToken.defaults.headers['Authorization'] = 'Bearer ' + token
}





export const cartsUserAPI = async()=>{
    try {
        const response = await axioswithToken.get(`${productBaseURL}/get-cart`)
        return response.data
        
    } catch (error) {
        throw error
    }
}

export const addToCartAPI = async(id) =>{
    try {

        const response = await axioswithToken.post(`${productBaseURL}/add-to-cart/${id}`)
        return response.data
        
    } catch (error) {
        throw error
    }
}


export const removeProductFromCartAPI = async(id) =>{
    try {

        const response = await axioswithToken.patch(`${productBaseURL}/remove-from-cart/${id}`)
        return response.data
        
    } catch (error) {
        throw error
    }
}


//later


export const incrementProductFromCartAPI = async(productId) =>{
    try {

        const response = await axioswithToken.patch(`${productBaseURL}/get-cart`,productId)
        return response.data
        
    } catch (error) {
        throw error
    }
}

export const decrementProductFromCartAPI = async(productIdForDecrement) =>{
    try {

        const response = await axioswithToken.patch(`${productBaseURL}/decrement-cart`,productIdForDecrement)
        return response.data
        
    } catch (error) {
        throw error
    }
}





