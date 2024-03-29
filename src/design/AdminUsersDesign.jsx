import React, { useState } from "react";
import adminImageMain from "../assets/image/adminImageMain.png";
import pc2 from "../assets/image/pc2.jpg";
import { adminDeletePerUserAPI } from "../components/api/adminApi";
import CountDown from "../components/utils/CountDown";

function AdminUsersDesign({ user }) {
  const [showImage, setShowImage] = useState(false);
  const [CountTimer, setCountTimer] = useState(false);
  const [inputUser, setInputUser] = useState("");

  const closeCountTimer = () => {
    setCountTimer(false);
  };

  function handleDelete(id) {
    adminDeletePerUserAPI(id)
      .then((data) => {
        setCountTimer(true);
        console.log("data");
        window.location.reload();
      })
      .catch((Err) => {
        console.log("err error ", Err);
      });
  }

 



  return (

    <div>
      {/* COUNTDOWN */}
      {CountTimer && <CountDown onClose={closeCountTimer} />}

      {/* header */}
      <div className="mt-5 mb-8">
        <div className="w-[100%] md:w-[80%] m-auto ">
          <div className="px-4 sm:px-0 ">
            <div className="bg-black p-2  rounded-lg flex justify-center items-center ">
              <img src={adminImageMain} className="h-[4rem]" alt="" />
              <h3 className="text-lg text-amber-300  font-semibold  leading-7 p-3 rounded-lg text-center">
                Admin - Customers Details
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* search box */}
      <div className="mt-3 mb-7">
        <div className="w-[90%] md:w-[70%] m-auto">
          <label class="relative block">
            <span class="sr-only">Search</span>
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              🔎
            </span>
            <input
              class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              value={inputUser}
              onChange={(e) => setInputUser(e.target.value.toLowerCase())}
              placeholder="Search for anything..."
              type="text"
              name="search"
            />
          </label>
        </div>
      </div>


      {/* all users */}
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                name
              </th>
              <th scope="col" class="px-6 py-3">
                Avatar
              </th>
              <th scope="col" class="px-6 py-3">
                email
              </th>
              <th scope="col" class="px-6 py-3">
                username
              </th>
              <th scope="col" class="px-6 py-3">
                contact
              </th>
              <th scope="col" class="px-6 py-3">
                Orders
              </th>
              <th scope="col" class="px-6 py-3">
                address
              </th>
              
              <th scope="col" class="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {user.filter((product)=>inputUser.toLowerCase()===""?product:
                            product?.name.toLowerCase().includes(inputUser) || product?.username.toLowerCase().includes(inputUser)||
                            product?.contact.toLowerCase().includes(inputUser) ||
                            product?.address.toLowerCase().includes(inputUser)
                            )
            .map((i, index) => (
              <tr
                key={index + 1}
                class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {index + 1}: {i?.name}
                </th>
                <td class="px-6 py-4">
                  <img src={i?.profileImage} className="w-[50px] md:w-[70px]" alt="" />
                </td>
                <td class="px-6 py-4">{i?.email}</td>
                <td class="px-6 py-4">{i?.username}</td>
                <td class="px-6 py-4">{i?.contact}</td>
                <td class="px-6 py-4">
                  {i?.ordersId?.length > 0 ? i?.ordersId.length : "0"}
                </td>
                <td class="px-6 py-4 text-[0.7rem] ">{i?.address}</td>
             
                <td class="px-6 py-4">
                  <button
                    onClick={() => handleDelete(i?._id)}
                    class="font-bold text-red-700 hover:underline"
                  >
                    D
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
      <br />
      <br />

      {/* Pop-up image */}
      <div className="relative">
        {showImage && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="max-w-3xl mx-auto">
              {/* Close button */}
              <button
                onClick={() => setShowImage(false)}
                className="absolute top-4 right-4 text-white text-2xl focus:outline-none"
              >
                &times;
              </button>

              {/* Image */}
              <img src={pc2} alt="Pop-up Image" className="rounded-lg" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminUsersDesign;
