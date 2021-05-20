import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import Button from "react-bootstrap/Button";
import blog1 from "../../images/blog1.jpeg";
import blog2 from "../../images/blog2.png";
import blog3 from "../../images/blog3.png";
import blog4 from "../../images/blog4.jpg";
import './Blog.css'

const Blog = () => {
  return (
    <div id="blogs" >
      <h1 className="pt-3 text-center font-details-b pb-3">Blogs</h1>
      <Jumbotron className="jumbo-style">
        <Container>

          <div className="row">
            <div className="col-md-6 py-3">
              <Tilt options={{ max: 5 }}>
                <Card className=" bg-shadow" style={{ width: '30rem', height:'35rem' }}>
                  <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                    <Card.Img variant="top" className="img-resize  img-fluid img-thumbnail" src={blog1 }  alt="" />
                  </Card.Header>
                  <Card.Body className="d-flex justify-content-center flex-column">
                    <div>
                      <Card.Title className="text-center text-dark fw-bolder">Learn Some Important Topic Of JavaScript</Card.Title>
                    </div>
                    <div>
                      <Card.Text className=" ">
                        <p>
                        charAt() is a method that returns the character from the specified index. If we want to find the position of character on that time we use this method.</p>

                        <a href="https://iu-rishad5.medium.com/learn-some-important-topic-of-javascript-859131cf0bb0" target="_blank" alt='javascript'>
                          <Button className="m-2" variant="outline-info">
                            Read More
                      </Button>
                        </a>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Tilt>
            </div>

            <div className="col-md-6 py-3">
              <Tilt options={{ max: 5 }}>
                <Card className=" bg-shadow" style={{ width: '30rem', height:'35rem' }}>
                  <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                    <Card.Img variant="top" className="img-resize  img-fluid img-thumbnail" src={blog2} alt="" />
                  </Card.Header>
                  <Card.Body className="d-flex justify-content-center flex-column">
                    <div>
                      <Card.Title className="text-center fw-bolder">Let’s learn more important topic about JavaScript</Card.Title>
                    </div>
                    <div>
                      <Card.Text className="">
                        <p>
                        Basically in JavaScript there are two value one is Primitive value another one is Non-primitive value. Here we are going to know about Primitive value. A primitive value..
                        </p>

                        <a href="https://iu-rishad5.medium.com/lets-learn-more-important-topic-about-javascript-82ae19e7dfbf" target="_blank" alt='javascript'>
                          <Button className="m-2" variant="outline-info">
                            Read More
                      </Button>
                        </a>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Tilt>
            </div>

            <div className="col-md-6 py-3">
              <Tilt options={{ max: 20 }}>
                <Card className=" bg-shadow" style={{ width: '30rem', height:'35rem' }}>
                  <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                    <Card.Img variant="top" className="img-resize img-fluid img-thumbnail" src={blog3} alt="" />
                  </Card.Header>
                  <Card.Body className="d-flex justify-content-center flex-column">
                    <div>
                      <Card.Title className="text-center fw-bolder">10 Importance things about React</Card.Title>
                    </div>
                    <div>
                      <Card.Text className=" ">
                        <p>
                        In basic terms, the Real DOM describes the user interface of every program. When we make a modification to our application’s UI, the Real DOM is ...
                          </p>

                        <a href="https://iu-rishad5.medium.com/10-importance-things-about-react-570999cb6c49" target="_blank" alt='javascript'>
                          <Button className="m-2" variant="outline-info">
                            Read More
                      </Button>
                        </a>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Tilt>
            </div>


            <div className="col-md-6 py-3">
              <Tilt options={{ max: 20 }}>
                <Card className=" bg-shadow" style={{ width: '30rem', height:'35rem' }}>
                  <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                    <Card.Img variant="top" className="img-resize img-fluid img-thumbnail" src={blog4} alt="" />
                  </Card.Header>
                  <Card.Body className="d-flex justify-content-center flex-column">
                    <div>
                      <Card.Title className="text-center fw-bolder">10 Important interview question in JavaScript</Card.Title>
                    </div>
                    <div>
                      <Card.Text className=" ">
                        <p>
                        The main difference between double equal and triple equal is double equal (==) basically check the value only on the other hand triple equal (===) check the value and type both</p>

                          <a href="https://iu-rishad5.medium.com/10-important-interview-question-in-javascript-c84a97a215ad" target="_blank" alt='javascript'>
                          <Button className="m-2" variant="outline-info">
                            Read More
                      </Button>
                        </a>


                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Tilt>
            </div>


          </div>

        </Container>
      </Jumbotron>
    </div>
  );
};

export default Blog;
