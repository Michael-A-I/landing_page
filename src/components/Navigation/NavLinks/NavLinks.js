import React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"

import "./css/NavLinks.css"

function NavLinks(props) {
  return (
    <>
      <Navbar variant="dark" className="hero-navbar" expand="lg">
        <Navbar.Brand href="#home">
          {props.logo}{" "}
          <h1 style={{ fontSize: "24px", color: "#F9FA8" }} className="hero-logo-tag">
            Mike the Builder
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Email</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavLinks
