import React, { Component } from 'react';
import { Nav} from 'react-bootstrap';
import ContactFrom from './ContactFrom';

class Footer extends Component {
  render() {
    return (
        <footer id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="address-title">
                            <h1>
                                Let’s Get in
                                <span>Touch</span>
                            </h1>
                        </div>
                        <div className="address-block">
                            <h4>Visit our Office:</h4>
                            <ul>
                                <li>Global Discover Vactions, SCO -129-130, Sec-34C, CHD</li>
                                <li>345-677-554</li>
                                <li>323-678-567</li>
                                <li><Nav.Link href="/">info@globalvaction.com</Nav.Link></li>
                            </ul>
                        </div>
                        <div className="follow-block">
                            <h4>Follow Us On:</h4>
                            <ul>
                                <li><a href="javascripitvoid(0);"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="javascripitvoid(0);"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="javascripitvoid(0);"><i class="fab fa-google-plus-g"></i></a></li>
                                <li><a href="javascripitvoid(0);"><i class="fab fa-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <ContactFrom/>
                    </div>
                </div>
            </div>
        </footer>
    );
  }
}  
export default Footer;