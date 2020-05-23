import React from "react";
import "../Styles/NavUserInfo.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import StatusChangeBox from "./StatusChangeBox";
import axios from "axios";

function NavUserInfo(props) {
  const users = useSelector((state) => state.fetchUsersReducer.usersArray);
  const currentUsername = useSelector((state) => state.loginStatus.username);

  const [image, setImage] = useState("");
  //const [activity, setActivity] = useState('');
  const [username, setUsername] = useState("");

  const [render, setRender] = useState(false);

  const [status, setStatus] = useState("online");

  const handleChange = (statusChange) => {
    setRender(!render);
    setStatus(statusChange);

    //TODO: api call to DB to change user's status
  };

  let currentUser = {};

  const returnCurrentUser = (Users) => {
    for (let i = 0; i < Users.length; i++) {
      if (Users[i].username === currentUsername) {
        return Users[i];
      }
    }
  };

  useEffect(() => {
    currentUser = returnCurrentUser(users);

    if (currentUser) {
      setImage(currentUser.image);
      setUsername(currentUser.username);
    }
  });

  console.log(currentUser);
  return (
    <div className="VerticalAlign">
      <div
        className="UserIcon"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div
          className={`UserStatusIcon-${
            status === "online"
              ? "online"
              : status === "busy"
              ? "busy"
              : status === "offline"
              ? "offline"
              : ""
          }`}
          onClick={() => setRender(!render)}
        >
          {render && <StatusChangeBox handleChange={handleChange} />}
        </div>
      </div>
      <div className="UserInfo">
        <div className="Username">{username}</div>
        <div className="UserActivity">Spotify: Jack Reaper</div>
      </div>
    </div>
  );
}

export default NavUserInfo;
