import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Styles/Login.css";

function Login() {
  return (
    <Container className="Login_Container">
      <Form>
        <div class="form-group">
          <label for="InputLogin">Login</label>
          <input
            type="login"
            class="form-control"
            id="InputLogin"
            placeholder="Enter login"
          />
        </div>

        <div class="form-group">
          <label for="InputPassword">Password</label>
          <input
            type="password"
            class="form-control"
            id="InputPassword"
            placeholder="Password"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Log in!
        </button>
      </Form>
      <hr className="Login_Divider " />
      Not registered yet?{" "}
      <Link
        to={{
          pathname: "/register",
        }}
      >
        Sign up here.
      </Link>
    </Container>
  );
}

export default Login;
