import { CDN_URL } from "../../utils/constants";

const RestorentCard = (props) => {
  // const {resName, cuisine,rating,delTime} = props
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.info; // optional chaining
  return (
    <div className="res-card" style={{ backgroundColor: "lightgray" }}>
      <img className="img" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}stars</h4>
      <h4>{costForTwo} For Two</h4>
      <h4>{deliveryTime}minutes</h4>
    </div>
  );
};

export default RestorentCard;