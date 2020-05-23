import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/UserSettings.css";

function About() {
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
    <Container fluid className="About_Page ">
      <Row>
        <Col xs={2}></Col>
        <Col className="Content_Column">
          <div className="Content_Logo">logo</div>
          <div className="Content_About">
            <form id="myAwesomeForm" method="post">
              <input
                type="file"
                accept="image/gif, image/jpeg, image/png"
                id="filename"
                name="filename"
                onChange={uploadImage}
              />
              <input type="submit" id="submitButton" name="submitButton" />
            </form>
            <div>
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

                  var MAX_WIDTH = 100;
                  var MAX_HEIGHT = 100;
                  var width = image.width;
                  var height = image.height;

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
            </div>
          </div>
          <div className="Content_Contact">contact</div>
        </Col>
        <Col xs={2}></Col>
      </Row>
    </Container>
  );
}

export default About;
