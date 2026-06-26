import React, { useState } from "react";

import {Link } from "react-router-dom";
import { useContext } from "react";
import GeneralContext from "./GeneralContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";





const Menu = () => {
  const[selectedMenu, setSelectedMenu] = useState(0);
  const[isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const{userData, backendUrl, setIsLoggedin, setUserData} = useContext(GeneralContext);
  const navigate = useNavigate();

  
  const firstLetter = userData?.name?.charAt(0).toUpperCase() || "Z";



  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const logout = async() => {
    try{
      axios.defaults.withCredentials=true;
      const{data} = await axios.post(backendUrl + "/api/auth/logout");
      data.success && setIsLoggedin(false);
      data.success && setUserData(false);
     
    }catch(error){
      toast.error(error.message);
    }
  };

  const sendVerificationOtp = async() =>{
    console.log("check verifysd");
    try{axios.defaults.withCredentials=true;
       
      const {data} = await axios.post(backendUrl + "/api/auth/send-verify-otp")
      console.log("send",data);
      if(data.success){
        navigate("/verify-email")
        toast.success(data.message)
      }else{
        toast.error(data.message)
      }
    }catch(error){
      console.log("ERROR:", error.response?.data || error.message);
      toast.error(error.message);
    }
  }

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" alt="Logo" style={{width:"50px"}} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} to="/" onClick={() => handleMenuClick(0)}>
            <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
             <Link style={{textDecoration:"none"}} to="/orders" onClick={() => handleMenuClick(1)}>
            <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/holdings" onClick={() => handleMenuClick(2)}>
            <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
             <Link style={{textDecoration:"none"}} to="/positions" onClick={() => handleMenuClick(3)}>
            <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positons</p>
            </Link>
          </li>
          <li>
             <Link style={{textDecoration:"none"}} to="/funds" onClick={() => handleMenuClick(4)}>
            <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
             <Link style={{textDecoration:"none"}} to="/apps" onClick={() => handleMenuClick(5)}>
            <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        {userData ?(
        <div className="profile" onClick={handleProfileClick}>
            <div className="avatar">{firstLetter}
              <div className="checkUser">
                <ul className="check">
                {!userData?.isAccountVerified && (
                  <li onClick={sendVerificationOtp}>
                    verify email
                  </li>
                  )}
                  <li onClick={logout}>
                    logout
                  </li>
                </ul>
              </div>
            </div>
         
          
        </div>):(
        <button className="DashLogin" onClick={() =>window.location.href = ("https://zerodha-frontend-98f3.onrender.com/signup") }>Login
          <img src="./arrow.png"/>
        </button>)}
      </div>
    </div>
  );
};

export default Menu;
