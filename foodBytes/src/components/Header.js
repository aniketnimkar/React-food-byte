import { useState } from "react";

const loggedInUser = () => {
  //API call
  return true;
};

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://mma.prnewswire.com/media/1201087/FoodBytes_by_Rabobank_Logo.jpg?p=facebook"
    ></img>
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Login</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Logout</button>
      )}
    </div>
  );
};
export default Header;
