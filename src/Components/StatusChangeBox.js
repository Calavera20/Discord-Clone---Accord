import React from "react";
import "../Styles/StatusChangeBox.css";

function StatusChangeBox(props) {
  console.log(props.currentUser);
  return (
    <div className="Change_Box">
      <div className="Option" onClick={() => props.handleChange("online")}>
        <div className="Status_Icon_Active"></div>
        <div className="Inline">Online</div>
      </div>
      <div className="Option" onClick={() => props.handleChange("busy")}>
        <div className="Status_Icon_Busy"></div>
        <div className="Inline">Busy</div>
      </div>
      <div className="Option" onClick={() => props.handleChange("offline")}>
        <div className="Status_Icon_Offline"></div>
        <div className="Inline">Appear offline</div>
      </div>
    </div>
  );
}

export default StatusChangeBox;
