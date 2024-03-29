import React, { useEffect, useState } from "react";
import adminImageMain from "../../assets/image/adminImageMain.png";
import { useParams } from "react-router-dom";
import { orderDetailAPI } from "../api/orderApi";
import { adminGetOrderDetail, adminUpdateOrderAPI } from "../api/adminApi";
function AdminUpdateOrder() {
  const { orderId } = useParams();
  const [orderDetail, setOrderDetail] = useState(null);

  useEffect(() => {
    adminGetOrderDetail(orderId)
      .then((data) => {
        if (data) {
          setOrderDetail(data.data);
        }
      })
      .catch((err) => {
        console.log("err : " + err);
      });
  }, []);

  function handleOrderSubmit(e){
    e.preventDefault()
    if(orderDetail?._id){
      adminUpdateOrderAPI(orderDetail?._id,{status:"success"})
      .then((data)=>{
        console.log("data ",data)
      }).catch((err)=>{
        console.log("err in update order ", err)
      })
    }
  }

  return (
    <div>
      {/* header */}
      <div className="mt-5 mb-8">
        <div className="w-[100%] md:w-[80%] m-auto ">
          <div className="px-4 sm:px-0 ">
            <div className="bg-black  rounded-lg flex justify-center items-center p-2 ">
              <img src={adminImageMain} className="h-[4rem]" alt="" />
              <h3 className="text-lg text-amber-300  font-semibold  leading-7 p-3 rounded-lg text-center">
                Admin - Order Modify
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* order detail */}
      <div className="m-8 flex justify-center items-center flex-col  p-4 rounded-lg">
        <ul>
          <li className="text-xxl bg-slate-200 p-4 rounded-lg text-slate-900 mb-2 font-medium">
            Order ID: #{orderDetail?._id}
          </li>
          <li className="text-xxl bg-slate-200 p-4 rounded-lg text-slate-900 mb-2 font-medium">
            Customer Name: {orderDetail?.customerName}
          </li>
          <li className="text-xxl bg-slate-200 p-4 rounded-lg text-slate-900 mb-2 font-medium">
            {" "}
            Contact: {orderDetail?.contactNumber}
          </li>

          <li className="text-xxl bg-slate-200 p-4 rounded-lg text-slate-900 mb-2 font-medium">
            Address: {orderDetail?.orderAddress}
          </li>
          <li className="text-xxl bg-green-200 p-4 rounded-lg text-slate-900 mb-2 font-medium">
            Status : {orderDetail?.status}
          </li>
        </ul>
      </div>


      {/* orderDISPLAY */}
      
      {
        // {/* single porduct */}
        orderDetail?.products.length == 1 ? (
          <div className="w-[90%] md:w-2/3 m-auto">
            <div className="flex h-full flex-col bg-white shadow-xl">
              <div className="flex-1 px-4 py-6 sm:px-6">
                <div className="mt-8">
                  <div className="flow-root">
                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                      {/* per order */}
                      <li className="flex flex-col py-6">
                        {/* Order Summary */}

                        <div className="flex py-6">
                          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img
                              src={orderDetail?.products[0]?.productImage}
                              alt="Product 1"
                              className="h-full m-auto p-2 w-auto object-cover object-center"
                            />
                          </div>

                          <div className="ml-4 flex flex-1 flex-col">
                            <div>
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3>
                                  <a href="#">
                                    {orderDetail?.products[0]?.productName}
                                  </a>
                                </h3>
                                <p className="ml-4">
                                  ₹ {orderDetail?.products[0]?.price}
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-1 items-end justify-between text-sm">
                              <p className="text-gray-500 font-semibold">
                                Qty {orderDetail?.products[0]?.quantity}
                              </p>
                              {/* Cancel button can be placed here if needed */}
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // {/* for multiple product */}
          <div className="w-[90%] md:w-2/3 m-auto">
            <div className="flex h-full flex-col bg-white shadow-xl">
              <div className="flex-1 px-4 py-6 sm:px-6">
                <div className="mt-8">
                  <div className="flow-root">
                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                      {/* per order MANY PRODUCTS */}
                      <li className="flex flex-col py-6">
                        {/* Order Summary */}

                        {orderDetail?.products.map((i, index) => (
                          <>
                            {/* Product 1 */}
                            <div className="flex py-6">
                              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                  src={i?.productImage}
                                  alt="Product Image"
                                  className="h-full p-2 w-auto object-cover object-center"
                                />
                              </div>

                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <a href="#">
                                        Product {index + 1} {i?.productName}
                                      </a>
                                    </h3>
                                    <p className="ml-4">₹ {i?.price}</p>
                                  </div>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <p className="text-gray-500 font-semibold">
                                    Qty {i?.quantity}
                                  </p>
                                  {/* Cancel button can be placed here if needed */}
                                </div>
                              </div>
                            </div>
                          </>
                        ))}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }



      {/* Order price */}
      <div className="m-8 flex justify-center items-center flex-col ">
        <ul>
          <li className="text-xxl bg-black p-4 rounded-lg text-white mb-2 font-medium">
            Total Price : {orderDetail?.totalAmount}
          </li>
        </ul>
      </div>


      {/* change input fields */}
      {orderDetail?.status?.includes("success") ? null : (
        <div className="mb-20 mt-10 ">
          <p className="text-center font-medium mb-5 mt-4 ">
            Change Order Status
          </p>
          <form class="max-w-sm mx-auto border  p-3 rounded-lg w-[90%] md:w-[60%]">
            {/* input fields */}
            <div>
              <label
                for="zip-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Order Status :
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none"></div>
                <input
                  type="text"
                  id="zip-input"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="success "
                  required
                  value="success"
                />
              </div>
              <p
                id="helper-text-explanation"
                class="mt-2 text-sm text-gray-500 dark:text-gray-400"
              >
                are you sure order has success
              </p>
            </div>

            {/* submit button */}
            <div class="flex items-start mb-5 mt-5">
              <div class="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                for="terms"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                order has{" "}
                <a
                  href="#"
                  class="text-blue-600 hover:underline dark:text-blue-500"
                >
                  delivered
                </a>
              </label>
            </div>
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleOrderSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      )}


    </div>
  );
}

export default AdminUpdateOrder;
