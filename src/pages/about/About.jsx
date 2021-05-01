import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./About.css";
import Profile from "../../images/Group 33080.png";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3  " style={{fontSize:'50px',fontWeight:'bold'}}>ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end h-70" alt="profile" src={Profile} />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong className="color">&nbsp;Iftakher Uddin Risahd</strong>
                <br />A Web Developer with a demonstrated history of working in the information technology and services industry. Skilled in Bootstrap, Cascading Style Sheets (CSS), JavaScript, MySQL, MongoDB,Node Js, Express Js, Material UI and HTML5.
                <br/>
                <ul>
                  <li>I want to be Professional Full Stack Developer, it's my dream.</li>
                  <li>I love to learn new tech and new languages.</li>
                  <li>I am a passionate and hard-worker.</li>
                </ul>
                <br />
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-info">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/Rishad05" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/iftakher-uddin-rishad/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-danger">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
