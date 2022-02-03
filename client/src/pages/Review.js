import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function Review() {
  const [comment, setComment] = useState("");
  const [userID, setUserID] = useState("");
  const [restaurantID, setRestaurantID] = useState("");

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
          //   navigate("/login");
        });
      } else {
        resp.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  };

  return (
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
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>User ID</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={userID}
          onChange={(event) => setUserID(event.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Restaurant ID</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={restaurantID}
          onChange={(event) => setRestaurantID(event.target.value)}
        />
      </Form.Group>
      <Button as="input" type="submit" value="Submit" onClick={handleClick} />
    </Form>
  );
}
export default Review;
