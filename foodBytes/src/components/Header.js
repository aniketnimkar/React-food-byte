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
    </div>
  );
};
export default Header;
