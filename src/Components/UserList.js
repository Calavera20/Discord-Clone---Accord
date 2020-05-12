import React from "react";
import { Col } from "react-bootstrap";
import "../Styles/UserList.css";
import UserInfoBox from "./UserInfoBox";

function UserList() {
  return (
    <Col className="Users_Column">
      {/*TODO possibly add some sorting to users like show offline */}
      <UserInfoBox />
      <UserInfoBox />
      <UserInfoBox />
      <UserInfoBox />
      <UserInfoBox />
      <UserInfoBox />
      <UserInfoBox />
      <UserInfoBox />
      <UserInfoBox />
      <UserInfoBox />
      <UserInfoBox />
      <UserInfoBox />
      <UserInfoBox />
      <UserInfoBox />
      <UserInfoBox />
      <UserInfoBox />
      {/* TODO User LIST */}
    </Col>
  );
}

export default UserList;
