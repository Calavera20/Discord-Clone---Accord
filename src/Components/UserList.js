import React from "react";
import { Col } from "react-bootstrap";
import "../Styles/UserList.css";
import UserInfoBox from "./UserInfoBox";

function UserList(props) {
  console.log(props.allUsers);
  const usersArray = props.allUsers;

  //TODO sort user list by active > busy > offline,
  const usersToRender = usersArray.map((userInfo) => {
    return <UserInfoBox userInfo={userInfo} key={userInfo._id} />;
  });

  return (
    <Col className="Users_Column">
      {/*TODO possibly add some sorting to users like show offline */}
      {usersToRender}
    </Col>
  );
}

export default UserList;
