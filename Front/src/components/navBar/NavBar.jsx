import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BsHouseDoor, BsPersonFill } from 'react-icons/bs';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#login">
            <BsPersonFill /> Iniciar sesión
          </Nav.Link>
          <Nav.Link href="#home">
            <BsHouseDoor /> Mi Sitio Web
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;