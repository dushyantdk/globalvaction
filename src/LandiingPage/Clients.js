import React, { Component } from 'react';
import ClientIcon1 from '../img/maketrip.jpg';
import ClientIcon2 from '../img/oyo.jpg';
import ClientIcon3 from '../img/thomas.jpg';
import ClientIcon4 from '../img/yatra.jpg';
import Timesofindia from '../img/timesofindia.jpg';

class Clients extends Component {
  render() {
    return (
        <section className="clients">
            <div className="container">
                <div className="row justify-content-center text-center mb-5">
                    <div className="col-lg-9">
                        <div className="how-we-title">
                            <h2>Our <span>Prestigious</span> Clients</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center text-center mb-5">
                    <div className="col-lg-9">
                        <ul>
                            <li><img src={ClientIcon1} alt="" /></li>
                            <li><img src={ClientIcon2} alt="" /></li>
                            <li><img src={ClientIcon3} alt="" /></li>
                            <li><img src={ClientIcon4} alt="" /></li>
                            <li><img src={Timesofindia} alt="" /></li>
                        </ul>
                    </div>
                </div>
                <div className="row justify-content-center text-center mb-5">
                    <div className="col-lg-6">
                        <p>*The above corporate logos are property of the respective companies and used for representative purpose only.</p>
                    </div>
                </div>
            </div>
        </section>
       );
  }
}  
export default Clients;