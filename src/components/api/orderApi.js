import axios from "axios";

const orderBaseURL = '/api/v1/orders'

export const ordersUserAPI = async() =>{
    try {

        const response = await axios.get(`${orderBaseURL}/all-orders`)
        return response.data
        
    } catch (error) {
        throw error
    }
}