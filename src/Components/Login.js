import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Styles/Login.css";
import { useForm } from "react-hook-form";
import { connect, useSelector } from "react-redux";
import { authUser } from "../Redux/Actions/index";

function Login(props) {
  const { register, handleSubmit, errors } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const authenticateUser = (data, e) => {
    e.preventDefault();
    props.authUser({ login: data.login, password: data.password });
  };

  return (
    <Container className="Login_Container">
      <form onSubmit={handleSubmit(authenticateUser)}>
        <div className="Login_Nameplate">Log In To Your Account</div>

        <div className="Login_Box">
          <label>Login</label>
          <input
            className="Form_Input"
            name="login"
            placeholder="login"
            ref={register({ required: true, minLength: 4, maxLength: 22 })}
          />

          {errors.login && errors.login.type === "required" && (
            <p>This is required</p>
          )}
          {errors.login && errors.login.type === "minLength" && (
            <p>Login has to be at least 4 characters long</p>
          )}
          {errors.login && errors.login.type === "maxLength" && (
            <p>Login can only be 22 characters long</p>
          )}
        </div>

        <div className="Login_Password">
          <label>Password</label>
          <input
            className="Form_Input"
            name="password"
            type="password"
            placeholder="password"
            ref={register({ minLength: 8, required: true })}
          />

          {errors.password && errors.password.type === "required" && (
            <p>This is required</p>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <p>Password has to be at least 8 characters long</p>
          )}
        </div>
        <input type="submit" className="Login_Submit" value="Log in!" />
      </form>
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

export default connect(null, { authUser })(Login);
