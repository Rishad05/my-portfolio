import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./my-navbar.styles.css";
import Button from "react-bootstrap/Button";

const MyNavbar = () => {
  return (
    <div>
      <Navbar
        fixed="top"
        variant="dark"
        expand="md"
        className="animate-navbar nav-theme justify-content-between"
      >
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects"> Projects</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </div>
        <div>
        <a href="https://drive.google.com/uc?export=download&id=1JDhcOsTz_DIV6Unr_HyAANTsqHVBXjeg" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-warning">
                        My Resume
                      </Button>
                    </a>
        </div>
      </Navbar>
    </div>
    
  );
};

export default MyNavbar;
