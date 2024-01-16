import React, { useEffect, useState } from 'react';

function CountDown({onClose}) {

    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    useEffect(() => {
      if (countdown === 0) {
        onClose();
      }
    }, [countdown, onClose]);
  
  return (
    <div>

    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md">
        <p className="text-2xl font-bold mb-4">Countdown: {countdown}</p>
        {/* <button
          onClick={onClose}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
        >
          Close
        </button> */}
      </div>
    </div>
      

    </div>
  )
}

export default CountDown
