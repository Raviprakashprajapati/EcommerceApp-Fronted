import React from 'react'
import { useSelector } from 'react-redux'
import { selectFilterSearchValue } from '../../store/redux-features/searchSlice'
import Loader from '../../utils/Loader'
import { Link } from 'react-router-dom'

function FilterProducts() {

    const product = useSelector(selectFilterSearchValue)
    console.log(product)

  return (
    <div>
        <br />
        {
            product?
            <>
                <h4 className='m-auto font-bold text-white bg-black p-3 rounded-lg text-center w-[70%] md:w-[50%] ' >Filter Products</h4>
                <div className='mb-5'  ></div>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {product?.map((product, index) => (
          <div key={index} className="p-4 bg-white shadow-md rounded-md">
           <Link to={`/product-details/${product?._id}`} > 
            {/* Replace the content below with your product card component */}
            <div>
              <img
                src={product?.images?.[0]}
                className="h-[7rem] m-auto"
                alt=""
              />
            </div>
            <h2 className=" font-semibold mb-2 text-center mt-2">
              {product?.name}
            </h2>
            <p className="text-gray-700 text-center">{}</p>
            <div className="mt-2">
              <p className="text-slate-500 font-bold text-center ">₹ {product?.price}</p>
            <p className="text-center text-sm" >{product?.discount?.includes("null")?null:product.discount}</p>
            </div>
           </Link>
          </div>
        ))}
      </div>
            </>:<Loader/>
        }

       
      
    </div>
  )
}

export default FilterProducts
