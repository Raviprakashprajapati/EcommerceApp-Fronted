import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/redux-features/userSlice";
import { updateUserAccountAPI } from "../api/userApi";
import { useNavigate } from "react-router-dom";
import CountDown from "../utils/CountDown";

function UpdateProfile() {

  const user = useSelector(selectCurrentUser)
  // console.log(user)

  const [name,setName] = useState(user.name)
  const [email,setEmail] = useState(user.email)
  const [contact,setContact] = useState(user.contact)
  const [address,setAddress] = useState(user.address)
  const [check,setCheck] = useState(false)
  const [error,setError] = useState(false)
  const navigate = useNavigate()
  const [CountTimer,setCountTimer] = useState(false)


    const closeCountTimer=()=>{
      setCountTimer(false)
    }

  function handleSubmit(e){
    e.preventDefault()
    if(check && name && address && contact && email){
      setCountTimer(true)
      if(email.includes('@')){
        setError(false)
        
        updateUserAccountAPI({name,email,contact,address})
        .then((data)=>{
          console.log("data ",data)
          const accessToken = localStorage.getItem('accessToken')
          const refreshToken = localStorage.getItem('refreshToken')
          localStorage.clear()
          localStorage.setItem('user',JSON.stringify(data.data))
          localStorage.setItem('refreshToken',refreshToken)
          localStorage.setItem('accessToken',accessToken)
          navigate("/")
          window.location.reload()
          
        })
        .catch((error)=>{
          console.log("error ",error.response)
        })
      }

    }else{
      setError(true)
    }
    
  }







  return (
    <div>

       {/* COUNTDOWN */}
  {CountTimer && <CountDown onClose={closeCountTimer}  />}
        
      
      {/* header */}
      <br />
      <div className="w-[93%] md:w-[40%] m-auto ">
        <div className="px-4 sm:px-0 ">
          <h3 className="text-lg bg-slate-600 text-white  font-semibold  leading-7 p-3 rounded-lg text-center">
            Update Account
          </h3>

          
        </div>{" "}
        </div>
    <br /><br />


    


      {/* form */}
      <form className="max-w-sm mb-20 mx-auto border border-slate-300 p-5 rounded-lg ">

        <div className="mb-5">
          <label
            for="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="text"
            value={name}
            onChange={((e)=>setName(e.target.value))}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter new name"
            required
          />
        </div>
        
        <div className="mb-5">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter new email"
            required
          />
        </div>

        <div className="mb-5">
          <label
            for="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Contact
          </label>
          <input
            type="text"
            value={contact}
            onChange={(e)=>setContact(e.target.value)}
            id="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter new contact number"
            required
          />
        </div>

        <div className="mb-5">
          <label
            for="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Address
          </label>
          <input
            type="text"
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
            id="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter new address"
            required
          />
        </div>
      
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              checked={check}
              onChange={(e)=>setCheck(!check)}
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            for="remember"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Are you sure to update
          </label>
        </div>

              
       {
        error? <div className="flex items-start mb-5">
          
        <p className="text-sm text-red-500" >Please fill all details</p>
       </div>:null
       }

        <button
          onClick={handleSubmit}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
         Update Confirm
        </button>
      </form>


    </div>
  );
}

export default UpdateProfile;
