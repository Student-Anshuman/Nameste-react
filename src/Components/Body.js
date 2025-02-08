import RestorentCard from "./RestorantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import  useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  // State Variable - Super powerful variable
  const [restroLists, setRestroLists] = useState([]);
  const [filteredRestorant, setFilteredRestorant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Whenever state variable update, react triggers a reconciliation cycle(re-renders the component)
  console.log("Body Rendered")

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8755341&lng=81.0043726&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);
    //optional chaining
    setRestroLists(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestorant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if(onlineStatus == false) return <h1>Looks like you're offline!!! Please check your internet connection</h1>

  return (
    //ternery operator
    restroLists.length == 0 ? (
      <Shimmer />
    ) : (
      <div className="body">
        <div className="flex m-4 px-4">
          <div className="search">
            <input
              type="text"
              className="border-8 w-220"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            ></input>
            <button
              className="bg-gray-400 m-2 rounded-md font-semibold"
              onClick={() => {
                // filter the restrocards and update the UI
                //searchText
                console.log(searchText);
                const filteredRestorant = restroLists.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestorant(filteredRestorant);
              }}
            >
              Search
            </button>
          </div>

          <button
            className="bg-slate-400 rounded-sm"
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
        <div className="res-container flex mx-2 px-2 space-x-2 ">
          {filteredRestorant.map((restorant) => (
            <Link
              key={restorant.info.id}
              to={"/restaurants/" + restorant.info.id}
            >
              {" "}
              <RestorentCard resData={restorant} />
            </Link>
          ))}
        </div>
      </div>
    )
  );
};
export default Body;
