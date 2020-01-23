import React, { Component } from 'react';
import LogoIcon from './img/logo.png';
import { Nav} from 'react-bootstrap';

class Navigation extends Component {
  render() {
    return (
        <section className="header-block">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-between">
                        <Nav.Link className="logo" href="/"><img src={LogoIcon} alt="logo" /></Nav.Link>
                        <Nav.Link className="contact-us" href="/">Contact Us</Nav.Link>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}  
export default Navigation;