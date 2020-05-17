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

  const currentUser = {};

  useEffect(() => {
    props.fetchUsers();
  }, []);

  useEffect(() => {
    console.log(users);
  });

  return (
    <Container className="Main" fluid>
      <Nav />

      <Row className="Main_Content_Row">
        <ServerList />

        <Chat />

        <UserList allUsers={users} />
      </Row>
    </Container>
  );
}

export default connect(null, { fetchUsers })(Main);
