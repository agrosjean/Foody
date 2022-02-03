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
import { LinkContainer } from "react-router-bootstrap";
import Stack from "@mui/material/Stack";
import "./Navbar.css";

function Navbar() {
  const isLoggedIn = localStorage.getItem("id"); // 14 or null;
  const isAdmin = JSON.parse(localStorage.getItem("admin"));

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
        <BootstrapNavbar.Brand className="navbar-logo">
          <h2>Foody</h2>
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
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/restaurants">
              <Nav.Link>Restaurants</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/reviews">
              <Nav.Link>My Reviews</Nav.Link>
            </LinkContainer>
            {isLoggedIn && isAdmin && (
              <LinkContainer to="/admin">
                <Nav.Link>Admin</Nav.Link>
              </LinkContainer>
            )}
          </Nav>
          <Stack direction="row" spacing={2}>
            {isLoggedIn ? (
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
