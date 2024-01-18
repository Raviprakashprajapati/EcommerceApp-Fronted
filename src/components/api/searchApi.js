import axios from "axios"


const searchBaseURL = '/api/v1/products/search'

export const searchProductByReqAPI = async(search)=>{
    try {
        const response = await axios.get(`${searchBaseURL}/req`,search)
        return response.data
        
    } catch (error) {
        throw error
    }
}