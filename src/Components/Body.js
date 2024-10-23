
import RestorentCard from "./RestorantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

  // State Variable - Super powerful variable
  const [restroLists, setRestroLists] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8755341&lng=81.0043726&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);
    //optional chaining
    setRestroLists(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    
  }

  
  
  return (
       //ternery operator
       restroLists.length ==
       0 ? <Shimmer/> :(
         <div className="body">
           <div className="filter">
             <button
               className="filter-btn"
               onClick={() => {
                 // Filter logic here
                 const filterRestroLists = restroLists.filter(
                   (res) => res.info.avgRating > 4
                 );
                 setRestroLists(filterRestroLists);
               }}
             >
               Top Rated Restorant
             </button>
           </div>
           <div className="res-container">
             {restroLists.map((restorant) => (
               <RestorentCard key={restorant.info.id} resData={restorant} />
             ))}
           </div>
         </div>
       )
     );
};
export default Body;