import { useState, useContext } from "react";
import { swiggy_api_URL } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Helper"; // For reusability or readability filterData function is added in Helper.js file of Utils folder
import useResData from "../Hooks/useResData"; // imported custom hook useResData which gives restaurant data from swigy api
import useOnline from "../Hooks/useOnline"; // imported custom hook useOnline which checks user is online or not
import UserOffline from "./UserOffline";
import UserContext from "../utils/UserContext.js";

// Body Component for body section: It contain all restaurant cards
const Body = () => {
  // useState: To create a state variable, searchText, allRestaurants and filteredRestaurants is local state variable
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [allRestaurants, FilterRes] = useResData(swiggy_api_URL);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const isOnline = useOnline();
  const { user, setUser } = useContext(UserContext);
  // if user is not Online then return UserOffline component
  if (!isOnline) {
    return <UserOffline />;
  }

  // use searchData function and set condition if data is empty show error message
  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const data = filterData(searchText, restaurants);
      setFilteredRestaurants(data);
      setErrorMessage("");
      if (data.length === 0) {
        setErrorMessage(
          `Sorry, we couldn't find any results for "${searchText}"`
        );
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };

  // if allRestaurants is empty don't render restaurants cards
  if (!allRestaurants) return null;

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          // update the state variable searchText when we typing in input box
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            // user click on button searchData function is called
            searchData(searchText, allRestaurants);
          }}
        >
          Search
        </button>
        {/* <input
          value={user.name}
          onChange={(e) =>
            setUser({
              name: e.target.value,
              email: "newEmail@xyz.com",
            })
          }
        ></input> */}
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}

      {/* if restaurants data is not fetched then display Shimmer UI after the fetched data display restaurants cards */}
      {allRestaurants?.length === 0 && FilterRes?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          {/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}
          {(filteredRestaurants === null ? FilterRes : filteredRestaurants).map(
            (restaurant) => {
              return (
                <Link
                  to={"/restaurant/" + restaurant.data.id}
                  key={restaurant.data.id}
                >
                  {" "}
                  {/* if we click on any restaurant card it will redirect to that restaurant menu page */}
                  <RestaurantCard {...restaurant.data} user={user} />
                </Link>
              );
            }
          )}
        </div>
      )}
    </>
  );
};

export default Body;
