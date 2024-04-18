/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import MapWithPointsOfInterest from "./map";
import citations from "./citations";
// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
// index page sections
const workers_dictionary = {
  "Barreteros": "Workers who use bars (Spanish: barreta) to cut ore from the mine face.",
  "Apires": "Workers who carry extracted ore on their backs (Quechua: apay) to the mine entrance and dump it on the leveled platform (cancha).",
  "Pallires": "Workers who pick over ore at the cancha, discarding waste material (Quechua: pallay).",
  "Siquepiches": "Workers responsible for keeping mine passages clear for the apires, gathering and carrying out rubble (a term with a rough meaning in Quechua related to 'backside cleaners').",
  "Pirquires": "Workers responsible for constructing internal support using stonework (Quechua: pirqay) within the mine.",
  "Pongos": "Indian supervisors who direct various specialized workers. The term's origin is linked to native implements (possibly derived from Quechua: punku meaning 'door') and connoted a supervisor by the time of these operations.",
  "Beneficiador (Refiner)": "Role responsible for blending crushed ore with mercury and other reagents in the amalgamation process. This role was usually held by a Spaniard or mestizo."
};
class Bibliography extends React.Component {
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
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-5 shape-default">
                <img
                  alt="..."
                  src={require("assets/img/Origin/Th-AdmiralAndraDoria-1846 (c 1840)2.jpg")}
                  style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
                />

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
                      <h1 className="display-3 text-white">
                        The Economics behind Spanish Silver {" "}
                      </h1>
                      <p className="text-white">
                      Built by Matthew Robillard
                      </p>

                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}

            </section>
            {/* 1st Hero Variation */}
          </div>
          <br></br>
          <section className="section section-sm mt-5 py-lg-md" style={{ marginTop: '20px' }}>
          <br></br>
          <Container>
              <Row className="row-grid align-items-center py-lg-md">
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-default shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div>
                    <h2 className="text-default">Economic Importance of Spanish Silver</h2>
                    <p>
                      The circulation of metallic currency within Spanish America and Brazil was surprisingly limited, despite their status as major silver and gold producers. Historians have debated this scarcity, which can be attributed to several key factors:
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <h6 className="mb-0">Large-Scale Extraction by the Spanish Crown</h6>
                        <p className="mb-0">The Spanish crown extracted vast volumes of silver to finance the administration of its imperial monarchy across the Americas, Europe, and the Philippines.</p>
                      </li>
                      <li className="py-2">
                        <h6 className="mb-0">Merchants' Use of Silver for Imports</h6>
                        <p className="mb-0">Merchants utilized silver to pay for the majority of imports into Spanish America from the sixteenth to the early nineteenth centuries.</p>
                      </li>
                      <li className="py-2">
                        <h6 className="mb-0">International Demand for Silver Pesos</h6>
                        <p className="mb-0">Silver pesos were in demand both as currency and as a commodity on the international market. Other countries relied on Spanish silver as a hard currency due to its recognized value and stability.</p>
                      </li>
                      <li className="py-2">
                        <h6 className="mb-0">Merchant Bankers' Role in Silver Arbitrage</h6>
                        <p className="mb-0">Merchant bankers engaged in international arbitrage contributed to the demand for silver and its limited circulation within Spanish America and Brazil.</p>
                      </li>
                      <li className="py-2">
                        <h6 className="mb-0">Demand Among Various Groups</h6>
                        <p className="mb-0">High-quality (almost pure) Spanish coins, such as the silver real, were highly sought after by merchants involved in long-distance trade, international merchant bankers engaged in arbitrage, states requiring precious metals for coinage and payment, and producers of commodities with high international demand.</p>
                      </li>
                      <li className="py-2">
                        <h6 className="mb-0">Success of the Silver Peso as Universal Money</h6>
                        <p className="mb-0">The success of the silver peso as universal money can be attributed to its quality and stability in value, making it a preferred monetary commodity in the early modern period. Merchants valued coins like the silver peso for their fineness, standardized weight, and reliability in monetary circulation.</p>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col className="order-md-2" md="6">
                  <img
                    alt="Spanish Silver"
                    className="img-fluid-default floating"
                    src={require("assets/img/Origin/SpanishSilver.png")}
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                  <img
                    alt="Spanish Silver"
                    className="img-fluid-default floating"
                    src={require("assets/img/Origin/SpanishSilver2.png")}
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </Col>
              </Row>
            </Container>
            <Container>
              <Row className="row-grid align-items-center py-lg-md">
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-default shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div>
                    <h2 className="text-default">Spanish Treasure Fleet</h2>
                    <p>To promote economic trade, the Spanish Treasure Fleet operated as a significant maritime entity, especially for transporting Spanish Silver.</p>
                    <p>Notebly, the Sevilla_XVI_cent as seen in the painting</p>

                    <h3> Casa de Contratación</h3>
                    <p>Established in 1503 by the Spanish Crown, was a government agency based in Seville, Spain. Its primary purpose was to oversee and regulate Spain's overseas exploration, trade, and colonization during the Age of Discovery.</p>
                    <p>
                      The circulation of metallic currency within Spanish America and Brazil was surprisingly limited, despite their status as major silver and gold producers. Historians have debated this scarcity, which can be attributed to several key factors:
                    </p>
                    <h3> </h3>
                  </div>
                </Col>
                <Col className="order-md-2" md="6">
                  <img
                    alt="Spanish Silver"
                    className="img-fluid-default floating"
                    src={require("assets/img/Origin/Sevilla_XVI_cent.jpg")}
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>

                  <img
                    alt="Spanish Silver"
                    className="img-fluid-default floating"
                    src={require("assets/img/Origin/16th_century_Portuguese_Spanish_trade_routes.png")}
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Bibliography;
