import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "./Nav";
import ServerList from "./ServerList";
import UserList from "./UserList";
import Chat from "./Chat";
import "../Styles/Main.css";
import { fetchUsers } from "../Redux/Actions/index";
import { useEffect } from "react";
import { connect, useSelector } from "react-redux";

function Main(props) {
  const users = useSelector((state) => state.fetchUsersReducer.usersArray);
  const currentUsername = useSelector((state) => state.loginStatus.username);

  let currentUser = {};

  const returnCurrentUser = (Users) => {
    for (let i = 0; i < Users.length; i++) {
      if (Users[i].username === currentUsername) {
        return Users[i];
      }
    }
  };

  useEffect(() => {
    props.fetchUsers();
  }, []);

  useEffect(() => {
    currentUser = returnCurrentUser(users);
    console.log(currentUser);
  });

  return (
    <Container className="Main" fluid>
      <Nav currentUser={currentUser} />

      <Row className="Main_Content_Row">
        <ServerList />

        <Chat />

        <UserList allUsers={users} />
      </Row>
    </Container>
  );
}

export default connect(null, { fetchUsers })(Main);
