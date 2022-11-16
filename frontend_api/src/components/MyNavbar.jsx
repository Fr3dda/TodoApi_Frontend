import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const MyNavbar = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" variant="light">
      <Navbar.Brand href="#home">Vad ska göras?</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="https://todo-db.azurewebsites.net/api/todos">Ärenden</Nav.Link>
          <Nav.Link href="https://todo-db.azurewebsites.net/api/Customers">Användare</Nav.Link>
          <Nav.Link href="https://todo-db.azurewebsites.net/api/Statuses">Statusar</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
  )
}

export default MyNavbar