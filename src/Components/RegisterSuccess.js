import React from "react";
import { Container, Spinner } from "react-bootstrap";

import "../Styles/RegisterSuccess.css";

function RegisterSuccess() {
  return (
    <Container className="Register_Success" fluid>
      <div className="Register_Success-Information">
        Your account has been successfuly registered. You will be redirected to
        login page in a few moments...
      </div>
      <div>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    </Container>
  );
}

export default RegisterSuccess;
