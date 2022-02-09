import { Container, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditRestaurant() {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [open_time, setOpenTime] = useState("");
  const [closed_time, setClosedTime] = useState("");
  const [address, setAddress] = useState("");
  const [score, setScore] = useState("");
  const [image_url, setImageUrl] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/restaurants/${id}`)
      .then((response) => response.json())
      .then((restaurantJson) => {
        console.log(restaurantJson);
        setName(restaurantJson.name);
        setCuisine(restaurantJson.cuisine);
        setOpenTime(restaurantJson.open_time);
        setClosedTime(restaurantJson.closed_time);
        setAddress(restaurantJson.address);
        setScore(restaurantJson.score);
        setImageUrl(restaurantJson.image_url);
      });
  }, [id]);

  const handleUpdateClick = (event) => {
    event.preventDefault();

    // Send the updated restaurant info to the backend
    fetch(`http://localhost:3000/restaurants/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
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
      // After update success, then navigate to home page
      navigate("/restaurants");
    });
  };

  return (
    <Container>
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
            placeholder="Image"
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleUpdateClick}>
          Update
        </Button>
      </Form>
    </Container>
  );
}
