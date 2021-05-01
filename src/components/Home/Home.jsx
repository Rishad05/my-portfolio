import React from "react";
import banner from "../../images/default-featured-banner.jpg"
import "./Home.css";

const Home = () => {
  return (
    <div id="home">
      <img className="d-block w-100 custom-img" src={banner} alt="Third slide" />
    </div>
  );
};
export default Home;
