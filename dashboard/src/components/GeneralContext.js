import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

import BuyActionWindow from "./BuyActionWindow";
import { toast } from "react-toastify";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL?.replace(/\/$/, "");
  

  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const[isLoggedin, setIsLoggedin] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  const getAuthState = async () => {
  try {
    axios.defaults.withCredentials = true;

    const { data } = await axios.get(`${backendUrl}/api/auth/is-auth`);

    

    if (data.success) {
      setIsLoggedin(true);
      await getUserData();
    }
  } catch (error) {
    toast.error(error.message);
  }
};

const getUserData = async () => {
  try {
    axios.defaults.withCredentials = true;

    const { data } = await axios.get(
    `${backendUrl}/api/user/data`);
    

    

    data.success
      ? setUserData(data.userData)
      : toast.error(data.message);

  } catch (error) {
    toast.error(error.message);
  }
};

useEffect(() => {
  
  getAuthState();
}, []);

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
         backendUrl, getUserData,
         userData, setUserData,
         isLoggedin, setIsLoggedin,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );


   
    
};

export default GeneralContext;