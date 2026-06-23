import React from "react";
import { GeneralContextProvider } from "./GeneralContext";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import EmailVerify from "./EmailVerify";


const Home= () => {
    return(
        <>
        <TopBar/>
        <Dashboard/>
        </>
    )
}

export default Home;