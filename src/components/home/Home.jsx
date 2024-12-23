import React from "react";
import "./home.css";
import homeImg from "../../assets/home.png";
import homeIcon from "../../assets/home-icon.png";

const Home = () => {
  return (
    <section className="home">
      <div className="home-text">
        <h1>
          We boost <br /> growth for your statup business
        </h1>
        <p>
          Our goal is top at the heart of creativity services industry as a
          digital creator. In has a after comment
        </p>
        <div className="buttons">
        <button className="btn">Get Started</button>
        <button className="home-btn">
          <img src={homeIcon} alt="icon" />
          <span>Learn More</span>
        </button></div>
      </div>
      <div className="home-image">
        <img src={homeImg} alt="home-img" />
      </div>
    </section>
  );
};

export default Home;
