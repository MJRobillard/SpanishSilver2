import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Collapse, NavbarToggler } from "reactstrap";

const DemoNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    setScrolled(scrollTop > 0);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize(); // Check initial viewport size

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navStyle = {
    backgroundColor: scrolled ? "rgba(0, 0, 0, 0.6)" : "transparent",
    transition: "background-color 0.3s ease",
    color: "white",
  };

  return (
    <header className="header-global">
      <Navbar fixed="top" style={navStyle} className="navbar-main navbar-light headroom" expand="lg">
        <Container>
          <Link className="navbar-brand mr-lg-5" to="/">
            <img alt="..." src={require("assets/img/brand/Logo.jpg")} />
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto text-white" navbar>
              <Link className="nav-link text-white" to="/landing-page">
                Origin
              </Link>
              <Link className="nav-link text-white" to="/Bibliography-page">
                Economics
              </Link>
              <Link className="nav-link text-white" to="/Econ-page">
                Bibliography
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
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default DemoNavbar;
