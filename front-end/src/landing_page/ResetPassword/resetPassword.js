import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { appContent } from '../../context/aapContext';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function ResetPassword() {
    const {backendUrl} = useContext(appContent);
    axios.defaults.withCredentials=true;

    const navigate = useNavigate();
    const[email, setEmail] = useState('');
    const[newPassword, setNewPassword] = useState('');
    const[isEmailSent, setIsEmailSent] = useState(false);
    const[otp , setOtp] = useState(0);
    const[submitOtp , setSubmitOtp] = useState(false);

    const inputRefs = React.useRef([]);

     const handleInput = (e, index) => {
      if(e.target.value.length > 0 && index < inputRefs.current.length - 1){
        inputRefs.current[index + 1].focus();
      }
    }

     const handleKeyDown = (e, index) => {
      if(e.key === 'Backspace' && e.target.value === '' && index > 0){
        inputRefs.current[index - 1].focus();
      }
    }
    const onSubmitOtp = async(e) =>{
      e.preventDefault();
      const otpArray = inputRefs.current.map(e=> e.value)
      setOtp(otpArray.join(''))
      setSubmitOtp(true)
    }
     const handlePaste = (e) => {
      const paste = e.clipboardData.getData('text')
      const pasteArray = paste.split('');
      pasteArray.forEach((char, index) => {
        if(inputRefs.current[index]){
          inputRefs.current[index].value = char;
        }
      })
    }

    const onSubmitEmail = async(e) => {
        e.preventDefault()
        try{
            const {data}  = await axios.post(backendUrl + "/api/auth/send-reset-otp", {email})
            console.log("data",data);
            data.success ? toast.success(data.message) : toast.error(data.message);
            data.success && setIsEmailSent(true);   
        }catch(error){
      toast.error(error.message);            
        }
    }

    const onSubmitPassword = async(e) => {
        e.preventDefault();
        try{
            const{data} = await axios.post(backendUrl + "/api/auth/reset-password", {email , otp, newPassword});
            data.success ? toast.success(data.message) : toast.error(data.message);
            data.success && navigate("/signup");
        }catch(error){
            toast.error(error.message);
        }
    }

    return(
       <div  className="d-flex align-items-center justify-content-center px-4 px-sm-0" style={{height:'70vh', width:"100vw"}}>
        {/*enter email id */}
        {!isEmailSent &&
        <form onSubmit={onSubmitEmail} className=" rounded-4 p-3 h-50 w-25 border Regular shadow fs-6" style={{backgroundColor:"#f3f4f6"}}>
            <h1 className="fs-2 text-center mb-3  fw-semibold" style={{color:"#1a2869"}}>Reset Password</h1>
            <p className="text-center mb-4 fs-5" style={{color:"#1a2869"}}>Enter your register email address</p>
            <div className="mb-4 d-flex align-items-center gap-2 border rounded-5 h-25 w-100 px-3 py-2" style={{backgroundColor:"#f1f1f5"}}>
                <img src={assets.mail_icon} className="w-3 h-3"/>
                <input type="email" placeholder="Enter your email" className=" border-0 w-100 h-100 fs-5" style={{background:"transparent", outline:"none"}} value={email} onChange={(e) =>setEmail(e.target.value)} required/>
            </div>
       <button type="submit" class="btn btn-secondary w-100 text-center fs-5">Submit</button>
        </form>}

        {/*Enter OTP */}
        {!submitOtp && isEmailSent &&
        <form onSubmit={onSubmitOtp} className=" rounded-4 p-3 h-50 w-25 border Regular shadow fs-6" style={{backgroundColor:"#f3f4f6"}}>
            <h1 className="fs-2 text-center mb-3  fw-semibold" style={{color:"#1a2869"}}>Reset Password OTP</h1>
            <p className="text-center mb-4 fs-5" style={{color:"#1a2869"}}>Enter the 6-digit code sent to your email id.</p>
            <div className="mb-5 d-flex align-items-center gap-2   h-25 w-100 px-3 py-2" style={{backgroundColor:"#f1f1f5"}} onPaste={handlePaste}>
                {Array(6).fill(0).map((_, index)=>(
          <input type="text" maxLength='1' key={index} required className='w-100 h-100 border-2 rounded-3  fs-3 text-center'style={{background:"transparent", outline:"none"}}
          ref={e => inputRefs.current[index] = e}
          onInput={(e) => handleInput(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
            </div>
       <button type="submit" class="btn btn-secondary w-100 text-center fs-5">Submit</button>
        </form>
        }

        {submitOtp && isEmailSent &&
        <form onSubmit={onSubmitPassword} className=" rounded-4 p-3 h-50 w-25 border Regular shadow fs-6" style={{backgroundColor:"#f3f4f6"}}>
            <h1 className="fs-2 text-center mb-3  fw-semibold" style={{color:"#1a2869"}}>New Password</h1>
            <p className="text-center mb-4 fs-5" style={{color:"#1a2869"}}>Enter the new password below</p>
            <div className="mb-4 d-flex align-items-center gap-2 border rounded-5 h-25 w-100 px-3 py-2" style={{backgroundColor:"#f1f1f5"}}>
                <img src={assets.lock_icon} className="w-3 h-3"/>
                <input type="password" placeholder=" password" className=" border-0 w-100 h-100 fs-5" style={{background:"transparent", outline:"none"}} value={newPassword} onChange={(e) =>setNewPassword(e.target.value)} required/>
            </div>
       <button type="submit" class="btn btn-secondary w-100 text-center fs-5">Submit</button>
        </form>
        
        
        }

       </div>
    )
}
export default ResetPassword;