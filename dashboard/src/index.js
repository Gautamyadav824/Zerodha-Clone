
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import EmailVerify from "./components/EmailVerify";
import { GeneralContextProvider } from "./components/GeneralContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <GeneralContextProvider>
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/verify-email" element={<EmailVerify />} />
        
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  </React.StrictMode>
      </GeneralContextProvider>
);
