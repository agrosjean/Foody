import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function RestaurantProfile() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    fetch(`/restaurants/${id}`)
      .then((response) => response.json())
      .then((restaurantJson) => {
        console.log(restaurantJson);
        setRestaurant(restaurantJson);
      });
  }, [id]);

  return (
    <div className="restaurant_profile">
      <h1>{restaurant.name}</h1>
      <h5>Cuisine: {restaurant.cuisine}</h5>

      <p>Reviews: </p>
      <ul>
        {restaurant.reviews?.map((review) => {
          return <li key={review.id}>{review.comment}</li>;
        })}
      </ul>
      <Link to={`/review/${id}`}>
        <Button className="review_btn">
          <h2>Make a Review</h2>
        </Button>
      </Link>
    </div>
  );
}
export default RestaurantProfile;
