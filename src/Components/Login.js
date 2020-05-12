import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/Login.css";

function Login() {
  return (
    <Container fluid className="Login_Page ">
      <Row className="text-center">
        <Col>
          <img
            src={require("../AccordLogo.png")}
            class="img-fluid Logo"
            alt="LOGO"
            style={{ height: "100%" }}
          ></img>
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={4} className="Logo_Input_Box z-depth-5">
          elo
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col className="Logo_Footbar_Info text-center">
          About <br />
          Mickiewicz to ... <br />
          All rights reserved by ,,w,,Container,afw
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
