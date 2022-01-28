import React, { useEffect, useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

function LogIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();

    // Send the new dog info to the backend
    fetch("http://localhost:3000/login", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ email }),
    }).then((resp) => {
      // After send success, then refresh page
      if (resp.ok) {
        resp.json().then((user) => {
          console.log("user==>>", user);
          localStorage.setItem("email", user.email);
          localStorage.setItem("id", user.id);
          localStorage.setItem("name", user.name);
          navigate("/restaurants");
        });
      } else {
        resp.json().then((errors) => {
          console.log("errrr==>>", errors);
          console.error(errors);
        });
      }
    });
  };

  return (
    <div>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="email@example.com"
            />
          </Col>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleClick}>
          Submit
        </Button>
      </Form>

      <p>Don't have an account?</p>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
}

export default LogIn;
