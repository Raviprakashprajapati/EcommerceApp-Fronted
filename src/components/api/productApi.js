import axios from "axios";

const productBaseURl = 'https://fullmernecommerceapp.onrender.com/api/v1/products'


const axioswithToken = axios.create({
    baseURL:productBaseURl,
    withCredentials:true,
    headers:{
        'Content-Type':"application/json"
    }
})

const token = localStorage.getItem('accessToken') || null;
if(token){
    axioswithToken.defaults.headers['Authorization'] = 'Bearer ' + token
}




export const getUserReviewsAPI = async() =>{

    try {

        const response = await axioswithToken.get(`/myreviews`)
        return response.data
        
    } catch (error) {
        throw error
    }

}



export const allProductsAPI = async() =>{
    try {
        const response = await axios.get(`${productBaseURl}/all-product`)
        return  response.data
        
    } catch (error) {
        throw error
    }
}

export const publicDashboardAPI = async()=>{
    try {
        const response = await axios.get(`${productBaseURl}/public-dashboard`)
        return response.data
    } catch (error) {
        throw error
    }
}



export const productDetailAPI = async(id) =>{
    try {
        
        const response = await axios.get(`${productBaseURl}/product/${id}`)
        return response.data

    } catch (error) {
        throw error
    }
}

export const productReviewsAPI = async(productId) =>{
    try {

        const response = await axios.get(`${productBaseURl}/reviews/${productId}`)
        return response.data
        
    } catch (error) {
        throw error
    }
}




//need token

export const addProductReviewAPI = async(data) =>{
    try {
        //data->{productId,comment,rating}
        const response = await axioswithToken.post(`/add-review`,data)
        return response.data
        
    } catch (error) {
        throw error
    }
}

export const deleteProductReviewAPI = async(reviewId) =>{
    try {

        const response = await axioswithToken.delete(`/reviews`,reviewId)
        return response.data
        
    } catch (error) {
        throw error
    }
}



