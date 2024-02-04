import React, { useEffect, useState } from 'react'
import MyReviewDesign from '../../design/MyReviewDesign'
import reviewImage from "../../assets/image/reviewImage.jpg"
import { getUserReviewsAPI } from '../api/productApi'
import { getDate } from '../utils/randomFunciton'

function MyReview() {

  const [review,setReview] = useState(null)

  useEffect(()=>{

    try {

      getUserReviewsAPI()
      .then((data)=>{
        // console.log(data)
        if(data?.data?.length>=1)
        {
          
        setReview(data?.data)
        }
      })
      
    } catch (error) {
      console.log("error: " + error)
    }

  },[])

  function handleDate(d)
  {
    return getDate(d)
  }


  return (
    <div>
        <br/> <br/>
         {/* order header */}
         <div className="w-[93%] md:w-[40%] m-auto ">
        <div className="px-4 sm:px-0 ">
          <h3 className="text-lg bg-black text-white  font-semibold  leading-7 p-3 rounded-lg text-center">
            My Reviews
          </h3>

          
        </div>{" "}
        </div>
    <br />


      {
        review?null:  <div className='mt-10' >
        <img src={reviewImage} className='h-[10rem] block m-auto' alt="" />
        <p className='text-center text-slate-500' >There are no reviews at the moment </p>
      </div>
      }
      
   
            {
              review?.length>=1 && review.map((i,index)=>{
                return(
                  <MyReviewDesign key={index}

                  comment={i?.comment}
                  rating={i?.rating}
                  product={i?.productId}
                  date={handleDate(i?.createdAt)}
                  
                  
                  />
                )
              })
            }
      

    
      
    
    

    </div>
  )
}

export default MyReview
