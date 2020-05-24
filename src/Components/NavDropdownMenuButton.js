import React from "react";
import { DropdownButton, Dropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Styles/NavDropdownMenuButton.css";

function NavDropdownMenu(props) {
  return (
    <Container className="Nav_DropdownButton text-right align-center">
      <DropdownButton
        className="Dropdown_Menu"
        id="dropdown-basic-button"
        title="Dropdown button"
      >
        <Dropdown.Item onClick={() => props.currentComponent("Settings")}>
          settings
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3">TBA</Dropdown.Item>
        <Dropdown.Item onClick={() => props.currentComponent("About")}>
          About
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="/logout">Log out</Dropdown.Item>
        {
          //TODO: add actions to set state to display correct components in Main Component
        }
      </DropdownButton>
    </Container>
  );
}

export default NavDropdownMenu;
