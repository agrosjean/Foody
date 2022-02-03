import React from "react";
import "../styles/HomePage.css";
import Bground from "../assets/brunch1.png";
import Carousel from "react-multi-carousel";

function HomePage() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="home_container">
      <div className="brunch">
        <div className="brunch_text">
          <h2>A recipe marketplace for culinary creators</h2>
          <p>
            Buy amazing recipes and support your favorite culinary creators.
          </p>
        </div>
        <div className="brunch_img">
          <img src={Bground} alt="background_1" />
        </div>
      </div>

      <div className="recipes">
        <h2>Featured Recipes</h2>
        <Carousel responsive={responsive}>
          <div className="carousel">
            <img src={Bground} alt="background_1" />
            <p> Sizzling Fish </p>
          </div>
          <div className="carousel">
            <img src={Bground} alt="background_1" />
            <p> Sizzling Fish </p>
          </div>
          <div className="carousel">
            <img src={Bground} alt="background_1" />
            <p> Sizzling Fish </p>
          </div>
          <div className="carousel">
            <img src={Bground} alt="background_1" />
            <p> Sizzling Fish </p>
          </div>
          <div className="carousel">
            <img src={Bground} alt="background_1" />
            <p> Sizzling Fish </p>
          </div>
          <div className="carousel">
            <img src={Bground} alt="background_1" />
            <p> Sizzling Fish </p>
          </div>
          <div className="carousel">
            <img src={Bground} alt="background_1" />
            <p> Sizzling Fish </p>
          </div>
          <div className="carousel">
            <img src={Bground} alt="background_1" />
            <p> Sizzling Fish </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
export default HomePage;
