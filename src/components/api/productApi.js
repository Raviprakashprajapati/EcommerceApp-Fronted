import axios from "axios";

const productBaseURl = '/api/v1/products'

export const getUserReviewsAPI = async() =>{

    try {

        const response = await axios.get(`${productBaseURl}/myreviews`)
        return response.data
        
    } catch (error) {
        throw error
    }

}