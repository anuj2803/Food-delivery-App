// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=676001&catalog_qa=undefined&submitAction=ENTER
import React, { useEffect } from 'react'
import { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Body from './Body';
import Shimmer from './Shimmer';
import { MENU_API } from '../Utils/constant';
import { useParams } from 'react-router-dom';
import useRestraurantMenu from '../Utils/useRestraurantMenu'

 const RestaurantMenu = () => {
  // const[resInfo,setResInfo]=useState(null);
  const {resId}=useParams();
  const resInfo=useRestraurantMenu(resId);
  // console.log(resId);
  //this useeffect call at only ince intially
  //not render regularly on calling api
  // useEffect(()=>{
  //   fetchMenu();
  // },[]);
  // const fetchMenu=async ()=>{
  //   // console.log("Hello");
  //   const myUrl= MENU_API + resId;
  //     const data=await fetch(myUrl);
  //   const json=await data.json();
  //   console.log("json:" , json);
  //   setResInfo(json.data);
  //   };
    //as usestate is initailly null so use shimmmer first and then use array for cuiseine and all
    if(resInfo===null)return <Shimmer/>;
    //groupcard is array so iteratee it using map
  //  console.log("resInfo" , resInfo);
    const {itemCards}=
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);
    return (
    <div className="menu">
      {/* <>{console.log("resinfo: ", resInfo)}</> */}
        <h1>{resInfo?.cards[0]?.card?.card?.info?.name} </h1>
        {/* <h2>{cuisines}</h2> */}
        <p>
        <h2>{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(",")}</h2>
        <h2>{resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</h2>
        </p>
        
        <h2>Menu</h2>
        {/* <h2>{groupcard}</h2> */}
        <ul>
          {console.log("i:" , itemCards)}
           {itemCards?.map((item)=>(
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} -{" Rs."}
               {item?.card?.info?.price/100||item?.card?.info?.defaultPrice/100}
            </li>
           ))}
        </ul>
    </div>

  );
};
export default RestaurantMenu;