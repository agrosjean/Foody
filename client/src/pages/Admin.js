import React, { useEffect, useState } from "react";
import { Table, Form, Button, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Restaurant() {
  const [restaurants, setRestaurants] = useState([]);
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [open_time, setOpenTime] = useState("");
  const [closed_time, setClosedTime] = useState("");
  const [address, setAddress] = useState("");
  const [score, setScore] = useState("");
  const [image_url, setImageUrl] = useState("");
  console.log(image_url);

  useEffect(() => {
    fetch("/restaurants")
      .then((response) => response.json())
      .then((restaurantsJson) => {
        setRestaurants(restaurantsJson);
      });
  }, []);

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
        score: score,
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

  return (
    <Container>
      <h1>Admin</h1>
      <h1>You are signed in as... {localStorage.getItem("name")}</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Score</th>
            <th>Open</th>
            <th>Close</th>
            <th>Address</th>
            {/* <th>Image</th> */}
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
              <td>{restaurant.score}</td>
              <td>{restaurant.open_time}</td>
              <td>{restaurant.closed_time}</td>
              <td>{restaurant.address}</td>
              {/* <td>{restaurant.image_url}</td> */}
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

        <Form.Group className="mb-3" controlId="formBasicScore">
          <Form.Label>Score</Form.Label>
          <Form.Control
            type="Score"
            value={score}
            onChange={(event) => setScore(event.target.value)}
            placeholder="Score"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicOpenTime">
          <Form.Label>Open Time:</Form.Label>
          <Form.Control
            type="Open_Time"
            value={open_time}
            onChange={(event) => setOpenTime(event.target.value)}
            placeholder="Open Time"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicClosedTime">
          <Form.Label>ClosedTime Time:</Form.Label>
          <Form.Control
            type="Closed_Time"
            value={closed_time}
            onChange={(event) => setClosedTime(event.target.value)}
            placeholder="Close Time"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Address:</Form.Label>
          <Form.Control
            type="Address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            placeholder="Address"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicImage">
          <Form.Label>Image:</Form.Label>
          <Form.Control
            type="text"
            value={image_url}
            onChange={(event) => setImageUrl(event.target.value)}
            placeholder="Image URL"
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
