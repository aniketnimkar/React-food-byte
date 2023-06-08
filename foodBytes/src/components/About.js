// import { Outlet } from "react-router-dom";
import React from "react";
// import Profile from "./ProfileClass";
// import ProfileFunctionalComponent from "./Profile";
// import { Component } from "react";
import food from "../components/assets/food.png";
const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <h1>
          Welocome <br /> And Enjoy <br />
          <span>Fresh Flavors. Pure Delight.</span>
        </h1>
      </div>
      <div className="about-right">
        <img src={food} alt="food logo"></img>
      </div>
    </div>
  );
};

export default About;
