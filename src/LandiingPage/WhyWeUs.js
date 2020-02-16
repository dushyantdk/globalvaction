import React, { Component } from 'react';
import ManImage from '../img/man.png';
import WhyIcon1 from '../img/why-icon-1.png';
import WhyIcon2 from '../img/why-icon-2.png';
import WhyIcon3 from '../img/why-icon-3.png';
import WhyIcon4 from '../img/why-icon-4.png';
import { Nav} from 'react-bootstrap';
import Scrollchor from 'react-scrollchor';

class WhyWeUs extends Component {
  render() {
    return (
        <section className="why-we-us">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="why-title">
                            <h2>Why We <span>Are</span></h2>
                            <p>We are one of the few Indian Travel company, who own and operate their own fleet of 150+ automobiles, all of which are less than two years old, all of which are driven by full time company employees, uniformed chauffeurs, who speak and understand workable English. Over the years, we have developed excellent working relationships with top Online Trip brands of India.</p>
                        </div> 
                        <div className="row mt-4">
                            <div className="col-lg-3 col-md-6">
                                <div className="wh-block">
                                    <div className="wh-block-img">
                                        <img src={WhyIcon1} alt="WhyIcon1" />
                                    </div>
                                    <h4>1 Million</h4>
                                    <p>Kilometres CLOCKED EVERY MONTH</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="wh-block">
                                    <div className="wh-block-img">
                                        <img src={WhyIcon2} alt="WhyIcon1" />
                                    </div>
                                    <h4>+100 Cities</h4>
                                    <p>Covered with our clients for Enjoyable trips</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="wh-block">
                                    <div className="wh-block-img">
                                        <img src={WhyIcon3} alt="WhyIcon1" />
                                    </div>
                                    <h4>70 YEARS</h4>
                                    <p>Experience in chauffeuring tough terrains</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="wh-block">
                                    <div className="wh-block-img">
                                        <img src={WhyIcon4} alt="WhyIcon1" />
                                    </div>
                                    <h4>+150 CABS</h4>
                                    <p>Spotless vehicles in safe hands and so are you</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-12">
                                <Scrollchor className="explore-now" to="#footer">Explore Now!</Scrollchor>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="why-img">
                            <img src={ManImage} alt="Why" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}  
export default WhyWeUs;