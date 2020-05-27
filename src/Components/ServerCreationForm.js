import React, { useRef, useEffect, useState, useSelector } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "../Styles/ServerCreationForm.css";
import { useForm } from "react-hook-form";
import { connect, useDispatch } from "react-redux";
import { HIDE_FORM } from "../Redux/Actions/types";

//TODO: FIX BACKGROUND BLEEDING ON ICON PREVIEW

function ServerCreationForm() {
  const { register, watch, handleSubmit, errors } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const canvasRef = useRef(null);

  const [uploadedImage, setUploadedImg] = useState(null);

  const uploadImage = (e) => {
    e.preventDefault();
    setUploadedImg(URL.createObjectURL(e.target.files[0]));
    console.log(e.target.files[0]);
  };

  const dispatch = useDispatch();

  let image = new Image();

  useEffect(() => {
    image.src = uploadedImage;
  }, [uploadedImage]);

  return (
    <Container className="Server_Creation_Container" fluid>
      <Row className="Server_Creation_Row">
        <Col xs={3}></Col>
        <Col xs={6}>
          <div className="Server_Creation_Form">
            <div
              className="Cancel_Button"
              onClick={() => {
                dispatch({ type: HIDE_FORM });
              }}
            >
              X
            </div>
            <form id="myAwesomeForm" method="post">
              <label>Server name</label>
              <input type="text" value="Choose name of your new server" />
              <label>Short description</label>
              <input
                type="text"
                value="Describe your server in less than 40 characters"
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
          </div>
        </Col>
        <Col xs={3}></Col>
      </Row>
    </Container>
  );
}

export default connect()(ServerCreationForm);
