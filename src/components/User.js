import React, { useEffect, useState } from "react"
//usestate -->>funtion madhe nehmi change honare variable cha track thevnyasathi usestate use krto
const User=({name})=> {
  const [count,setCount]=useState(0);
  // const [count1]=useState(1);
  useEffect(()=>{
//Api call
//console.log("useEffect")
  },[count]);//array[]
  return (
    <div className="user-card">
         <h1>count={count}</h1>
         {/* <h1>count1:{count1}</h1> */}

        <h1>Name:{name}</h1>
        <h1>count</h1>
        <h3>Location:Ahmednagar</h3>
        <h4>Contact:khedekaranuj001@gmail.com</h4>
        <button 
        onClick={()=>{
          setCount(1);
        }}>Count
        </button>
    </div>
  );
};

export default User;