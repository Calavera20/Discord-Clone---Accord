import React from "react";
import { Col } from "react-bootstrap";
import "../Styles/ServerCreation.css";
import { useDispatch, connect } from "react-redux";
import { DISPLAY_FORM } from "../Redux/Actions/types";

function ServerCreationBox() {
  const dispatch = useDispatch();

  return (
    <Col className="Servers_Creation">
      <div className="Server_Creation_Text">Create server</div>
      <div
        className="Server_Add_Button"
        onClick={() => dispatch({ type: DISPLAY_FORM })}
      >
        +
      </div>
    </Col>
  );
}

export default connect()(ServerCreationBox);
