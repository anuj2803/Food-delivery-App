import { CDN_LINK } from "../Utils/constant";
import userContext from "../Utils/userContext";
import { useContext } from "react";
const RestaurantCard = ({ resData }) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    
  } = resData?.info;
  const {logedin}=useContext(userContext);
    return (
      <div className="m-2 p-2 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-200" >
        <img
          className="rounded-lg"
          alt="rest-logo"
          src={CDN_LINK+
          cloudinaryImageId} />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
     <h4>{logedin}</h4>
      </div>
    );
  };

  //higher oorder component 
  //input -restaurant car->Restaurnt card promoted
  export const withPromptedLabel=(RestaurantCard)=>{
    return(props)=>{
      return (
        //first withpromptedlabel will get call from body then  props through value get into the restaurant card menu
        //props get pass to restaurant card
        <div >
          <label className="absolute bg-red-400 text-white m-0.75 p-0.75 rounded-lg">
            Open Now</label>
          <RestaurantCard {...props}/>
        
        </div>
      );
    };
  };
  export default RestaurantCard;
  