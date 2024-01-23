// const heading=React.createElement("h1",{},"hiii anuj");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

import React, { Suspense, lazy } from "react";
import About from "./components/About";
import ReactDOM  from "react-dom/client";
import Header from "./components/header";
import Body from './components/Body';
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
// const parent=React.createElement("div",{id:"parent"},[
// React.createElement("div",{id:"child"},[
//     React.createElement("h1",{},"i am h1 tag"),
//     React.createElement("h2",{},"i am h2 tag"),
// ]),
// React.createElement("div",{id:"child2"},[
// React.createElement("h1",{},"i am h1 tag"),

// ])
// ]);
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
// const Title=()=>(
// <h1 className="head">Hiii</h1>
// );
//REACT Element
// const heading=React.createElement(
//     "h1",
//     {id:"heading"},
//     "Namaste React"
// );
//REACT ELEMENT
// const heading1=(
//     <h1 className="head">
//         I am REact Element

//     </h1>
// );
//React funtional Component
// const HeadingComponent = () => (
//     <div id="container">
//       <Title />
//       {Title ()}
//       <h1 className="Heading">Namaste React</h1>
//     </div>
//   );
  
// console.log(heading);
// const jsxheading=<h1 id="heading"> "Hello Anuj JSx is here</h1>;
// console.log(jsxheading);

// const Header=()=>{
//   return(
//     <div className="header">
//        <div className="logo-container">
//         <img className="logo"
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNKme8mlwBmujx7jJVzrJA_nwIJBr62vd2RScWmIgnQQ&s"></img>
//        </div>
//        <div className="nav-items">
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact Us</li>
//           <li>Cart</li>
//         </ul>
//        </div>

//     </div>
//   );
// };
// const RestaurantCard = ({ resData }) => {
//   const {
//     name,
//     cloudinaryImageId,
//     cuisines,
//     avgRating,
   
//   } = resData?.info;

//   return (
//     <div className="res-card">
//       <img
//         className="rest-logo"
//         alt="rest-logo"
//         src={
//           "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+
//         cloudinaryImageId
//         }
//       />
//       <h3>{name}</h3>
//       <h4>{cuisines.join(", ")}</h4>
//       <h4>{avgRating}</h4>
   
//     </div>
//   );
// };

// const resList=[
//   {
// "info": {
//   "id": "304292",
//   "name": "Cafe Coffee Day",
//   "cloudinaryImageId": "b70c7d23d197251b7b315b7e4d8173ae",
//   "locality": "GADIWALE PLAZA - SANGLI",
//   "areaName": "Vijaynagar",
//   "costForTwo": "₹400 for two",
//   "cuisines": [
//     "Beverages",
//     "Cafe",
//     "Snacks",
//     "Desserts",
//     "Burgers",
//     "Ice Cream",
//     "Bakery",
//     "Fast Food"
//   ],
//   "avgRating": 4.3,
//   "parentId": "1",
//   "avgRatingString": "4.3",
//   "totalRatingsString": "100+",
//   "sla": {
//     "deliveryTime": 21,
//     "lastMileTravel": 2,
//     "serviceability": "SERVICEABLE",
//     "slaString": "21 mins",
//     "lastMileTravelString": "2.0 km",
//     "iconType": "ICON_TYPE_EMPTY"
//   },
//   "availability": {
//     "nextCloseTime": "2024-01-03 23:30:00",
//     "opened": true
//   },
//   "badges": {
    
//   },
//   "isOpen": true,
//   "type": "F",
//   "badgesV2": {
//     "entityBadges": {
//       "imageBased": {
        
//       },
//       "textBased": {
        
//       },
//       "textExtendedBadges": {
        
//       }
//     }
//   },
//   "aggregatedDiscountInfoV3": {
//     "header": "50% OFF",
//     "subHeader": "UPTO ₹100"
//   },
//   "loyaltyDiscoverPresentationInfo": {
//     "logoCtx": {
//       "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//     },
//     "freedelMessage": "FREE DELIVERY",
//     "badgeType": "BADGE_TYPE_ONE_LITE"
//   },
//   "orderabilityCommunication": {
//     "title": {
      
//     },
//     "subTitle": {
      
//     },
//     "message": {
      
//     },
//     "customIcon": {
      
//     }
//   },
//   "differentiatedUi": {
//     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//     "differentiatedUiMediaDetails": {
//       "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//       "lottie": {
        
//       },
//       "video": {
        
//       }
//     }
//   },
//   "reviewsSummary": {
    
//   },
//   "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//   "restaurantOfferPresentationInfo": {
    
//   }
// },
// "analytics": {
//   "context": "seo-data-fca33bd8-e644-429e-a4e8-b19ddcf7c1fb"
// },
// "cta": {
//   "link": "https://www.swiggy.com/restaurants/cafe-coffee-day-gadiwale-plaza-vijaynagar-sangli-304292",
//   "text": "RESTAURANT_MENU",
//   "type": "WEBLINK"
// },
// "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
// },
// {
// "info": {
//   "id": "771970",
//   "name": "McDonald's",
//   "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
//   "locality": "Vishrambag",
//   "areaName": "Sangli",
//   "costForTwo": "₹400 for two",
//   "cuisines": [
//     "Burgers",
//     "Beverages",
//     "Cafe",
//     "Desserts"
//   ],
//   "avgRating": 4.2,
//   "parentId": "630",
//   "avgRatingString": "4.2",
//   "totalRatingsString": "100+",
//   "sla": {
//     "deliveryTime": 19,
//     "lastMileTravel": 2.6,
//     "serviceability": "SERVICEABLE",
//     "slaString": "19 mins",
//     "lastMileTravelString": "2.6 km",
//     "iconType": "ICON_TYPE_EMPTY"
//   },
//   "availability": {
//     "nextCloseTime": "2024-01-03 22:45:00",
//     "opened": true
//   },
//   "badges": {
    
//   },
//   "isOpen": true,
//   "type": "F",
//   "badgesV2": {
//     "entityBadges": {
//       "imageBased": {
        
//       },
//       "textBased": {
        
//       },
//       "textExtendedBadges": {
        
//       }
//     }
//   },
//   "aggregatedDiscountInfoV3": {
//     "header": "30% OFF",
//     "subHeader": "UPTO ₹75"
//   },
//   "loyaltyDiscoverPresentationInfo": {
//     "logoCtx": {
//       "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//     },
//     "freedelMessage": "FREE DELIVERY",
//     "badgeType": "BADGE_TYPE_ONE_LITE"
//   },
//   "orderabilityCommunication": {
//     "title": {
      
//     },
//     "subTitle": {
      
//     },
//     "message": {
      
//     },
//     "customIcon": {
      
//     }
//   },
//   "differentiatedUi": {
//     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//     "differentiatedUiMediaDetails": {
//       "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//       "lottie": {
        
//       },
//       "video": {
        
//       }
//     }
//   },
//   "reviewsSummary": {
    
//   },
//   "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//   "isNewlyOnboarded": true,
//   "restaurantOfferPresentationInfo": {
    
//   }
// },
// "analytics": {
//   "context": "seo-data-fca33bd8-e644-429e-a4e8-b19ddcf7c1fb"
// },
// "cta": {
//   "link": "https://www.swiggy.com/restaurants/mcdonalds-vishrambag-sangli-sangli-771970",
//   "text": "RESTAURANT_MENU",
//   "type": "WEBLINK"
// },
// "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
// },
// {
// "info": {
//   "id": "787613",
//   "name": "Subway",
//   "cloudinaryImageId": "3b7c97df8e116efb2983ae653d4586fb",
//   "locality": "Wanlesswadi",
//   "areaName": "Sangli Miraj road",
//   "costForTwo": "₹350 for two",
//   "cuisines": [
//     "Salads",
//     "Snacks",
//     "Desserts",
//     "Beverages"
//   ],
//   "avgRating": 3.6,
//   "parentId": "2",
//   "avgRatingString": "3.6",
//   "totalRatingsString": "20+",
//   "sla": {
//     "deliveryTime": 24,
//     "lastMileTravel": 2.4,
//     "serviceability": "SERVICEABLE",
//     "slaString": "24 mins",
//     "lastMileTravelString": "2.4 km",
//     "iconType": "ICON_TYPE_EMPTY"
//   },
//   "availability": {
//     "nextCloseTime": "2024-01-03 23:59:00",
//     "opened": true
//   },
//   "badges": {
    
//   },
//   "isOpen": true,
//   "type": "F",
//   "badgesV2": {
//     "entityBadges": {
//       "imageBased": {
        
//       },
//       "textBased": {
        
//       },
//       "textExtendedBadges": {
        
//       }
//     }
//   },
//   "aggregatedDiscountInfoV3": {
//     "header": "40% OFF",
//     "subHeader": "UPTO ₹80"
//   },
//   "loyaltyDiscoverPresentationInfo": {
//     "logoCtx": {
//       "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//     },
//     "freedelMessage": "FREE DELIVERY",
//     "badgeType": "BADGE_TYPE_ONE_LITE"
//   },
//   "orderabilityCommunication": {
//     "title": {
      
//     },
//     "subTitle": {
      
//     },
//     "message": {
      
//     },
//     "customIcon": {
      
//     }
//   },
//   "differentiatedUi": {
//     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//     "differentiatedUiMediaDetails": {
//       "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//       "lottie": {
        
//       },
//       "video": {
        
//       }
//     }
//   },
//   "reviewsSummary": {
    
//   },
//   "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//   "isNewlyOnboarded": true,
//   "restaurantOfferPresentationInfo": {
    
//   }
// },
// "analytics": {
//   "context": "seo-data-fca33bd8-e644-429e-a4e8-b19ddcf7c1fb"
// },
// "cta": {
//   "link": "https://www.swiggy.com/restaurants/subway-wanlesswadi-sangli-miraj-road-sangli-787613",
//   "text": "RESTAURANT_MENU",
//   "type": "WEBLINK"
// },
// "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
// },
// {
// "info": {
//   "id": "771971",
//   "name": "McCafe by McDonald's",
//   "cloudinaryImageId": "18ae7dfd2a8860c58094a4fc4d43b48e",
//   "locality": "Vishrambag",
//   "areaName": "Sangli",
//   "costForTwo": "₹250 for two",
//   "cuisines": [
//     "Beverages",
//     "Desserts"
//   ],
//   "parentId": "8263",
//   "avgRatingString": "NEW",
//   "sla": {
//     "deliveryTime": 21,
//     "lastMileTravel": 2.6,
//     "serviceability": "SERVICEABLE",
//     "slaString": "21 mins",
//     "lastMileTravelString": "2.6 km",
//     "iconType": "ICON_TYPE_EMPTY"
//   },
//   "availability": {
//     "nextCloseTime": "2024-01-03 22:45:00",
//     "opened": true
//   },
//   "badges": {
    
//   },
//   "isOpen": true,
//   "type": "F",
//   "badgesV2": {
//     "entityBadges": {
//       "imageBased": {
        
//       },
//       "textBased": {
        
//       },
//       "textExtendedBadges": {
        
//       }
//     }
//   },
//   "loyaltyDiscoverPresentationInfo": {
//     "logoCtx": {
//       "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//     },
//     "freedelMessage": "FREE DELIVERY",
//     "badgeType": "BADGE_TYPE_ONE_LITE"
//   },
//   "orderabilityCommunication": {
//     "title": {
      
//     },
//     "subTitle": {
      
//     },
//     "message": {
      
//     },
//     "customIcon": {
      
//     }
//   },
//   "differentiatedUi": {
//     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//     "differentiatedUiMediaDetails": {
//       "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//       "lottie": {
        
//       },
//       "video": {
        
//       }
//     }
//   },
//   "reviewsSummary": {
    
//   },
//   "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//   "isNewlyOnboarded": true,
//   "restaurantOfferPresentationInfo": {
    
//   }
// },
// "analytics": {
//   "context": "seo-data-fca33bd8-e644-429e-a4e8-b19ddcf7c1fb"
// },
// "cta": {
//   "link": "https://www.swiggy.com/restaurants/mccafe-by-mcdonalds-vishrambag-sangli-sangli-771971",
//   "text": "RESTAURANT_MENU",
//   "type": "WEBLINK"
// },
// "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
// },
// {
// "info": {
//   "id": "771972",
//   "name": "McDonald's Gourmet Burger Collection",
//   "cloudinaryImageId": "7bed421fadb83a09c1a987698e66cf20",
//   "locality": "Vishrambag",
//   "areaName": "Sangli",
//   "costForTwo": "₹400 for two",
//   "cuisines": [
//     "Burgers",
//     "Beverages",
//     "Cafe",
//     "Desserts"
//   ],
//   "parentId": "10761",
//   "avgRatingString": "NEW",
//   "sla": {
//     "deliveryTime": 22,
//     "lastMileTravel": 2.6,
//     "serviceability": "SERVICEABLE",
//     "slaString": "22 mins",
//     "lastMileTravelString": "2.6 km",
//     "iconType": "ICON_TYPE_EMPTY"
//   },
//   "availability": {
//     "nextCloseTime": "2024-01-03 22:45:00",
//     "opened": true
//   },
//   "badges": {
    
//   },
//   "isOpen": true,
//   "type": "F",
//   "badgesV2": {
//     "entityBadges": {
//       "imageBased": {
        
//       },
//       "textBased": {
        
//       },
//       "textExtendedBadges": {
        
//       }
//     }
//   },
//   "loyaltyDiscoverPresentationInfo": {
//     "logoCtx": {
//       "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//     },
//     "freedelMessage": "FREE DELIVERY",
//     "badgeType": "BADGE_TYPE_ONE_LITE"
//   },
//   "orderabilityCommunication": {
//     "title": {
      
//     },
//     "subTitle": {
      
//     },
//     "message": {
      
//     },
//     "customIcon": {
      
//     }
//   },
//   "differentiatedUi": {
//     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//     "differentiatedUiMediaDetails": {
//       "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//       "lottie": {
        
//       },
//       "video": {
        
//       }
//     }
//   },
//   "reviewsSummary": {
    
//   },
//   "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//   "isNewlyOnboarded": true,
//   "restaurantOfferPresentationInfo": {
    
//   }
// },
// "analytics": {
//   "context": "seo-data-fca33bd8-e644-429e-a4e8-b19ddcf7c1fb"
// },
// "cta": {
//   "link": "https://www.swiggy.com/restaurants/mcdonalds-gourmet-burger-collection-vishrambag-sangli-sangli-771972",
//   "text": "RESTAURANT_MENU",
//   "type": "WEBLINK"
// },
// "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
// },
// {
// "info": {
//   "id": "398245",
//   "name": "Ganesh Group Shri Ganesh Nasta Center",
//   "cloudinaryImageId": "e4bfec6b1acc8156eae9b8552e0d3c79",
//   "locality": "Midc Kupwad Road\n",
//   "areaName": "Vishrambag",
//   "costForTwo": "₹250 for two",
//   "cuisines": [
//     "South Indian",
//     "Maharashtrian"
//   ],
//   "avgRating": 4.4,
//   "veg": true,
//   "parentId": "471749",
//   "avgRatingString": "4.4",
//   "totalRatingsString": "100+",
//   "sla": {
//     "deliveryTime": 20,
//     "lastMileTravel": 1.5,
//     "serviceability": "SERVICEABLE",
//     "slaString": "20 mins",
//     "lastMileTravelString": "1.5 km",
//     "iconType": "ICON_TYPE_EMPTY"
//   },
//   "availability": {
//     "nextCloseTime": "2024-01-03 22:30:00",
//     "opened": true
//   },
//   "badges": {
//     "imageBadges": [
//       {
//         "imageId": "v1695133679/badges/Pure_Veg111.png",
//         "description": "pureveg"
//       }
//     ]
//   },
//   "isOpen": true,
//   "type": "F",
//   "badgesV2": {
//     "entityBadges": {
//       "imageBased": {
//         "badgeObject": [
//           {
//             "attributes": {
//               "description": "pureveg",
//               "imageId": "v1695133679/badges/Pure_Veg111.png"
//             }
//           }
//         ]
//       },
//       "textBased": {
        
//       },
//       "textExtendedBadges": {
        
//       }
//     }
//   },
//   "aggregatedDiscountInfoV3": {
//     "header": "30% OFF",
//     "subHeader": "UPTO ₹75"
//   },
//   "loyaltyDiscoverPresentationInfo": {
//     "logoCtx": {
//       "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//     },
//     "freedelMessage": "FREE DELIVERY",
//     "badgeType": "BADGE_TYPE_ONE_LITE"
//   },
//   "orderabilityCommunication": {
//     "title": {
      
//     },
//     "subTitle": {
      
//     },
//     "message": {
      
//     },
//     "customIcon": {
      
//     }
//   },
//   "differentiatedUi": {
//     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//     "differentiatedUiMediaDetails": {
//       "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//       "lottie": {
        
//       },
//       "video": {
        
//       }
//     }
//   },
//   "reviewsSummary": {
    
//   },
//   "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//   "restaurantOfferPresentationInfo": {
    
//   }
// },
// "analytics": {
//   "context": "seo-data-fca33bd8-e644-429e-a4e8-b19ddcf7c1fb"
// },
// "cta": {
//   "link": "https://www.swiggy.com/restaurants/ganesh-group-shri-ganesh-nasta-center-midc-kupwad-road-vishrambag-sangli-398245",
//   "text": "RESTAURANT_MENU",
//   "type": "WEBLINK"
// },
// "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
// },
// {
// "info": {
//   "id": "466111",
//   "name": "Hotel New Rohini",
//   "cloudinaryImageId": "kkoqyhicingee6wicfta",
//   "locality": "Trikoni Garden",
//   "areaName": "Vishrambag",
//   "costForTwo": "₹150 for two",
//   "cuisines": [
//     "South Indian",
//     "Maharashtrian"
//   ],
//   "avgRating": 4.4,
//   "veg": true,
//   "parentId": "280143",
//   "avgRatingString": "4.4",
//   "totalRatingsString": "100+",
//   "sla": {
//     "deliveryTime": 23,
//     "lastMileTravel": 3.8,
//     "serviceability": "SERVICEABLE",
//     "slaString": "23 mins",
//     "lastMileTravelString": "3.8 km",
//     "iconType": "ICON_TYPE_EMPTY"
//   },
//   "availability": {
//     "nextCloseTime": "2024-01-03 20:30:00",
//     "opened": true
//   },
//   "badges": {
//     "imageBadges": [
//       {
//         "imageId": "v1695133679/badges/Pure_Veg111.png",
//         "description": "pureveg"
//       }
//     ]
//   },
//   "isOpen": true,
//   "type": "F",
//   "badgesV2": {
//     "entityBadges": {
//       "imageBased": {
//         "badgeObject": [
//           {
//             "attributes": {
//               "description": "pureveg",
//               "imageId": "v1695133679/badges/Pure_Veg111.png"
//             }
//           }
//         ]
//       },
//       "textBased": {
        
//       },
//       "textExtendedBadges": {
        
//       }
//     }
//   },
//   "aggregatedDiscountInfoV3": {
//     "header": "20% OFF",
//     "subHeader": "UPTO ₹50"
//   },
//   "loyaltyDiscoverPresentationInfo": {
//     "logoCtx": {
//       "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//     },
//     "freedelMessage": "FREE DELIVERY",
//     "badgeType": "BADGE_TYPE_ONE_LITE"
//   },
//   "orderabilityCommunication": {
//     "title": {
      
//     },
//     "subTitle": {
      
//     },
//     "message": {
      
//     },
//     "customIcon": {
      
//     }
//   },
//   "differentiatedUi": {
//     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//     "differentiatedUiMediaDetails": {
//       "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//       "lottie": {
        
//       },
//       "video": {
        
//       }
//     }
//   },
//   "reviewsSummary": {
    
//   },
//   "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//   "restaurantOfferPresentationInfo": {
    
//   }
// },
// "analytics": {
//   "context": "seo-data-fca33bd8-e644-429e-a4e8-b19ddcf7c1fb"
// },
// "cta": {
//   "link": "https://www.swiggy.com/restaurants/hotel-new-rohini-trikoni-garden-vishrambag-sangli-466111",
//   "text": "RESTAURANT_MENU",
//   "type": "WEBLINK"
// },
// "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
// },
// {
// "info": {
//   "id": "108886",
//   "name": "Natraj Annex",
//   "cloudinaryImageId": "kl2qlni9g8taorosszjn",
//   "locality": "South Shivaji Nagar",
//   "areaName": "Vishrambag",
//   "costForTwo": "₹200 for two",
//   "cuisines": [
//     "North Indian",
//     "South Indian",
//     "Chinese"
//   ],
//   "avgRating": 4.3,
//   "veg": true,
//   "parentId": "144511",
//   "avgRatingString": "4.3",
//   "totalRatingsString": "1K+",
//   "sla": {
//     "deliveryTime": 22,
//     "lastMileTravel": 3.6,
//     "serviceability": "SERVICEABLE",
//     "slaString": "22 mins",
//     "lastMileTravelString": "3.6 km",
//     "iconType": "ICON_TYPE_EMPTY"
//   },
//   "availability": {
//     "nextCloseTime": "2024-01-03 22:30:00",
//     "opened": true
//   },
//   "badges": {
    
//   },
//   "isOpen": true,
//   "type": "F",
//   "badgesV2": {
//     "entityBadges": {
//       "imageBased": {
        
//       },
//       "textBased": {
        
//       },
//       "textExtendedBadges": {
        
//       }
//     }
//   },
//   "aggregatedDiscountInfoV3": {
//     "header": "FREE ITEM"
//   },
//   "loyaltyDiscoverPresentationInfo": {
//     "logoCtx": {
//       "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//     },
//     "freedelMessage": "FREE DELIVERY",
//     "badgeType": "BADGE_TYPE_ONE_LITE"
//   },
//   "orderabilityCommunication": {
//     "title": {
      
//     },
//     "subTitle": {
      
//     },
//     "message": {
      
//     },
//     "customIcon": {
      
//     }
//   },
//   "differentiatedUi": {
//     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//     "differentiatedUiMediaDetails": {
//       "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//       "lottie": {
        
//       },
//       "video": {
        
//       }
//     }
//   },
//   "reviewsSummary": {
    
//   },
//   "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//   "restaurantOfferPresentationInfo": {
    
//   }
// },
// "analytics": {
//   "context": "seo-data-fca33bd8-e644-429e-a4e8-b19ddcf7c1fb"
// },
// "cta": {
//   "link": "https://www.swiggy.com/restaurants/natraj-annex-south-shivaji-nagar-vishrambag-sangli-108886",
//   "text": "RESTAURANT_MENU",
//   "type": "WEBLINK"
// },
// "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
// }
// ]
 

// const Body = () => {
//   return (
//     <div className="body">
//       <div className="Search">Search</div>
//       <div className="res-container">
//         {
//           resList.map((restaurant)=>(
//             <RestaurantCard key={restaurant.info.id}resData={restaurant}/>
//           ))
//         }
//       </div>
//     </div>
//   );
// };

const Grocery=lazy(()=>import("./components/Grocery"));
//lazy loading implementation
const AppLayout=()=>{
  return(
    <div className="app">

      <Header/>
       <Outlet/>
    </div>
  );
};
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
  {
    path:"/",
    element:<Body/>,
  },
  {
    path:"/about",
    element:<About/>,
  },
  {
    path:"/contact",
    element:<Contact/>,
  },
  {
    path:"/grocery",
    //fallback is placeholder of suspense
    //A placeholder is used to reserve space for content that soon will appear in a layout
    element:(
    <Suspense fallback={<h1>Loading...</h1>}>
      
      <Grocery/>
      </Suspense>
    ),
  },
  //suspense componant use to handle waiting of component
  {
    path:"/restaurant/:resId",
    element:<RestaurantMenu/>,
  },
    ],
errotElement:<Error/>,
  },
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);