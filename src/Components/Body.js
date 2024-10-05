import resList from "../../utils/mockData";
import RestorentCard from "./  RestorantCard";
import { useState } from "react";

const Body = () => {

  // State Variable - Super powerful variable

  // Normal JS variable
  let restroLists = [
    {
      info: {
        id: "82141",
        name: "Rahil Restaurant",
        cloudinaryImageId: "kfjx9w9fu3ujeo3oxobb",

        costForTwo: "₹350 for two",
        cuisines: [
          "North Indian",
          "Chinese",
          "South Indian",
          "Thalis",
          "Snacks",
          "Continental",
          "Desserts",
        ],
        avgRating: 3.9,

        avgRatingString: "4.3",
        totalRatingsString: "18K+",
      },
    },
    {
      info: {
        id: "82142",
        name: "Rahil Restaurant",
        cloudinaryImageId: "kfjx9w9fu3ujeo3oxobb",

        costForTwo: "₹350 for two",
        cuisines: [
          "North Indian",
          "Chinese",
          "South Indian",
          "Thalis",
          "Snacks",
          "Continental",
          "Desserts",
        ],
        avgRating: 3.9,

        avgRatingString: "4.3",
        totalRatingsString: "18K+",
      },
    },
    {
      info: {
        id: "82143",
        name: "Rahil Restaurant",
        cloudinaryImageId: "kfjx9w9fu3ujeo3oxobb",

        costForTwo: "₹350 for two",
        cuisines: [
          "North Indian",
          "Chinese",
          "South Indian",
          "Thalis",
          "Snacks",
          "Continental",
          "Desserts",
        ],
        avgRating: 3.9,

        avgRatingString: "4.3",
        totalRatingsString: "18K+",
      },
    },
  ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter logic here
            restroLists = restroLists.filter((res) => res.info.avgRating > 4);
            console.log(restroLists);
          }} 
        >
          Top Rated Restorant{" "}
        </button>
      </div>
      <div className="res-container">
        {restroLists.map((restorant) => (
          <RestorentCard key={restorant.info.id} resData={restorant} />
        ))}
      </div>
    </div>
  );
};
export default Body;