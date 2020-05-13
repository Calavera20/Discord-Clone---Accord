import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../Styles/AuthenticationPage.css";

function AuthenticationPage(props) {
  return (
    <Container fluid className="Authentication_Page ">
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
        <Col xs={4} className="Authentication_Input_Box">
          {props.children}
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col className="Authentication_Footbar_Info text-center">
          About <br />
          Mickiewicz to ... <br />
          All rights reserved by ,,w,,Container,afw
        </Col>
      </Row>
    </Container>
  );
}

export default AuthenticationPage;
