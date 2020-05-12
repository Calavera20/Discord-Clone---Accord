import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "./Nav";
import ServerList from "./ServerList";
import UserList from "./UserList";
import Chat from "./Chat";
import "../Styles/Main.css";

function Main() {
  return (
    <Container className="Main" fluid>
      <Nav />

      <Row className="Main_Content_Row">
        <ServerList />

        <Chat />

        <UserList />
      </Row>
    </Container>
  );
}

export default Main;
