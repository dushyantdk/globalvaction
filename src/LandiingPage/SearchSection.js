import React, { Component } from 'react';
import CarYellow from '../img/car-image.png';
import AddressPickup from '../img/address-pickup.png';
import LongDistance from '../img/long-distance.png';
import Local from '../img/local.png';
import Airport from '../img/airport.png';
import SubmitBtn from '../img/submit-btn.png';
import {Row, Col, Tab, Nav, Form} from 'react-bootstrap'

class SearchSection extends Component {
  render() {
    return (
        <section className="search-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="search-bg">
                    <figure>
                      <img src={CarYellow} alt="CarYellow" />
                    </figure>
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
                              <Form className="search-from">
                                <Form.Control placeholder="From" />
                                <Form.Control placeholder="To" />
                                <Form.Control placeholder="PickUp" />
                                <Form.Control placeholder="DropTo" />
                                <button><img src={SubmitBtn} alt="Submit Button" /></button>
                              </Form>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                              <Form className="search-from">
                                <Form.Control placeholder="From" />
                                <Form.Control placeholder="To" />
                                <Form.Control placeholder="PickUp" />
                                <Form.Control placeholder="DropTo" />
                                <button><img src={SubmitBtn} alt="Submit Button" /></button>
                              </Form>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                              <Form className="search-from">
                                <Form.Control placeholder="From" />
                                <Form.Control placeholder="To" />
                                <Form.Control placeholder="PickUp" />
                                <Form.Control placeholder="DropTo" />
                                <button><img src={SubmitBtn} alt="Submit Button" /></button>
                              </Form>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                              <Form className="search-from">
                                <Form.Control placeholder="From" />
                                <Form.Control placeholder="To" />
                                <Form.Control placeholder="PickUp" />
                                <Form.Control placeholder="DropTo" />
                                <button><img src={SubmitBtn} alt="Submit Button" /></button>
                              </Form>
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