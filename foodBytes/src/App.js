import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import { useState } from "react";
import Instamart from "./components/Instamart";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/Store";
import Cart from "./components/Cart";
// import ProfileClass from "./components/ProfileClass";

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Aniket",
    email: "Demo@example.com",
  });

  return (
    //boy have, header>logo>list item> cart =>body>search bar
    //
    <Provider store={store}>
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Body
            user={{
              name: "Aniket Nimkar",
              email: "Demo@example.com",
            }}
          />
        ),
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: <Instamart />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  // {
  //   path: "login",
  //   element: <Login />,
  // },
]);

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<RouterProvider router={appRouter} />);
