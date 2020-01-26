import React, { Component } from 'react';
import Banner from './Banner';
import SearchSection from './SearchSection';
import WhyWeUs from './WhyWeUs';
import OurBenifits from './OurBenifits';
import HowWeWork from './HowWeWork';
import Testimonial from './Testimonial';
import Clients from './Clients';
import Footer from './Footer';


class LandiingPage extends Component {
  render() {
    return (
        <div> 
          <Banner/>
          <SearchSection/>
          <WhyWeUs/>
          <OurBenifits/>
          <HowWeWork/>
          <Testimonial/>
          <Clients/>
          <Footer/>
        </div>
    );
  }
}  
export default LandiingPage;