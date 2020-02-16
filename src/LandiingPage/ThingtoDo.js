import React, { Component } from 'react';
import OneImage from '../img/1.jpg';
import TwoImage from '../img/2.jpg';
import ThreeImage from '../img/3.jpg';
import Scrollchor from 'react-scrollchor';

class ThingtoDo extends Component {
  render() {
    return (
        <section className="thingstodo">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <div className="row">
                            <div className="singleWedo">
                              <div className="col-sm-6 p-0">
                                    <div className="wedoImg">
                                        <img src={OneImage} alt="" />
                                    </div> 
                              </div>
                              <div className="col-sm-6">
                                    <div className="text-block">
                                      <h2>YOUR TRIP <span>PLAN</span></h2>
                                      <p>You have a plan for your favourite destination and we align cab and chauffeur for care-free travel</p>
                                    </div>
                              </div>   
                            </div>
                        </div>
                        <div className="row">
                            <div className="singleWedo mobile-reverse">
                              <div className="col-sm-6">
                                    <div className="text-block">
                                      <h2>CONTACT <span>YOU</span></h2>
                                      <p>We will message you and your trip planner, our chauffeur will call you and finalise pickup location</p>
                                    </div>
                              </div>
                              <div className="col-sm-6 p-0">
                                    <div className="wedoImg">
                                        <img src={ThreeImage} alt="" />
                                    </div> 
                              </div>   
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="row">
                            <div className="singleWedo">
                                <div className="col-lg-12 p-0">
                                    <div className="wedoImg">
                                    <img src={TwoImage} alt="" />
                                    </div> 
                                </div>
                                <div className="col-lg-12">
                                    <div className="text-block">
                                      <h2>ENJOY YOUR <span>TRAVEL</span></h2>
                                      <p>Our trained chauffeur will follow your trip plan and take you to all must visit sites</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4 pt-4 justify-content-center">
                    <div className="col-lg-2">
                        <Scrollchor className="explore-now w-100" to="#footer">Explore Now!</Scrollchor>
                    </div>
                </div>
            </div>
        </section>
        );
  }
}  
export default ThingtoDo;