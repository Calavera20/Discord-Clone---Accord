import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/UserInfoBox.css";

function UserInfoBox(props) {
  return (
    <Col className="User_Info_Box">
      {/* TODO gray out offline user */}

      <div
        className="User_Icon"
        style={{ backgroundImage: `url(${props.userInfo.icon})` }}
      >
        <div className="UserStatusIcon_Active"></div>
        {props.userInfo.status === "active" && (
          <div className="UserStatusIcon_Active"></div>
        )}
        {props.userInfo.status === "offline" && (
          <div className="UserStatusIcon_Offline"></div>
        )}
        {props.userInfo.status === "busy" && (
          <div className="UserStatusIcon_Busy"></div>
        )}
      </div>
      <div className="Username_Status">
        <div className="User_List_Name">{props.userInfo.username}</div>
        <div className="User_List_Activity">
          aktywnosc{props.userInfo.activity}
        </div>
      </div>
    </Col>
  );
}

export default UserInfoBox;
