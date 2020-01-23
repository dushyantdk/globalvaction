import React, { Component } from 'react';
import FixedPrice from '../img/fixed-price.png';
import NoFee from '../img/no-fee.png';
import Pleasure from '../img/pleasure.png';
import Nationwide from '../img/nationwide.png';
import EasyToUse from '../img/easy-to-use.png';
import BonusForRide from '../img/bonuse--for-ride.png';

class OurBenifits extends Component {
  render() {
    return (
        <section className="our-benefits sec-pd">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="section-title">
                <h3>MAIN FEATURES</h3>
                <h2>Our Benefits</h2>
              </div>
            </div>
          </div>	
          <div className="row">
            <div className="col-md-4">
              <div className="benefits-colm">
                <img src={FixedPrice} alt="Fixed Price" />	
                <h3>Fixed Price</h3>	
                <p>The fixed fare is set in every taximeter as the main tariff.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="benefits-colm">
                <img src={NoFee} alt="No Fee" />	
                <h3>No Fee</h3>	
                <p>We guarantee fixed price and you should not pay tips.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="benefits-colm">
                <img src={Pleasure} alt="100% Pleasure" />	
                <h3>100% Pleasure</h3>	
                <p>We have a lot of standing customer and high ratings.</p>
              </div>
            </div>
          </div>		
          <div className="row">
            <div className="col-md-4">
              <div className="benefits-colm">
                <img src={Nationwide} alt="Nationwide" />	
                <h3>Nationwide</h3>	
                <p>Our application is the easiest way to book a taxi.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="benefits-colm">
                <img src={EasyToUse} alt="Easy to use" />	
                <h3>Easy to use</h3>	
                <p>Orci varius natoque penatibus et magnis dis parturient montes,mus.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="benefits-colm">
                <img src={BonusForRide} alt="100% Pleasure" />	
                <h3>Bonuses for Ride</h3>	
                <p>Phasellus l et porta tortor dignissim at. Pellentesque gravida tortormollis.</p>
              </div>
            </div>
          </div>	
        </div>
      </section>
    );
  }
}  
export default OurBenifits;