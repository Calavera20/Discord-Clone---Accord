import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/NavLogo.css";

function NavLogo() {
  return (
    <img
      src={require("../AccordLogo.png")}
      class="img-fluid Logo"
      alt="LOGO"
    ></img>
  );
}

export default NavLogo;
