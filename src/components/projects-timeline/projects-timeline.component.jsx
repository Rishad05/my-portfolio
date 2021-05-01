import React from "react";
import Button from "react-bootstrap/Button";

// projects
import kids from "../../images/kids.PNG";
import grocery from "../../images/grocery.PNG"
import dragon from "../../images/dragon.PNG"
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";



import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">

      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>


      <div className="row">
        <div className="col-md-12">

      


      <div className=" d-flex justify-content-between flex-column mt-1 bg-light p-3 m-1">

        <Accordion>
          <Card >
            <img  src={kids} alt="" />
            <Accordion.Toggle
              as={Card.Header}
              eventKey="0"
              className="p-2 text-center accordian-main"
            >
              PROJECT DETAILS
                    </Accordion.Toggle>

            <Accordion.Collapse eventKey="0" className="text-left" >
              <Card.Body>
                <strong>Title:</strong> KIDS CARE
                        <hr />
                <strong>Features:</strong>
                <ul className="list-styles pt-1">
                  <li>This is an Kids Care Enroll Class Website. Here you can Enroll different Classes of Kids</li>
                  <li>You can easily select your desire classes to add to your Enroll Class and see the Enroll Class List as well</li>
                  <li>You have to have a account in order to Enroll any classes.</li>
                  <li>Admin and normal User Intrerface of Dashboard is Different.</li>
                </ul>
                <hr />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

        <div className="d-flex justify-content-between flex-nowrap text-center">
          <Button
            href="https://day-care05.web.app/"
            target="_blank"
          >
            SEE LIVE
                </Button>
          <Button
            href="https://github.com/Rishad05/KIDS-CARE-client"
            target="_blank"
          >
            Client Code
                </Button>
          <Button
            href="https://github.com/Rishad05/KIDS-CARE-server"
            target="_blank"
          >
            Server Code
                </Button>
        </div>
      </div>
    </div>




      <div className="col-md-6">


      <div className=" d-flex justify-content-between flex-column mt-1 bg-light p-3 m-1">

        <Accordion>
          <Card>
            <img className="h-80" src={grocery} alt="" />
            <Accordion.Toggle
              as={Card.Header}
              eventKey="2"
              className="p-2 text-center accordian-main"
            >
              PROJECT DETAILS
                  </Accordion.Toggle>

            <Accordion.Collapse eventKey="2" className="text-left" >
              <Card.Body>
                <strong>Title:</strong> Online Grocery Shop
                      <hr />
                <strong>Features:</strong>
                <ul className="list-styles pt-1">
                  <li>This is an E-Commerce site. Here you can buy different type of grocery products.</li>
                  <li>You can easily select your desire products to add to your cart and see the order preview.</li>
                  <li>You have to have a account in order to buy any products.</li>
                  <li>Here also have user and admin login..</li>
                </ul>
                <hr />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

        <div className="d-flex justify-content-between flex-nowrap text-center">
          <Button
            href="https://online-grocery-shop05.web.app/"
            target="_blank"
          >
            SEE LIVE
              </Button>
          <Button
            href="https://github.com/Rishad05/online-grocery-shop-client"
            target="_blank"
          >
           Client Code
              </Button>
          <Button
            href="https://github.com/Rishad05/online-grocery-shop-server"
            target="_blank"
          >
         Server Code
              </Button>
        </div>
      </div>

      </div>


      <div className="col-md-6">


<div className=" d-flex justify-content-between flex-column mt-1 bg-light p-3 m-1">

  <Accordion>
    <Card>
      <img className="h-80" src={dragon} alt="" />
      <Accordion.Toggle
        as={Card.Header}
        eventKey="2"
        className="p-2 text-center accordian-main"
      >
        PROJECT DETAILS
            </Accordion.Toggle>

      <Accordion.Collapse eventKey="2" className="text-left" >
        <Card.Body>
          <strong>Title:</strong> Dragon Ryders
                <hr />
          <strong>Features:</strong>
          <ul className="list-styles pt-1">
            <li> This is a transportation booking website.</li>
            <li>You can easily select your desire ride.</li>
            <li>You have to have a account in order to book any ride.</li>
            <li>There is a map where you can easily understand your position and your nearby rides.</li>
          </ul>
          <hr />
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>

  <div className="d-flex justify-content-between flex-nowrap text-center">
    <Button
      href="https://dragon-ryders.web.app/"
      target="_blank"
    >
      SEE LIVE
        </Button>
    <Button
      href="https://github.com/Rishad05/Dragon-Ryders"
      target="_blank"
    >
     Source Code
        </Button>
  </div>
</div>

</div>

</div>
</div>





    
  );
};

export default TimeLine;
