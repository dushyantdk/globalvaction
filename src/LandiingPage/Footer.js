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
                            <h4>VISIT US OR CALL US:</h4>
                            <ul>
                                <li className="font-32">Global Tourism & Resorts </li>
                                <li>SCO - 188-190, Sec-34A, Ground Floor, Chandigarh</li>
                                <li>+91 172 401 2779</li>
                                <li>+91 8699 12370-73, 9357 580 005</li>
                                <li>
                                    <Nav.Link href="/">info@exploreholidays.in</Nav.Link>
                                    <Nav.Link href="/">transport@exploreholidays.in</Nav.Link>
                                </li>
                            </ul>
                        </div>
                        <div className="follow-block">
                            <h4>Follow Us On:</h4>
                            <ul>
                                <li><a href="https://www.facebook.com/Global-Tourism-Resorts-108930407321637/"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="https://www.instagram.com/viky_global/"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="https://www.linkedin.com/company/the-global-tourism-resorts"><i class="fab fa-linkedin"></i></a></li>
                                <li><a href="https://twitter.com/VikramK61128786"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="https://www.tripadvisor.in/Attraction_Review-g297596-d20045917-Reviews-GLOBAL_Travels-Chandigarh.html"><i class="fab fa-tripadvisor"></i></a></li>
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