import { Container, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditRestaurant() {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/restaurants/${id}`)
      .then((response) => response.json())
      .then((restaurantJson) => {
        console.log(restaurantJson);
        setName(restaurantJson.name);
        setCuisine(restaurantJson.cuisine);
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
      body: JSON.stringify({ name: name, cuisine: cuisine }),
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

        <Button variant="primary" type="submit" onClick={handleUpdateClick}>
          Update
        </Button>
      </Form>
    </Container>
  );
}
