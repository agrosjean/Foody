import React, { useEffect, useState } from "react";
import { Table, Form, Button, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Restaurant() {
  const [restaurants, setRestaurants] = useState([]);
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/restaurants")
      .then((response) => response.json())
      .then((restaurantsJson) => {
        setRestaurants(restaurantsJson);
      });
  }, []);

  const handleUpdateClick = (restaurantID) => {
    // send a request to delete the row that was clicked
    fetch(`http://localhost:3000/restaurants/${restaurantID}`, {
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
    fetch(`http://localhost:3000/restaurants/${restaurantID}`, {
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
    fetch("http://localhost:3000/restaurants", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ name: name, cuisine: cuisine }),
    }).then((resp) => {
      // After send success, then refresh page
      window.location.reload();
    });
  };

  return (
    <Container>
      <h1>You are signed in as... {localStorage.getItem("name")}</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant) => (
            <tr>
              <td>{restaurant.id}</td>
              <td>{restaurant.name}</td>
              <td>{restaurant.cuisine}</td>
              <td>
                <LinkContainer to={`/restaurants/edit/${restaurant.id}`}>
                  <Button variant="danger">Update</Button>
                </LinkContainer>
              </td>
              <td>
                <Button
                  variant="warning"
                  onClick={(event) => handleDeleteClick(restaurant.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Form>
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
      </Form>
    </Container>
  );
}

export default Restaurant;
