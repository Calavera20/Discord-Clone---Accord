import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/UserSettings.css";
import { useForm } from "react-hook-form";

function About() {
  const { register, watch, handleSubmit, errors } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const [changePassword, setChangePassword] = useState(false);

  const canvasRef = useRef(null);

  const [uploadedImage, setUploadedImg] = useState(null);

  const uploadImage = (e) => {
    e.preventDefault();
    setUploadedImg(URL.createObjectURL(e.target.files[0]));
    console.log(e.target.files[0]);
  };

  let image = new Image();

  useEffect(() => {
    image.src = uploadedImage;
  }, [uploadedImage]);

  return (
    <Container fluid className="Settings_Page ">
      <Row className="Settings_Row">
        <Col xs={2}></Col>
        <Col className="Settings_Container">
          <div className="Settings_Form_Container">
            <h1>Settings</h1>
            <form id="myAwesomeForm" method="post">
              <label>Login</label>
              <input
                type="text"
                value="Grayed out login to show its not for change"
                readonly="readonly"
              />
              <label>Change icon</label>
              <input
                type="file"
                accept="image/gif, image/jpeg, image/png"
                id="filename"
                name="filename"
                onChange={uploadImage}
              />
              <label>Click below for icon preview</label>
              <canvas
                className={`Image_Preview ${
                  uploadedImage === null ? "hidden" : ""
                }`}
                ref={canvasRef}
                width={100}
                height={100}
                onClick={(e) => {
                  const canvas = canvasRef.current;
                  const ctx = canvas.getContext("2d");

                  ctx.drawImage(image, 0, 0);

                  let MAX_WIDTH = 100;
                  let MAX_HEIGHT = 100;
                  let width = image.width;
                  let height = image.height;

                  if (width > height) {
                    if (width > MAX_WIDTH) {
                      height *= MAX_WIDTH / width;
                      width = MAX_WIDTH;
                    }
                  } else {
                    if (height > MAX_HEIGHT) {
                      width *= MAX_HEIGHT / height;
                      height = MAX_HEIGHT;
                    }
                  }
                  canvas.width = width;
                  canvas.height = height;

                  ctx.drawImage(image, 0, 0, width, height);
                }}
              />
              <input
                type="button"
                value="change password"
                onClick={(e) => {
                  e.preventDefault();
                  setChangePassword(true);
                }}
              />

              {changePassword === true && [
                <label>New password</label>,
                <input
                  type="password"
                  placeholder="new password"
                  name="newPassword"
                  ref={register({
                    required: () => {
                      return changePassword === true;
                    },
                    minLength: 4,
                    maxLength: 22,
                  })}
                />,
                <label>Confirm new password</label>,
                <input
                  type="password"
                  placeholder="confirm new password"
                  name="newPasswordConfirmation"
                  ref={register({
                    required: () => {
                      return changePassword === true;
                    },
                    minLength: 8,
                    validate: (value) => {
                      return value === watch("newPassword");
                    },
                  })}
                />,
              ]}
              <label>Confirm with your current password</label>
              <input
                type="password"
                placeholder="old password to confirm changes"
                ref={register({ required: true, minLength: 8, maxLength: 22 })}
              />
              <input
                type="submit"
                id="submitButton"
                name="submitButton"
                value="Save changes"
              />
            </form>
            <div></div>
          </div>
        </Col>
        <Col xs={2}></Col>
      </Row>
    </Container>
  );
}

export default About;
