import React, { useEffect, useState } from 'react'
import CarouselBar from '../../design/CarouselBar'
import NavBar from '../utils/NavBar'
import ProductCardHome from '../../design/ProductCardHome'
import Loader from '../utils/Loader'
import image05 from "../../assets/image/image05.jpg"
import Footer from '../utils/Footer'
import { allProductsAPI, publicDashboardAPI } from '../api/productApi'
import { getCurrentUserAPI } from '../api/userApi'
import { Link } from 'react-router-dom'

function Home() {

  const [isLoading,setIsLoading] = useState(true)
  const [homeProduct,setHomeProduct] = useState(null)
  const [dashboard,setDashboard] = useState(null)



  //check user first
  useEffect(()=>{
    getCurrentUserAPI(JSON.parse(localStorage.getItem('user'))?._id)
    .then((data)=>{
      console.log("data received ",data)
    }).catch((err)=>{
      localStorage.clear()
      console.log("error received ",err)
    })

  },[])



  useEffect(()=>{

    allProductsAPI()
    .then((data)=>{
      // console.log(data)
      if(data){
        const trendingData = data.data.filter(product=>product.trending==true)
        // console.log(trendingData)
        setIsLoading(false)
        setHomeProduct(trendingData)
      }      
    })
    .catch((err)=>{
      console.log("error: " + err)
    })

  },[])

  useEffect(()=>{

    publicDashboardAPI()
    .then((data)=>{
      // console.log("dashboards:", data); 
      if(data){
        setDashboard(data.data)
      }
      
    })
    .catch((err)=>{
      console.log("error: " + err)
    })

  },[])
  

  
  
  return (
    <>

    


    {
      isLoading?<Loader/>:  <>
     

      {/* SECOND NAVBAR */}
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <Link to={`/category/eletronics`}
                     className="text-gray-900 dark:text-white hover:underline"
                     >
                
                  Electronics
                </Link>
              </li>
              <li><Link to={`/category/phone`}
                     className="text-gray-900 dark:text-white hover:underline"
                     >
                
                  Phone
                </Link>
               
              </li>
              <li><Link to={`/category/clothing`}
                     className="text-gray-900 dark:text-white hover:underline"
                     >
                
                  Clothing
                </Link>
               
              </li>
              <li><Link to={`/category/shirt`}
                     className="text-gray-900 dark:text-white hover:underline"
                     >
                
                  Shirt
                </Link>
                
              </li>
              <li><Link to={`/category/tv`}
                     className="text-gray-900 dark:text-white hover:underline"
                     >
                
                  SmartTV
                </Link>
              
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      


      <CarouselBar />

      <ProductCardHome data={homeProduct} productHeaderName="Trending Deals" />

      <br />
      

      <div className="max-w-md mx-auto  rounded-xl shadow-md overflow-hidden md:max-w-2xl border  ">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={image05}
              alt="Modern building architecture"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
               Seamless Shopping Experience
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Discover and Shop with Ease
            </a>
            <p className="mt-2 text-slate-500">
            Shop seamlessly on our user-friendly platform. Find everything you need effortlessly.Effortless shopping, all you need.
            </p>
          </div>
        </div>
      </div>

      {/* connect */}
      <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">Trusted by the world’s most innovative teams</h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" width="158" height="48"/>
          <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" width="158" height="48"/>
          <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" width="158" height="48"/>
          <img className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg" alt="SavvyCal" width="158" height="48"/>
          <img className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg" alt="Statamic" width="158" height="48"/>
        </div>
      </div>
      </div>

      <div class="bg-white py-24 mt-[-90px] sm:py-32">
      <div class="flex justify-center mb-9">
            <dt class="text-base leading-7 text-gray-600"></dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-slate-600 sm:text-5xl">{dashboard?.traffic}+ Traffic Frequency</dd>
          </div><br />
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
        
          <div class="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt class="text-base leading-7 text-gray-600">Total Registered Users</dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{dashboard?.users+40}<span className='font-serif' >+</span> Users</dd>
          </div>
          <div class="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt class="text-base leading-7 text-gray-600"></dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{dashboard?.products+100}<span className='font-serif' >+</span> Products</dd>
          </div>
          <div class="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt class="text-base leading-7 text-gray-600">Total Orders Placed</dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{dashboard?.orders+15}<span className='font-serif' >+</span> Orders</dd>
          </div>
        </dl>
      </div>
    </div>           




      <Footer/>
    
   

    
    </>
    }
  
    </>
  )
}

export default Home
