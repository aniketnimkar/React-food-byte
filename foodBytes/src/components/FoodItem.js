//this is config Driven UI.
import { IMG_CDN_URL } from "../constants";

const FoodItem = ({ name, discription, cloudinaryImageId, area, price }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h4>{area}</h4>
      <span>
        <h4>{discription}</h4>
        <h4>Rupees:{price / 100}</h4>
      </span>
    </div>
  );
};

export default FoodItem;
