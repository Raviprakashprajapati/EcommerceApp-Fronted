import { useState } from "react";
import AdminLogin from "./components/admin/AdminLogin";
import Home from "./components/public/Home";
import Login from "./components/user/Login";
import Signup from "./components/user/Signup";
import ProductDetailDesign from "./design/ProductDetailDesign";
import AllOrdersDesign from "./design/AllOrdersDesign";
import OrderDetailDesign from "./design/OrderDetailDesign";
import MyReviewDesign from "./design/MyReviewDesign";
import Cart from "./components/product/Cart";
import UserProfileDesign from "./design/UserProfileDesign";
import UpdateProfile from "./components/user/UpdateProfile";
import UserProfile from "./components/user/UserProfile";
import ChangePassword from "./components/user/ChangePassword";
import UpdateAvatar from "./components/user/UpdateAvatar";
import SpeedDial from "./components/utils/SpeedDial";
import AdminProfile from "./components/admin/AdminProfile";
import AdminAddProduct from "./components/admin/AdminAddProduct";
import AdminUsers from "./components/admin/AdminUsers.jsx"

function App() {



  return (
    <>

      {/* <Home/> */}
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <AdminLogin/> */}
      {/* <ProductDetailDesign/> */}

      {/* <AllOrdersDesign/> */}
      {/* <OrderDetailDesign/> */}
      {/* <MyReviewDesign/> */}
      {/* <Cart/> */}
      {/* <UserProfile/> */}
     {/* <UpdateProfile/> */}
     {/* <ChangePassword/> */}
     {/* <UpdateAvatar/> */}
     {/* <SpeedDial/> */}

     {/* <AdminProfile/> */}
     {/* <AdminAddProduct/> */}
     <AdminUsers/>
      


    

    
    </>
  );
}

export default App;
