import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "reactstrap";

class DemoNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 0 && !this.state.scrolled) {
      this.setState({ scrolled: true });
    } else if (scrollTop === 0 && this.state.scrolled) {
      this.setState({ scrolled: false });
    }
  }

  render() {
    const navStyle = {
      backgroundColor: this.state.scrolled ? "rgba(0, 0, 0, 0.6)" : "transparent",
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
            <button className="navbar-toggler" id="navbar_global">
              <span className="navbar-toggler-icon" />
            </button>
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
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default DemoNavbar;
