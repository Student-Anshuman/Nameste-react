import RestorentCard from "./RestorantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

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

  return (
    //ternery operator
    restroLists.length == 0 ? (
      <Shimmer />
    ) : (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input
              type="text"
              className="search-box"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            ></input>
            <button
              onClick={() => {
                // filter the restrocards and update the UI
                //searchText
                console.log(searchText);
                const filteredRestorant = restroLists.filter((res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                );
                setFilteredRestorant(filteredRestorant);
              }}
            >
              Search
            </button>
          </div>

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
          {filteredRestorant.map((restorant) => (
            <RestorentCard key={restorant.info.id} resData={restorant} />
          ))}
        </div>
      </div>
    )
  );
};
export default Body;
