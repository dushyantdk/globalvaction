import React, { Component } from 'react';
import FixedPrice from '../img/fixed-price.png';
import NoFee from '../img/no-fee.png';
import Pleasure from '../img/pleasure.png';
import Nationwide from '../img/nationwide.png';
import SupportIcon from '../img/support.png';
import BonusForRide from '../img/bonuse--for-ride.png';
import SafeDrive from '../img/safe-drive.png';
import GpsIcon from '../img/gps.png';

class OurBenifits extends Component {
  render() {
    return (
        <section className="our-benefits sec-pd">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="section-title">
                {/* <h3>MAIN FEATURES</h3> */}
                <h2>NOTABLE FEATURES</h2>
              </div>
            </div>
          </div>	
          <div className="row">
            <div className="col-md-4">
              <div className="benefits-colm">
                <img src={FixedPrice} alt="Fixed Price" />	
                <h3>Spirited Rates</h3>	
                <p>BEST PRICE GUARANTEE</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="benefits-colm">
                <img src={SafeDrive} alt="No Fee" />	
                <h3>Safe Drive</h3>	
                <p>All cars equipped with safety features i.e. Airbags / ABS / EBD</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="benefits-colm">
                <img src={GpsIcon} alt="100% Pleasure" />	
                <h3>GPS Monitoring</h3>	
                <p>24X7 in our office by dedicated staff for SAFETY of guests</p>
              </div>
            </div>
          </div>		
          <div className="row">
            <div className="col-md-4">
              <div className="benefits-colm">
                <img src={Nationwide} alt="Nationwide" />	
                <h3>Professional</h3>	
                <p>Courteous, well mannered & uniformed Chauffeurs</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="benefits-colm">
                <img src={Pleasure} alt="Easy to use" />	
                <h3>Happy Clients</h3>	
                <p>More than 100K+ satisfied customers across India</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="benefits-colm">
                <img src={SupportIcon} alt="100% Pleasure" />	
                <h3>Top Notch Support</h3>	
                <p>Our team will assist you even you need us while travelling</p>
              </div>
            </div>
          </div>	
        </div>
      </section>
    );
  }
}  
export default OurBenifits;