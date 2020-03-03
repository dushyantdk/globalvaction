import React, { Component } from 'react';
import AddressPickup from '../img/address-pickup.png';
import LongDistance from '../img/long-distance.png';
import Local from '../img/local.png';
import Airport from '../img/airport.png';
import {Row, Col, Tab, Nav} from 'react-bootstrap';
import SearchForm from './SearchForm';


class SearchSection extends Component {
  render() {
    return (
        <section className="search-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="search-bg">
                    {/* <figure>
                      <img src={CarYellow} alt="CarYellow" />
                    </figure> */}
                    <div className="form-block">
                    <Tab.Container defaultActiveKey="first">
                      <Row>
                        <Col sm={12}>
                          <Nav variant="pills" className="d-flex justify-content-center">
                            <Nav.Item>
                              <Nav.Link eventKey="first"><img src={AddressPickup} alt="local" /></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="second"><img src={LongDistance} alt="local" /></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="third"><img src={Local} alt="local" /></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="fourth"><img src={Airport} alt="local" /></Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </Col>
                        <Col sm={12}>
                          <Tab.Content>
                            <Tab.Pane eventKey="first">
                              <SearchForm/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <SearchForm/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            <SearchForm/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                            <SearchForm/>
                            </Tab.Pane>
                          </Tab.Content>
                        </Col>
                      </Row>
                    </Tab.Container>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
    );
  }
}  
export default SearchSection;