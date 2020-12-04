import React from "react";
// import {Link} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Header() {
  return (
    <Navbar expand="md" variant="dark" className="nav-bar">
      <Navbar.Brand href="/" className="navbar-brand" >Daily Habits</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler"/>
      <Navbar.Collapse className="navbar-collapse" id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="/user/register" className="nav-item">New User</Nav.Link>
          <Nav.Link href="/user/find" className="nav-item">Log In</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
}

export default Header;
