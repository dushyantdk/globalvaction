import React, { Component } from 'react';
import TestimonialSlide from './TestimonialSlide';

class Testimonial extends Component {
  render() {
    return (
        <section className="testimonial">
                <div className="row no-gutters">
                    <div className="col-md-6 col-sm-5 col-xs-12 pull-left testimonial-bg">
                    </div>
                    <div className="col-md-6 col-sm-7 col-xs-12 pull-right">
                        <TestimonialSlide/>
                    </div>
                </div>
            
        </section>
    );
  }
}  
export default Testimonial;