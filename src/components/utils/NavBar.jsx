import React, { useState } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import "../../css/NavBar.css"
import { Sidebar } from "flowbite-react";
import logo from "../../assets/image/logo.png";
import sidebarImage from "../../assets/image/sidebarImage.png";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { Link, NavLink, useNavigate } from "react-router-dom";

function NavBar() {
  const [sideBarToggle, setSidebarToggle] = useState(false);
  const navigate = useNavigate()
  function sideBarToggleBtn() {
    setSidebarToggle(!sideBarToggle);
  }

  return (
    <>

    {/* ZERO SIDEBAR */}
      {sideBarToggle ? (
        <Sidebar
          aria-label="Sidebar with logo branding example"
          className=" fixed h-screen z-50  "
        >
          <Sidebar.Logo className="hover:cursor-pointer" onClick={()=>navigate("/")} >
          <img
            src={logo}
            className="ml-[-15px]  w-[9rem] sm:h-15"
            alt="Flowbite React Logo"
          />
          </Sidebar.Logo>

          <Sidebar.Items>
            <Sidebar.ItemGroup>


           <div className="flex items-center justify-start " onClick={()=>setSidebarToggle(!sideBarToggle)}  >
           <Sidebar.Item href="#" icon={HiChartPie}>
            </Sidebar.Item>
              <Link to='/profile' >
              <p className="text-black font-semibold ml-[-17px] " >Profile</p>
              </Link>
           </div>
             
           <div className="flex items-center justify-start " onClick={()=>setSidebarToggle(!sideBarToggle)}  >
           <Sidebar.Item href="#" icon={HiViewBoards}>
            </Sidebar.Item>
              <Link to='/cart' >
              <p className="text-black font-semibold ml-[-17px] " >Cart</p>
              </Link>
           </div>

           <div className="flex items-center justify-start "  onClick={()=>setSidebarToggle(!sideBarToggle)}  >
           <Sidebar.Item href="#" icon={HiInbox}>
            </Sidebar.Item>
              <Link to='/order' >
              <p className="text-black font-semibold ml-[-17px] " >Orders</p>
              </Link>
           </div>

           <div className="flex items-center justify-start " onClick={()=>setSidebarToggle(!sideBarToggle)}  >
           <Sidebar.Item href="#" icon={HiUser}>
            </Sidebar.Item>
              <Link to='/myreviews' >
              <p className="text-black font-semibold ml-[-17px] " >Reviews</p>
              </Link>
           </div>

           <div className="flex items-center justify-start " onClick={()=>setSidebarToggle(!sideBarToggle)}  >
           <Sidebar.Item href="#" icon={HiShoppingBag}>
            </Sidebar.Item>
              <Link to='/order' >
              <p className="text-black font-semibold ml-[-17px] " >Products</p>
              </Link>
           </div>


           <div className="flex items-center justify-start " onClick={()=>setSidebarToggle(!sideBarToggle)}  >
           <Sidebar.Item href="#" icon={HiArrowSmRight}>
            </Sidebar.Item>
              <Link to='/login' >
              <p className="text-white font-semibold ml-[-17px] bg-slate-600 p-3 rounded-lg " >Login</p>
              </Link>
           </div>

           <div className="flex items-center justify-start " onClick={()=>setSidebarToggle(!sideBarToggle)}  >
           <Sidebar.Item href="#" icon={HiTable}>
            </Sidebar.Item>
              <Link to='/sign-up' >
              <p className="text-white font-semibold ml-[-17px] bg-slate-600 p-3 rounded-lg " >Sign-Up</p>
              </Link>
           </div>

           <div className="flex items-center justify-start " onClick={()=>setSidebarToggle(!sideBarToggle)}  >
           <Sidebar.Item href="#" icon={HiArrowSmRight}>
            </Sidebar.Item>
              <Link to='/admin/login' >
              <p className="text-white font-semibold ml-[-17px] bg-slate-600 p-3 rounded-lg " >Admin Login</p>
              </Link>
           </div>

           
           <div className="ml-10 " >
         <Link  to="/about" onClick={()=>setSidebarToggle(!sideBarToggle)}  >   <p className="text-black mt-5 font-serif font-semibold " >About</p></Link>
            <Link to="/contact" onClick={()=>setSidebarToggle(!sideBarToggle)}  ><p className="text-black mt-2 font-serif font-semibold " >Contact</p></Link>
           </div>

              
             
             
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      ) : null}


      {/* FIRST NAVBAR */}
      <Navbar fluid rounded>
        <Navbar.Brand onClick={()=>navigate("/")} className="hover:cursor-pointer"  >
          <img
            src={logo}
            className="mr-3  w-[8rem] sm:h-15"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2  " onClick={sideBarToggleBtn}>
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img={sidebarImage}
                
                // rounded
                // bordered
                // color={"rgb(0 0 0 / 50%)"}
                className="border rounded-full  border-black hover:border-white"
              />
            }
            
          >
            
           
          </Dropdown>
        </div>
          {/* <Navbar.Toggle /> */}
        <Navbar.Collapse>
            <NavLink to="/"   
            className={({isActive}) =>` ${isActive ? "font-bold " : "text-black"} ` } >
            Home
          </NavLink>
          <NavLink to="/about" className={({isActive}) => `${isActive?"font-bold  ":"text-black"}` } >
            About
          </NavLink>
          <NavLink to="/contact"  className={({isActive}) => `${isActive?"font-bold  ":"text-black"}` } >
            Contact
          </NavLink>
      
        </Navbar.Collapse>
      </Navbar>


      {/* searchbar */}
      <div className="w-[80%] md:w-[70%] m-auto" >
     
      <form class="relative">
  <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
  
  <div class="flex items-center">
    <div class="relative w-full">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
      </div>

      <input
        type="search"
        id="default-search"
        class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search Mockups, Logos..."
        required
      />

      <button
        type="submit"
        class="text-white absolute top-0 right-0 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-2 py-[0.6rem] dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Search
      </button>
    </div>
  </div>
</form>


      </div>





      
    </>
  );
}

export default NavBar;
