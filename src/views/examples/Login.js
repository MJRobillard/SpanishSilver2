import React from "react";
import { Container, Row, Col } from "reactstrap";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import citations from "./citations";

class Login extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-5 shape-default">
              <img alt="..." src={require("assets/img/brand/argon-react-white.png")} />

                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white bold">
                        Bibliography{" "}
                      </h1>
                      <p className="text-white">
                        Built by Matthew Robillard
                      </p>
                    </Col>
                  </Row>
                </div>
              </Container>
            </section>
          </div>
          <section className="section section-sm mt-5 py-lg-md" style={{ marginTop: '20px' }}>
            <Container>
            <h3>Works Cited</h3>

              <Row className="row-grid align-items-center">
                <br>

                </br>
                {Object.entries(citations[0]).map(([category, sources]) => (
                  <React.Fragment key={category}>
                    <h4>{category}</h4>
                    <ul>
                      {Object.entries(sources).map(([sourceName, citation]) => (
                        <li key={sourceName}>{citation}</li>
                      ))}
                    </ul>
                  </React.Fragment>
                ))}
              </Row>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Login;
