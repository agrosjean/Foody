import React from "react";
import "../styles/HomePage.css";
import Bground from "../assets/brunch1.png";
import Foody1 from "../assets/Foody1.jpeg";
import Foody2 from "../assets/Foody2.jpeg";
import Foody3 from "../assets/Foody3.jpeg";
import Foody4 from "../assets/Foody4.jpeg";
import Foody5 from "../assets/Foody5.jpeg";
import Foody6 from "../assets/Foody6.jpg";
import Foody7 from "../assets/Foody7.jpeg";
import Foody9 from "../assets/Foody9.jpeg";
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
          <h2>I present you Foody</h2>
          <h5>
            A plateforme to discover and review all restaurant in New York City
          </h5>
        </div>
        <div className="brunch_img">
          <img src={Bground} alt="background_1" />
        </div>
      </div>

      <div className="recipes">
        <h2>Featured Cuisine</h2>
        <Carousel responsive={responsive}>
          <div className="carousel">
            <img src={Foody1} alt="background_1" />
            <h5> Fish </h5>
          </div>
          <div className="carousel">
            <img src={Foody9} alt="background_1" />
            <p> Sizzling Fish </p>
          </div>
          <div className="carousel">
            <img src={Foody2} alt="background_1" />
            <h5> Marguerita Pizza </h5>
          </div>
          <div className="carousel">
            <img src={Foody3} alt="background_1" />
            <h5> Sushis </h5>
          </div>
          <div className="carousel">
            <img src={Foody4} alt="background_1" />
            <h5> Nachos </h5>
          </div>
          <div className="carousel">
            <img src={Foody5} alt="background_1" />
            <h5> Salmon </h5>
          </div>
          <div className="carousel">
            <img src={Foody6} alt="background_1" />
            <h5> Steak </h5>
          </div>
          <div className="carousel">
            <img src={Foody7} alt="background_1" />
            <h5> Ratatouille </h5>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
export default HomePage;
