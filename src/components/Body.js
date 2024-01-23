import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../Utils/useOnlinestatus";

// import resList from "../Utils/mockdata";
const apiUrl = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
const [searchtxt,setSearchtxt]=useState("");
const [filterRest,setfilterRest]=useState("");//intilize empty
//to update value in input section we use usestate so that searchtxt value get updated in setsearchtxt
  //Whenever statevariable are updated,react trigger a reconcilation cycle(re-render app)
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
  
    try {
      const data = await fetch(apiUrl);
      const json = await data.json();
      //console.log(json);
      // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      // setlistOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setfilterRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  const onlinestatus=useOnlinestatus();
if(onlinestatus==false)
return(
  
<h1>Looks Like You are offline!! please check internet again</h1>
);

  // <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwCl7qtRauoHqEU9pJUT6I05qEa-iu1HfjwA&usqp=CAU"/>,

  if(listOfRestaurants?.length===0)
  return <Shimmer/>
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text"
           className="search"
           value={searchtxt}
           //as value get bind to searchtxt the value not get updated so we need to use onchange concept
           onChange={(e)=>{
            setSearchtxt(e.target.value);
           }}
           />
          <button
  onClick={() => {
    //console.log(searchtxt);
    // Filter the resto card and update UI
    // searchtxt
    const filterRest = listOfRestaurants.filter((resData) =>
      resData.info.name.toLowerCase().includes(searchtxt.toLowerCase())
    );
    setfilterRest(filterRest);
  }}
>
  Search
</button>

        </div>
        <button className="filterbtn" onClick={() => {
          const filteredList = listOfRestaurants.filter(
            (res) => res.info.avgRating > 4
          );
          setlistOfRestaurants(filteredList);
        }}>
          Top Rated Restaurant
        </button>
      </div>
      
      <div className="res-container">
        {/* filterrest has updated all cards data */}
        
        {filterRest.map((restaurant) => (
          <Link
          key={restaurant?.info?.id}//parent jsx jawal key attach krnar so mapping get easy
           to={"/restaurant/"+restaurant?.info?.id}
           >
            <RestaurantCard  resData={restaurant} />
            </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
