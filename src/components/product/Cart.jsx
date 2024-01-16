import React, { useEffect, useState } from "react";
import cartImage from "../../assets/image/cartImage.png"
import cartImage02 from "../../assets/image/cartImage02.png"
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/redux-features/userSlice";
import { cartsUserAPI } from "../api/userApi";

function Cart() {

  const user = useSelector(selectCurrentUser)
  const [cart,setCart] = useState(null)
  useEffect(()=>{
    if(user.cartsId){
      
      cartsUserAPI()
      .then((data)=>{
        // console.log("data ",data?.data)
        if(data?.data){

          setCart(data.data)
        }
      })
      .catch((err)=>{
        console.log("error: " + err)
      })

    }
  },[])

  




  return (
    <div>
      <div class="h-screen pt-10">
       
       <div  >
        <img src={cartImage} className="h-20 block m-auto " alt="" />
       <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
       </div>

       
        {
          user.cartsId ?

          <>
            {/* carts */}
            <div  class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
              <div class="rounded-lg md:w-2/3">

               {
                cart?.products.map((percart,index)=>{
                  return(
                    <>
                     {/* PER CART */}
                <div key={index} class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                  <img
                    src={percart?.productImage}
                    alt="product-image"
                    class="w-auto  rounded-lg h-[7rem] mx-auto sm:mx-0"
                  />

                  {/* cart details */}
                  <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div class="mt-5 sm:mt-0">
                      <h2 class="text-lg font-bold text-gray-900">
                        {percart?.productName}
                      </h2>
                      <p class="mt-1 text-sm font-semibold text-black">Price : ₹ {percart?.price}</p>
                    </div>
                    <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <div class="flex items-center border-gray-100">
                        <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                          {" "}
                          -{" "}
                        </span>
                        <span class="cursor-pointer rounded-l bg-white py-1 px-3.5 duration-100 font-bold ">
                          {" "}
                          {percart?.quantity}{" "}
                        </span>
                       
                        <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                          {" "}
                          +{" "}
                        </span>
                      </div>
                      <div class="flex items-center ">
                        <p class=" w-[5rem] cursor-pointer duration-150 bg-red-600 p-2 text-sm text-center text-white">
                          Remove</p>
                       
                        
                      </div>
                    </div>
                  </div>
                </div>
                    </>
                  )
                })
               }

                {/* END of CARTs */}
              </div>


              {/* <!-- Sub total --> */}
              <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                
                
                <hr class="my-4" />
                <div class="flex justify-between">
                  <p class="text-lg font-bold">Total</p>
                  <div class="">
                    <p class="mb-1 text-lg font-bold">₹{cart?.totalPrice} </p>
                    <p class="text-sm text-gray-700">including GST</p>
                  </div>
                </div>
                <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                  Place Order
                </button>
                {/* END OF cart price */}
              </div> 
              <br /><br />




            </div>

          </>

          :
          <>
          {/* nothing */}
          <div className="mb-10 mt-2">
            <img src={cartImage02} className="block m-auto" alt="" />
            <p className="mt-3 text-gray-400 text-center md:text-xl" >Nothing in your Cart</p>
          </div>
          </>
       
       }

          


      </div>

      

    </div>
  );
}

export default Cart;
