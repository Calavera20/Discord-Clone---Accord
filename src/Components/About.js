import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/About.css";

function About(props) {
  return (
    <Container fluid className="About_Page ">
      <Row className="About_Page ">
        <Col className="Content_Filler_Column" xs={2}></Col>
        <Col className="Content_Column">
          <div className="Content_About">
            <button onClick={(e) => props.handleSwap("Main")}>X</button>
            TBA
          </div>
          <div className="Content_Contact">
            <p className="Bottom_Text">
              Any inquiries concerning this application please forward to:
              jakub.remiszewski102@gmail.com
            </p>
          </div>
        </Col>
        <Col className="Content_Filler_Column" xs={2}></Col>
      </Row>
    </Container>
  );
}

export default About;
