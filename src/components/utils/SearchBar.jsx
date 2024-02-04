import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { searchAllProduct, searchByPrice } from "../api/searchApi";
import { allProductsAPI } from "../api/productApi";
import filter2 from "../../assets/image/filter2.png"
import { useDispatch } from "react-redux";
import { selectFilterSearchValue, setFilterSearchValue } from "../store/redux-features/searchSlice";

function SearchBar() {
  const [inputSearch, setInputSearch] = useState("");
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const [subCategory, setSubCategory] = useState("")
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const [closeFilterDiv,setCloseFilterDiv] = useState(false)
  const [priceError,setPriceError] = useState(false)
  const dispatch = useDispatch()
  


  useEffect(() => {
    allProductsAPI()
      .then((data) => {
        console.log("data by write ", data);
        if (data) {
          setProduct(data?.data);
        }
      })
      .catch((err) => {
        console.log("err in search bar ", err);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (inputSearch === "") {
    } else {
      navigate(`/searchbar/${inputSearch}`);
      setInputSearch("")
    }
  }

  function handlePriceBarSubmit(){
  
    if(subCategory=="nothing" || minPrice =="" || maxPrice ==""){
          setPriceError(true)
          console.log("nothing")
    }else{
      setPriceError(false)

      searchByPrice({subCategory,minPrice,maxPrice})
      .then((data)=>{
        

        if(data?.data){
          console.log("price data ",data)
          setCloseFilterDiv(!closeFilterDiv)
          dispatch(setFilterSearchValue(data?.data))
          navigate("/searchBar/price")
        }
      }).catch((Err)=>{
        console.log("price in error ",Err)
      })
      
    }
   
   
  }


  






  return (
    <div className="mb-2">
      {/* searchbar */}
      <div className="w-[80%] md:w-[70%] m-auto">

        <form class="relative">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>

          <div class="flex items-center">

            <div class="relative w-full">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>

              <input
                type="search"
                id="default-search"
                class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search products, phone..."
                required
                value={inputSearch}
                onChange={(e) => setInputSearch(e.target.value.toLowerCase())}
              />

              
            </div>

            <div >
            <img src={filter2} className="h-[1.3rem] ml-[4px]" alt="" onClick={()=>setCloseFilterDiv(!closeFilterDiv)}   />
            </div>

          </div>

          {/* Display search results */}
          {inputSearch === "" ? null : (
            <div className="mt-1 w-[80%] md:w-[70%] max-h-40 fixed z-50 bg-black text-white overflow-y-auto rounded-lg ">
              {product ? (
                <>
                  {product
                    ?.filter( (i) =>
                        i?.name.toLowerCase().includes(inputSearch) ||
                        i?.brand.toLowerCase().includes(inputSearch) ||
                        i?.stock.toLowerCase().includes(inputSearch) ||
                        i?.age.toLowerCase().includes(inputSearch) ||
                        i?.keywords.toLowerCase().includes(inputSearch) ||
                        i?.features.toLowerCase().includes(inputSearch) ||
                        i?.price.toLowerCase().includes(inputSearch) ||
                        i?.subCategory.toLowerCase().includes(inputSearch) ||
                        String(i?.raiting).includes(inputSearch) 
                    )

                    ?.map((result, index) => (
                      <Link
                        onClick={() => setInputSearch("")}
                        key={index}
                        to={`/product-details/${result?._id}`}
                        className="p-2 border-b block"
                      >
                        {result?.name}
                      </Link>
                    ))}
                </>
              ) : (
                <div
                  role="status"
                  class="w-full p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
                >
                  <div class="flex items-center justify-between">
                    <div>
                      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                      <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                  </div>
                </div>
              )}
            </div>
          )}
        </form>


    

        



          {/* second div */}
        {
          closeFilterDiv?  <div className="fixed top-0 right-0 left-0 z-50 flex items-center justify-center h-screen bg-gray-800 bg-opacity-50 ">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
    
           <div className="flex justify-between items-center" >
           <h2 className="text-2xl font-semibold mb-4">Filter </h2>
            <div onClick={()=>setCloseFilterDiv(!closeFilterDiv)} >❌</div>
           </div>
    
            {/* Subcategory Filter */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">Subcategory:</label>
              <select className="mt-1 block w-full p-2 border rounded-md" id="subcategoryFilter" value={subCategory} onChange={(e)=>setSubCategory(e.target.value)} >
                <option value="nothing">select one</option>
                <option value="phone">Phone</option>
                <option value="tv">TV</option>
                <option value="shirt">Shirt</option>
                <option value="tshirt">T-shirt</option>
              </select>
            </div>
    
            {/* Price Range Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Price Range:</label>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Min Price"
                  className="mt-1 block w-1/2 p-2 mr-2 border rounded-md"
                  value={minPrice}
                  onChange={(e)=>setMinPrice(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Max Price"
                  className="mt-1 block w-1/2 p-2 border rounded-md"
                  value={maxPrice}
                  onChange={(e)=>setMaxPrice(e.target.value)}
                />
              </div>
            </div>
            {
              priceError?<p className="text-red-600 text-sm text-center font-bold mt-4 " > All fields required </p>:null
            }
    
            {/* Apply Button */}
            <div className="mt-3">
              <button className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700" onClick={handlePriceBarSubmit} >
                Apply Filters
              </button>
            </div>
          </div>
             </div>:null
        }
       



      </div>
    </div>
  );
}

export default SearchBar;
