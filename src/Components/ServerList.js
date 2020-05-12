import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServerCreation from "./ServerCreation";
import SeverInfoBox from "./ServerInfoBox";
import "../Styles/ServerList.css";

function ServerList() {
  return (
    <Col className="Servers_Column">
      <ServerCreation />
      <SeverInfoBox />
      <SeverInfoBox />
      <SeverInfoBox />
      <SeverInfoBox />
      <SeverInfoBox />
      <SeverInfoBox />
      <SeverInfoBox />
      <SeverInfoBox />
      <SeverInfoBox />
      <SeverInfoBox />
      <SeverInfoBox />
      <SeverInfoBox />
      <SeverInfoBox />
      <SeverInfoBox />
      <SeverInfoBox />
      <SeverInfoBox />
      <SeverInfoBox />
      {/* TODO SERVER LIST */}{" "}
    </Col>
  );
}

export default ServerList;
