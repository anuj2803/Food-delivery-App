import { useState } from "react";
import { logo } from "../Utils/constant";
import { Link } from "react-router-dom";
import useOnlinestatus from "../Utils/useOnlinestatus";

const Header=()=>{
  const onlinestatus=useOnlinestatus();
  const [btnNameReact,setbtnNameReact]=useState("login")
    return(
      <div className="header">
         <div className="logo-container">
          <img className="logo"
          src={logo}/>
          </div>
         <div className="nav-items">
          <ul>
            <li>
              online Status:{onlinestatus?"Yes":"No"}
            </li>
          <li>
              <Link to="/">Home</Link>
              </li>
            <li>
             <Link to="about">About</Link>
              </li>
            <li>
              <Link to="contact"> Contact Us</Link>
              </li>
              <li>
              <Link to="grocery"> Grocery</Link>
              </li>
            <button className="login" onClick={()=>{
              btnNameReact=="login"?setbtnNameReact("logout"):setbtnNameReact("login");
            }}> {btnNameReact}</button>
          </ul>
         </div>
  
      </div>
    );
  };

  export default Header;