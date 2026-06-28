// import React, { useContext, useState } from "react";
// import { assets } from "../../assets/assets.js";
// import { useNavigate } from "react-router-dom";
// import { appContent } from "../../context/aapContext.js";
// import axios from "axios";
// import { toast } from "react-toastify";

// function Signup() {
//   const navigate = useNavigate();
//   const dashboardUrl = process.env.REACT_APP_DASHBOARD_URL;

//   const { backendUrl, setIsLoggedIn, getUserData } = useContext(appContent);

//   const [state, setState] = useState("Sign up");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const onSubmitHandler = async (e) => {
//     try {
//       e.preventDefault();
//       axios.defaults.withCredentials = true;

//       if (state === "Sign up") {
//         const { data } = await axios.post(backendUrl + "/api/auth/register", {
//           name,
//           email,
//           password,
//         });
//         if (data.success) {
//           toast.success("Register Successfull");

//           setState("Login");
//           setName("");
//           setEmail("");
//           setPassword("");
//         } else {
//           toast.error(data.message);
//         }
//       } else {
//         const { data } = await axios.post(backendUrl + "/api/auth/login", {
//           email,
//           password,
//         });
//         if (data.success) {
//           setIsLoggedIn(true);
//           await getUserData();
//           window.location.href = dashboardUrl;
//         } else {
//           toast.error(data.message);
//         }
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   return (
//     <div className="container  ">
//       <div className="row text-center py-5">
//         <h2 className="fs-2">Open a free demat and trading account online</h2>
//         <p className="fs-4 text-muted">
//           Start investing brokerage free and join a community of 1.6+ crore
//           investors and traders
//         </p>
//       </div>
//       <div className=" row  g-5 d-flex algin-items-center">
//         <div className="col-6  text-center ">
//           <img
//             style={{ width: "95%", marginLeft: "10%", height: "100%" }}
//             src="/media/image/account_open.svg"
//             alt="Signup"
//           />
//         </div>
//         <div className="col-6 px-5">
//           <form onSubmit={onSubmitHandler}>
//             {state === "Sign up" ? (
//               <h2 className="mb-2">Signup now</h2>
//             ) : (
//               <h2 className="mb-2">Login</h2>
//             )}

//             <p className="fs-5 text-muted mb-4">
//               Or track your existing application
//             </p>

//             {state === "Sign up" && (
//               <div className="input-group w-50 mb-3">
//                 <span className="input-group-text bg-white  border-end-0">
//                   <img src={assets.person_icon} alt="name" />
//                 </span>

//                 <input
//                   type="text"
//                   placeholder="Username"
//                   required
//                   onChange={(e) => setName(e.target.value)}
//                   value={name}
//                   className="form-control shadow-none"
//                 />
//               </div>
//             )}
//             <div className="input-group w-50 mb-3">
//               <span className="input-group-text  bg-white">
//                 <img src={assets.mail_icon} alt="mail" />
//               </span>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 onChange={(e) => setEmail(e.target.value)}
//                 value={email}
//                 required
//                 className="form-control shadow-none"
//               />
//             </div>
//             <div className="input-group w-50 mb-3">
//               <span className="input-group-text  bg-white">
//                 <img src={assets.lock_icon} alt="password" />
//               </span>
//               <input
//                 type="password"
//                 placeholder="Password"
//                 onChange={(e) => setPassword(e.target.value)}
//                 value={password}
//                 required
//                 className="form-control shadow-none"
//               />
//             </div>
//             <button className="btn btn-primary w-50" type="submit">
//               {state}
//             </button>
//             <br />

//             {state !== "Login" && (
//               <p className="small m-3 ms-4">
//                 If you have an existing account?{" "}
//                 <a
//                   className="text-blue-500 hover:text-blue-700 text-lg hover:underline font-small"
//                   onClick={() => {
//                     setState("Login");
//                   }}
//                 >
//                   Login
//                 </a>
//               </p>
//             )}

//             <a
//               className="text-decoration-none small d-flex  align-items-left ms-5 ps-4 mt-4"
//               onClick={() => navigate("/reset-password")}
//             >
//               Forgotten password?
//             </a>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;
import React from "react";
import { useNavigate } from "react-router-dom";
import { appContent } from "../../context/aapContext";
import { useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../../assets/assets";





function Signup() {
  const { backendUrl } = useContext(appContent);
  const navigate = useNavigate();

  return <h1>Signup Loaded</h1>;
}

export default Signup;