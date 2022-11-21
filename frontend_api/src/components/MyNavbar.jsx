import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from 'react-router-dom';

const MyNavbar = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" variant="light">
      <Navbar className="h1 m-3" href="#home"   >Vad ska göras?</Navbar>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <NavLink className="nav-link fs-4" to="/">Home</NavLink>
          <NavLink className="nav-link fs-4" to="/todos">Ärenden</NavLink>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
  )
}

export default MyNavbar