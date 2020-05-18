import React from "react";
import "../Styles/NavUserInfo.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function NavUserInfo(props) {
  const users = useSelector((state) => state.fetchUsersReducer.usersArray);
  const currentUsername = useSelector((state) => state.loginStatus.username);

  const [image, setImage] = useState("");
  //const [activity, setActivity] = useState('');
  const [username, setUsername] = useState("");

  let currentUser = {};

  const returnCurrentUser = (Users) => {
    for (let i = 0; i < Users.length; i++) {
      if (Users[i].username === currentUsername) {
        return Users[i];
      }
    }
  };

  useEffect(() => {
    console.log(users);
    console.log(currentUsername);
    currentUser = returnCurrentUser(users);
    console.log("Current User Object");
    console.log(currentUser);
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
        <div className="UserStatusIcon"></div>
      </div>
      <div className="UserInfo">
        <div className="Username">{username}</div>
        <div className="UserActivity">Spotify: Jack Reaper</div>
      </div>
    </div>
  );
}

export default NavUserInfo;
