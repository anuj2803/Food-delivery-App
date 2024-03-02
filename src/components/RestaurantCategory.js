import React, { useState } from 'react'
import ItemList from './ItemList'
import { useState } from 'react';


const RestaurantCategory = ({data,showItems,setShowIndex}) => {//here showitems is controlled componet ie under parent
   const handleClick=()=>{
    setShowIndex();
   };
  // const [showItems,setShowItems]=useState(false);
//   console.log(data);
//handle click used to manage togle to make accordian 
//handle click funtion manages on button 
//by using usestate we track curr posi also
// const handleClick=()=>{
    // setShowItems(!showItems);
    //uncontrolled component
// };
    return (
    <div>
        {/* header in which we contain all a*/}
        {/* tailwing divide page into 12 parts */}
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
              <div className="flex justify-between cursor-pointer"
              onClick={handleClick}
              >
                <span className="font-bold text-lg">
                   {/* span used for title */}
                   {data.title}({data.itemCards.length})
                </span>
                <span>^</span>
              </div>
      {     showItems&&  <ItemList items={data.itemCards}/>}        </div>
        {/* Accordian body */}
    </div>
  );
};

export default RestaurantCategory;