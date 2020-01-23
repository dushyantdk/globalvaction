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
                            <p className="font-light">Main features</p>
                            <h2>HOW WE <span>WORK</span></h2>
                            <p className="font-14">GetCab service helps you to find the highest quality taxi services anytime. Our drivers are uniformed, fully licensed and the office staff is trained to the highest standards.We can help you to save time and money. Our main idea is based on establishing a direct connection between drivers and passengers.</p>
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
                                <h3>Search</h3>
                                <p>
                                    Enter your origin & select favourite destination city decide your vacation / holiday dates
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
                                <h3>Select Car</h3>
                                <p>
                                Choose your cab from a wide range of fleets from budget , family to luxury cars.
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
                                <h3>Pay & Book</h3>
                                <p>
                                Easy payment & multiple online booking options Choose yours & get confirmation instantly.
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