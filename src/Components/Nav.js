import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavUserInfo from "./NavUserInfo";
import NavDropdownMenu from "./NavDropdownMenuButton";
import NavLogo from "./NavLogo";
import "../Styles/Nav.css";

function Nav(props) {
  console.log(props.currentUser);
  return (
    <Row className="Nav_Row">
      <Col xs={4}>
        <NavUserInfo currentUser={props.currentUser} />
      </Col>
      <Col className="Nav_Logo text-center" xs={4}>
        <NavLogo />
      </Col>
      <Col className="Nav_Menu" xs={4}>
        <NavDropdownMenu />
      </Col>
    </Row>
  );
}

export default Nav;
