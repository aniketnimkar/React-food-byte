import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

//jsx => React.createElement => Object => HTML(DOM)

// This is Config Driven UI

// Footer component for footer section

const AppLayout = () => {
  return (
    //boy have, header>logo>list item> cart =>body>search bar
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<AppLayout />);
