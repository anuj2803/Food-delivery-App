import { useEffect,useState } from "react";
import { MENU_API } from "../Utils/constant";
//userestaurant is hook which is contain only fetch api details
//
const useRestraurantMenu = (resId) => {
    const [resInfo,setResInfo]=useState(null);
    useEffect(()=>{
        fetchData();
    },[]);
  
    const fetchData=async()=>{
        const data=await fetch(MENU_API+resId);
        const json=await data.json();
        setResInfo(json.data);
        // console.log(json);-->>>json.data is use to fectchh data from api and pass to resInfo
    };
    return resInfo;
};

export default useRestraurantMenu