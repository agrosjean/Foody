import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

function Review() {
  const [comment, setComment] = useState("");
  const loggedInUserID = localStorage.getItem("id");
  const [userID, setUserID] = useState(loggedInUserID);
  const { id } = useParams();
  const [restaurantID, setRestaurantID] = useState(id);
  const [restaurant, setRestaurant] = useState({});
  const navigate = useNavigate();
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/restaurants/${id}`)
      .then((response) => response.json())
      .then((restaurantJson) => {
        console.log(restaurantJson);
        setRestaurant(restaurantJson);
      });
  }, [id]);

  const handleClick = (event) => {
    event.preventDefault();

    // Send the new dog info to the backend
    fetch("http://localhost:3000/reviews", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        comment: comment,
        user_id: userID,
        restaurant_id: restaurantID,
      }),
    }).then((resp) => {
      // After send success, then refresh page
      if (resp.ok) {
        resp.json().then((user) => {
          //   setCurrentUser(user);
          navigate(`/restaurants/${id}`);
        });
      } else {
        resp.json().then((errorsJSON) => {
          console.error(errorsJSON);
          setError(errorsJSON.errors[0]);
        });
      }
    });
  };

  return (
    <>
      <h1>{restaurant.name}</h1>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Comments</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />
        </Form.Group>
        <div className="mb-3">
          <small>{error}</small>
        </div>
        <Button as="input" type="submit" value="Submit" onClick={handleClick} />
      </Form>
    </>
  );
}
export default Review;
