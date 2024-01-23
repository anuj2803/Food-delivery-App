import { CDN_LINK } from "../Utils/constant";
const RestaurantCard = ({ resData }) => {
    const {
      name,
      cloudinaryImageId,
      cuisines,
      avgRating,
     
    } = resData?.info;
  
    return (
      <div className="res-card">
        <img
          className="rest-logo"
          alt="rest-logo"
          src={CDN_LINK+
          cloudinaryImageId} />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
     
      </div>
    );
  };
  export default RestaurantCard;