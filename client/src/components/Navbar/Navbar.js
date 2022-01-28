import React from "react";
import {
  Navbar as BootstrapNavbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  Container,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import "./Navbar.css";

function Navbar() {
  const userID = localStorage.getItem("id"); // 14 or null;
  const navigate = useNavigate();
  const logout = () => {
    fetch("/logout", { method: "DELETE" }).then((res) => {
      if (res.ok) {
        localStorage.clear();
        navigate("/login");
      }
    });
  };

  return (
    <BootstrapNavbar className="NavbarItems" bg="light" expand="lg">
      <Container fluid>
        <BootstrapNavbar.Brand className="navbar-logo" href="#">
          Foody
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle
          className="fab fa-react"
          aria-controls="navbarScroll"
        />
        <BootstrapNavbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/restaurants">Restaurants</Nav.Link>
            <Nav.Link href="/reviews">My Reviews</Nav.Link>
          </Nav>
          <Stack direction="row" spacing={2}>
            {userID ? (
              <Button onClick={logout}>Logout</Button>
            ) : (
              <>
                <Link to="/signup">SignUp</Link>
                <Link to="/login">LogIn</Link>
              </>
            )}
          </Stack>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
