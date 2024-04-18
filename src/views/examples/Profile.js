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
class Landing extends React.Component {
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
              <Row className="row-grid align-items-center">
              <h3>Spanish Treasure Fleet</h3>
                <p>
                  According to Blakewell's book, "Miners of the Red Mountain," the Spanish had somewhat specialized worker roles. In Potosi, the forced labor system imposed by the Spanish colonial authorities was known as the "mita" system. Under this system, indigenous people were required to perform labor in the mines, often enduring harsh conditions and exploitation.
                </p>
             {Object.entries(workers_dictionary).map(([workerType, definition], index) => (
                  <React.Fragment key={index}>
                    <Col className={index % 2 === 0 ? "order-md-1" : "order-md-2"} md="6">
                      <div className="pr-md-5">
                        </div>
                        <h4 className="text-default">{workerType}</h4>
                        <p>{definition}</p>
                    </Col>
                  </React.Fragment>
                ))}
              </Row>
            </Container>
          </section>
          <Container>
            <Row>
              <Col>
                <h3>Spanish Mints in America</h3>
                <p>Blue indicates short term, red indicates long term</p>
                <p>Hover over a point to get more information</p>
                <p>Mint locatino informatino from Topik et al. Silver to Cocaine 20.</p>
                <p> Data Source: Alejandro de Humboldt, Ensayo político sobre el reino de la Nueva España (Mexico City: UNAM, IggI; original edition, Paris I8II).</p>

                <MapWithPointsOfInterest />
                
              </Col>
            </Row>
          </Container>
          <section className="section bg-secondary">
            <Container>
            <div class="container">
              <div class="row">
                <div class="col-lg-4 mb-4">
                  <div class="card bg-white shadow border-0">
                    <CardImg
                      alt="Pillar Type"
                      src={require("assets/img/Origin/milledbust_small.jpg")}                    
                      top
                    />
                    <div class="card-body">
                      <h5 class="text-default">Pillar Type</h5>
                      <p>
                        First Spanish colonial silver coin design.
                        Struck at Mexico, Santo Domingo, and Lima mints (1536-1572).
                        Features pillars on one side and a shield with lions and castles on the other.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 mb-4">
                  <div class="card bg-white shadow border-0">
                    <CardImg
                      alt="Shield Type"
                      src={require("assets/img/Origin/shield_small.jpg")}                    
                      top
                    />
                    <div class="card-body">
                      <h5 class="text-default">Shield Type</h5>
                      <p>
                        Second Spanish colonial silver coin design.
                        Struck at various mints (Mexico, Santo Domingo, Lima, etc.) from 1572 to 1734.
                        Features a crowned shield on one side and a cross with lions and castles on the other.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 mb-4">
                  <div class="card bg-white shadow border-0">
                    <CardImg
                      alt="Pillars and Waves Type"
                      src={require("assets/img/Origin/pillar_small.jpg")}                    

                      top
                    />
                    <div class="card-body">
                      <h5 class="text-default">Pillars and Waves Type</h5>
                      <p>
                        Third Spanish colonial silver coin design.
                        Struck at Bogotá, Potosi, Cartagena, Lima mints (1651-1773).
                        Features pillars with waves on one side and a cross with lions and castles on the other.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 mb-4">
                  <div class="card bg-white shadow border-0">
                    <CardImg
                      alt="Milled Pillar Type"
                      src={require("assets/img/Origin/milledpillar_small.jpg")}                    
                      top
                    />
                    <div class="card-body">
                      <h5 class="text-default">Milled Pillar Type</h5>
                      <p>
                        Fourth Spanish colonial silver coin design.
                        Struck at Mexico, Lima, Bogotá, etc. (1732-1772).
                        Machine struck with pillars and waves separated by globes on one side and a shield with lions, castles, and fleurs-de-lis on the other.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 mb-4">
                  <div class="card bg-white shadow border-0">
                    <CardImg
                      alt="Milled Bust Type"
                      src={require("assets/img/Origin/milledbust_small.jpg")}                    
                      top
                    />
                    <div class="card-body">
                      <h5 class="text-default">Milled Bust Type</h5>
                      <p>
                        Fifth and final Spanish colonial silver coin design.
                        Struck at various mints (Mexico, Lima, Bogotá, etc.) from 1771 to 1825.
                        Features the bust of the King on one side and pillars with a shield on the other.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            </Container>
          </section>
          
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
