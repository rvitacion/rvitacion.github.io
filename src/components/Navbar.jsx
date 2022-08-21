import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import profilePic from "../../public/img/profile.jpg";

const NavbarResponsive = () => (
  <Navbar expand="lg" id="sideNav" variant="dark" fixed="top">
    <Navbar.Brand>
      <span className="d-block d-lg-none">
        <span className="text-primary">Ryan</span> Vitacion
      </span>
      <span className="d-none d-lg-block">
        <img
          className="img-fluid img-profile rounded-circle mx-auto mb-2"
          src={profilePic}
          alt="..."
        />
      </span>
      <h3 className="d-none d-lg-block">
        <span className="text-primary">Ryan</span> Vitacion
      </h3>
      <div className="social-icons d-none d-lg-block">
        <a
          className="social-icon"
          href="https://www.linkedin.com/in/rvitacion/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin-in" />
        </a>
        <a
          className="social-icon"
          href="https://github.com/rvitacion?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github" />
        </a>
      </div>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarResponsive" />
    <Navbar.Collapse id="navbarResponsive">
      <Nav className="me-auto">
        <div className="nav-item">
          <Nav.Link href="#home">
            <div className="navbar-icon">
              <i className="fa fa-house" />
            </div>
            Home
          </Nav.Link>
        </div>
        <div className="nav-item">
          <Nav.Link href="#experience">
            <div className="navbar-icon">
              <i className="fa fa-building" />
            </div>
            Experience
          </Nav.Link>
        </div>
        <div className="nav-item">
          <Nav.Link href="#skills">
            <div className="navbar-icon">
              <i className="fa fa-laptop-code" />
            </div>
            Skills
          </Nav.Link>
        </div>
        <div className="nav-item">
          <Nav.Link href="#education">
            <div className="navbar-icon">
              <i className="fa fa-graduation-cap" />
            </div>
            Education
          </Nav.Link>
        </div>
        <div className="nav-item">
          <Nav.Link href="#projects">
            <div className="navbar-icon">
              <i className="fa fa-flask" />
            </div>
            Projects
          </Nav.Link>
        </div>
        <div className="nav-item">
          <Nav.Link href="#awards">
            <div className="navbar-icon">
              <i className="fa fa-trophy" />
            </div>
            Awards
          </Nav.Link>
        </div>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavbarResponsive;
