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
                            <p className="font-14">All you need is to tell us the dates and your itinerary. We do the rest. Right from planning transportation, our dedicated team of experts will make sure the trip is a smooth ride for you and your family. A 24*7 onsite team is dedicated for the clients until we drop them to their drop location. </p>
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
                                <p> You have a plan for your favourite destination and we align cab and chauffeur for care-free travel</p>
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
                                <p>We will message you and your trip planner, our chauffeur will call you and finalise pickup location</p>
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
                                <p>Our trained chauffeur will follow your trip plan and take you to all must visit sites</p>
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