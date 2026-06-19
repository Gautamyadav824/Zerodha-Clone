import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import {toast} from "react-toastify"


axios.defaults.withCredentials=true

export const appContent = createContext();

export const AppContentProvider = (props) =>{
    const backendUrl =  process.env.REACT_APP_BACKEND_URL;
    const[isLoggedIn, setIsLoggedIn] = useState(false)
    const[userData, setUserData] = useState(false)

    const getAuthState = async() => {
        try{
            const{data} = await axios.get(backendUrl + "/api/auth/is-auth")
            if(data.success){
                setIsLoggedIn(true)
                 await getUserData()
            }
        }catch(error){
            toast.error(error.message)
        }
    }
    const getUserData = async()=>{
        try{
            const{data} = await axios.get(backendUrl + "/api/user/data");
            data.success ? setUserData(data.userData) : toast.error(data.message);
        }catch(error){
            toast.error(error.message)
        }
    }
    useEffect(() => {
        console.log("useeffrct coling");
        getAuthState()
    }, [])

    const value = {
        backendUrl,
        isLoggedIn, setIsLoggedIn,
        userData, setUserData,
        getUserData
    }

    return(
        <appContent.Provider value = {value}>
           {props.children}
        </appContent.Provider>
    )
}

