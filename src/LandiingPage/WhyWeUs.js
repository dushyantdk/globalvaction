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
                            <p>Lorem Ipsum passages, and more recently with desktop publishing software like aldus pageMaker including versions of all the Lorem Ipsum generators on thet Internet tends to repeat predefined chunks as necessary, making this an web evolved over the years, sometimes by accident.</p>
                        </div> 
                        <div className="row mt-4">
                            <div className="col-lg-3 col-md-6">
                                <div className="wh-block">
                                    <div className="wh-block-img">
                                        <img src={WhyIcon1} alt="WhyIcon1" />
                                    </div>
                                    <h4>+265 Million</h4>
                                    <p>The fixed fare is set in every taximeter as the main tariff</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="wh-block">
                                    <div className="wh-block-img">
                                        <img src={WhyIcon2} alt="WhyIcon1" />
                                    </div>
                                    <h4>+265 Million</h4>
                                    <p>The fixed fare is set in every taximeter as the main tariff</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="wh-block">
                                    <div className="wh-block-img">
                                        <img src={WhyIcon3} alt="WhyIcon1" />
                                    </div>
                                    <h4>+265 Million</h4>
                                    <p>The fixed fare is set in every taximeter as the main tariff</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="wh-block">
                                    <div className="wh-block-img">
                                        <img src={WhyIcon4} alt="WhyIcon1" />
                                    </div>
                                    <h4>+265 Million</h4>
                                    <p>The fixed fare is set in every taximeter as the main tariff</p>
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