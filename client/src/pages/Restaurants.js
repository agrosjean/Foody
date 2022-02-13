import React, { useEffect, useState } from "react";
import { Table, Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import brunchImg from "../assets/brunch1.png";
import "../styles/Restaurant.css";

function Restaurant() {
  const [restaurants, setRestaurants] = useState([]);
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [open_time, setOpenTime] = useState("");
  const [closed_time, setClosedTime] = useState("");
  const [address, setAddress] = useState("");
  const [image_url, setImageUrl] = useState("");
  const isLoggedIn = localStorage.getItem("id");

  useEffect(() => {
    fetch("/restaurants")
      .then((response) => response.json())
      .then((restaurantsJson) => {
        setRestaurants(restaurantsJson);
      });
  }, []);

  console.log(restaurants, "<===restaurants");

  const handleUpdateClick = (restaurantID) => {
    // send a request to delete the row that was clicked
    fetch(`/restaurants/${restaurantID}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "UPDATE",
    }).then((resp) => {
      // After send success, then refresh page
      window.location.reload();
    });
  };

  const handleDeleteClick = (restaurantID) => {
    // send a request to delete the row that was clicked
    fetch(`/restaurants/${restaurantID}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "DELETE",
    }).then((resp) => {
      // After send success, then refresh page
      window.location.reload();
    });
  };

  const handleClick = (event) => {
    event.preventDefault();

    // Send the new dog info to the backend
    fetch("/restaurants", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        name: name,
        cuisine: cuisine,
        open_time: open_time,
        closed_time: closed_time,
        address: address,
        image_url: image_url,
      }),
    }).then((resp) => {
      // After send success, then refresh page
      window.location.reload();
    });
  };

  console.log(restaurants, "ress");

  return (
    <Container>
      <h1>You are signed in as... {localStorage.getItem("name")}</h1>

      {restaurants.map(
        ({
          name,
          id,
          cuisine,
          address,
          closed_time,
          open_time,
          score,
          image_url,
        }) => (
          <div key={id} className="restaurant_card">
            <img src={image_url} alt="img" />

            <div className="card_details">
              <div className="card_texts">
                <h1>{name}</h1>
                <p>Cuisine: {cuisine}</p>
                <p>Address: {address}</p>
                <p>Close time: {closed_time}</p>
                <p>open time: {open_time}</p>
                <p>Score: {score}</p>
              </div>
              <div className="card_buttons">
                {/* <Link to={`/restaurants/edit/${id}`}>
                  <Button variant="danger">Update</Button>
                </Link> */}
                {isLoggedIn && (
                  <Link to={`/restaurants/${id}`}>
                    <Button variant="warning">View</Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )
      )}

      {/* <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Open</th>
            <th>Close</th>
            <th>Address</th>
            <th>Update</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant) => (
            <tr>
              <td>{restaurant.id}</td>
              <td>{restaurant.name}</td>
              <td>{restaurant.cuisine}</td>
              <td>{restaurant.open_time}</td>
              <td>{restaurant.closed_time}</td>
              <td>{restaurant.address}</td>
              <td>
                <LinkContainer to={`/restaurants/edit/${restaurant.id}`}>
                  /restaruant/profile 
                  <Button variant="danger">Update</Button>
                </LinkContainer>
              </td>
              <td>
                <LinkContainer to={`/restaurants/${restaurant.id}`}>
                  <Button variant="warning">View</Button>
                </LinkContainer>
              </td>
            </tr>
          ))}
        </tbody>
      </Table> */}
      {/* <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCuisine">
          <Form.Label>Cuisine</Form.Label>
          <Form.Control
            type="Cuisine"
            value={cuisine}
            onChange={(event) => setCuisine(event.target.value)}
            placeholder="Cuisine"
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleClick}>
          Submit
        </Button>
      </Form> */}
    </Container>
  );
}

export default Restaurant;
