import React from "react";
import "../Styles/NavUserInfo.css";

function NavUserInfo() {
  return (
    <div className="VerticalAlign">
      <div className="UserIcon">
        <div className="UserStatusIcon"></div>
      </div>
      <div className="UserInfo">
        <div className="Username">Masło Masło MasłoMasło</div>
        <div className="UserActivity">Spotify: Jack Reaper</div>
      </div>
    </div>
  );
}

export default NavUserInfo;
