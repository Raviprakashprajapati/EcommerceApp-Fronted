import axios from "axios";


const productBaseURL = '/api/v1/products'

export const cartsUserAPI = async()=>{
    try {
        const response = await axios.get(`${productBaseURL}/get-cart`)
        return response.data
        
    } catch (error) {
        throw error
    }
}