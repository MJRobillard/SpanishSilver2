import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "reactstrap";

class DemoNavbar extends React.Component {
  render() {

    return (
      <header className="header-global">
        <Navbar className="navbar-main navbar-transparent navbar-light headroom" expand="lg">
          <Container>
            <Link className="navbar-brand mr-lg-5" to="/">
              <img alt="..." src={require("assets/img/brand/argon-react-white.png")} />
            </Link>
            <button className="navbar-toggler" id="navbar_global">
              <span className="navbar-toggler-icon" />
            </button>
            <Nav className="ml-auto" navbar>
              <Link className="nav-link" to="/landing-page">
                Origin
              </Link>
              <Link className="nav-link" to="/profile-page">
                Economics
              </Link>
              <Link className="nav-link" to="/login-page">
                Gallery
              </Link>
              <Link className="nav-link" to="/register-page">
                Legacy
              </Link>
              <a
                className="nav-link nav-link-icon"
                href="https://www.instagram.com/themattiepattie"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram" />
                <span className="nav-link-inner--text ml-2"></span>
              </a>
              <a
                className="nav-link nav-link-icon"
                href="https://github.com/mjrobillard"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github" />
                <span className="nav-link-inner--text ml-2"></span>
              </a>
            </Nav>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default DemoNavbar;
