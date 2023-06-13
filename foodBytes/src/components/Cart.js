import { useSelector } from "react-redux";
import FoodItem from "./FoodItem";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="cart-card">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>Cart Items {cartItems.lengeth}</h1>
      {cartItems.map((item) => (
        <FoodItem key={item.id} {...item} />
      ))}
      <FoodItem {...cartItems[0]} />
    </div>
  );
};
export default Cart;
