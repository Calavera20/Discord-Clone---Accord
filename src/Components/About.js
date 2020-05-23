import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/About.css";

function About() {
  return (
    <Container fluid className="About_Page ">
      <Row>
        <Col xs={2}></Col>
        <Col className="Content_Column">
          <div className="Content_Logo">logo</div>
          <div className="Content_About">about</div>
          <div className="Content_Contact">contact</div>
        </Col>
        <Col xs={2}></Col>
      </Row>
    </Container>
  );
}

export default About;
