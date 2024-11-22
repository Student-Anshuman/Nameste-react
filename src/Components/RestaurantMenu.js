import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";


const RestaurantMenu = () => {

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  
  if (resInfo == null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, } = resInfo?.cards[2]?.card?.card?.info;
  
  const allItemCards  = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2];
  console.log(allItemCards);

  

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      <ul>
        <h2>Menu</h2>
        {allItemCards?.card?.card?.itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name} -- Rs.{item.card.info.price/100 }</li>
        ))}
        
      </ul>
    </div>
  );
};

export default RestaurantMenu;