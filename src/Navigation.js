import React, { Component } from 'react';
import LogoIcon from './img/logo.png';
import { Nav} from 'react-bootstrap';
import Scrollchor from 'react-scrollchor';

class Navigation extends Component {
  render() {
    return (
        <section className="header-block">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-between">
                        <Nav.Link className="logo" href="/"><img src={LogoIcon} alt="logo" /></Nav.Link>
                        <Scrollchor className="contact-us" to="#footer">Contact Us</Scrollchor>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}  
export default Navigation;