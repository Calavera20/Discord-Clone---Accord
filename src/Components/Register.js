import React from "react";
import { Container } from "react-bootstrap";
import "../Styles/Register.css";
import { useForm } from "react-hook-form";
import axios from "axios";

function Register() {
  const { register, watch, handleSubmit, errors } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
  });
  //TODO: add check if user with that name already exists in DB
  const onSubmit = (data, e) => {
    const newUser = {
      login: data.login,
      password: data.password,
    };
    console.log(newUser);

    axios.post("http://localhost:5000/users/add", newUser).then((res) => {
      //you can set state here for success - if true display popup and send to login page
      console.log(res.data);
      e.target.reset();
    });
  };

  return (
    <Container className="Register_Container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="Register_Nameplate">Register new account</div>
        <div className="Register_Login">
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
        <div className="Register_Password">
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
        <div className="Register_Confirmation">
          <label>Confirm Password</label>
          <input
            className="Form_Input"
            name="confirmPassword"
            type="password"
            placeholder="password"
            ref={register({
              required: true,
              minLength: 8,
              validate: (value) => {
                return value === watch("password");
              },
            })}
          />
          {errors.confirmPassword &&
            errors.confirmPassword.type === "required" && (
              <p>This is required</p>
            )}

          {errors.confirmPassword &&
            errors.confirmPassword.type === "validate" && (
              <p>Passwords don't match</p>
            )}
        </div>
        <hr />
        <input
          type="submit"
          className="Register_Submit"
          value="Register new account"
        />
      </form>
    </Container>
  );
}

export default Register;
