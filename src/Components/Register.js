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
        <div class="form-group">
          <label for="InputPassword">Confirm Password</label>
          <input
            type="password"
            class="form-control"
            id="InputPassword"
            placeholder="Password"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Register!
        </button>
      </Form>
    </Container>
  );
}

export default Login;
