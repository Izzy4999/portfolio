import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io";
import "../App.css";

function Navigation() {
  return (
    <div
      className="d-flex justify-content-between mt-4 sticky-top"
      style={{ backgroundColor: "white" }}
    >
      <Navbar style={{ backgroundColor: "white" }} expand="lg">
        <Container fluid>
          <Navbar.Brand className="logo_title" href="/">
            Favour Taiwo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/skills" className="nav-link">
                What I Do
              </NavLink>
              <NavLink to="/education" className="nav-link">
                Education
              </NavLink>
              <NavLink to="/experience" className="nav-link">
                Experience
              </NavLink>
              <NavLink to="/projects" className="nav-link">
                Projects
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="d-flex ms-auto flex-nowrap d-none d-lg-block mt-4">
        <a
          href="https://www.facebook.com/favourisrael.taiwo"
          target="blank"
          className="me-2"
        >
          <IoLogoFacebook style={{ color: "aqua", fontSize: "30px" }} />
        </a>
        <a
          href="https://www.instagram.com/taiwofavourisrael/?igshid=YzgyMTM2MGM%3D"
          target="blank"
          className="me-2"
        >
          <IoLogoInstagram style={{ color: "aqua", fontSize: "30px" }} />
        </a>
        <a href="https://github.com/Izzy4999" target="blank" className="me-2">
          <IoLogoGithub style={{ color: "aqua", fontSize: "30px" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/favour-taiwo-8b9b5a200"
          className="me-2"
        >
          <IoLogoLinkedin style={{ color: "aqua", fontSize: "30px" }} />
        </a>
        <a href="https://twitter.com/GiyuRengoku?s=09" className="me-2">
          <IoLogoTwitter style={{ color: "aqua", fontSize: "30px" }} />
        </a>
      </div>
    </div>
  );
}

export default Navigation;
