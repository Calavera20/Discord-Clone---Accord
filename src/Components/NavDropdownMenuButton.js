import React from "react";
import { DropdownButton, Dropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Styles/NavDropdownMenuButton.css";

function NavDropdownMenu() {
  return (
    <Container className="Nav_DropdownButton text-right align-center">
      <DropdownButton
        className="Dropdown_Menu"
        id="dropdown-basic-button"
        title="Dropdown button"
      >
        <Dropdown.Item href="#/action-1">About</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-3">Log out</Dropdown.Item>
      </DropdownButton>
    </Container>
  );
}

export default NavDropdownMenu;
