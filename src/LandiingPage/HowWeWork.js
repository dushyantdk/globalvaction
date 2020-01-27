import React, { Component } from 'react';
import SearchIcon from '../img/search.png';
import CarIcon from '../img/car.png';
import PayIcon from '../img/pay.png';

class HowWeWork extends Component {
  render() {
    return (
        <section className="how-we-work">
            <div className="container">
                <div className="row justify-content-center text-center mb-5">
                    <div className="col-lg-9">
                        <div className="how-we-title">
                            <h2>HOW WE <span>WORK</span></h2>
                            <p className="font-14">You come to us with a plan to your holiday or business destination or your trip planner sends us your needs and we assign our vehicles and our chauffeur with you. 
Our drivers are uniformed, fully licensed and are trained to the highest standards. We can help you to save time and money. Our main idea is based on linking drivers and passengers and best route for enjoyable touring experience.
</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="work-block">
                            <div className="work-icon">
                                <img src={SearchIcon} alt="" />
                            </div>
                            <div className="work-info">
                                <h3>YOUR TRIP PLAN</h3>
                                <p>
                                You have a plan for your favourite destination city and we align cab and chauffeur with your needs
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="work-block">
                            <div className="work-icon">
                                <img src={CarIcon} alt="" />
                            </div>
                            <div className="work-info">
                                <h3>CONTACT YOU</h3>
                                <p>
                                We will message you and your trip planner, our chauffeur will call you and finalise pickup location
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="work-block">
                            <div className="work-icon">
                                <img src={PayIcon} alt="" />
                            </div>
                            <div className="work-info">
                                <h3>ENJOY YOUR TRAVEL</h3>
                                <p>
                                Our trained chauffeur will with you for your whole trip and let all road hassles on us
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       );
  }
}  
export default HowWeWork;