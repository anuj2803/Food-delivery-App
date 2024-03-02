import { useState,useContext } from "react";
import { logo } from "../Utils/constant";
import { Link } from "react-router-dom";
import useOnlinestatus from "../Utils/useOnlinestatus";
import userContext from "../Utils/userContext";
import {useSelector} from "react-redux";
const Header=()=>{
  const onlinestatus=useOnlinestatus();
  const [btnNameReact,setbtnNameReact]=useState("Login");
  const {logedin}=useContext(userContext);

  //subscribing to store using selector
  const cartItems=useSelector((store)=>store.cart.items);
 console.log(cartItems);
  return(

      <div className="flex justify-between bg-grey sm:bg-gray-200 bg-green-200" >
         <div className="logo-container">
          <img className="w-40"
          src={logo}/>
          </div>
         <div className="nav-items">
          <ul className="flex p-4 m-4 ">
            <li className="px-4">
              online Status:{onlinestatus?"Yes":"No"}
            </li>
          <li className="px-4">
              <Link to="/">Home</Link>
              </li>
            <li className="px-4">
             <Link to="about">About</Link>
              </li>
            <li  className="px-4">
              <Link to="contact"> Contact Us</Link>
              </li>
              <li  className="px-4">
              <Link to="grocery"> Grocery</Link>
              </li>
              <li className="px-4 font-bold text-xl">
              <Link to="Cart"> Cart-({cartItems.length}items)</Link>
               </li>
            <button className="Login px-2  py-.5  rounded-lg bg-red-500" onClick={()=>{
              btnNameReact=="Login"
              ?setbtnNameReact("Logout")
              :setbtnNameReact("Login");
            }}> {btnNameReact}
            </button>
            
            <li  className="px-4 font-bold" >
              <Link to="grocery">Logedin :{logedin}</Link>
              </li>
          </ul>
         </div>
  
      </div>
    );
  };

  export default Header;