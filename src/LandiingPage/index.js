import React, { Component } from 'react';
import Banner from './Banner';
import SearchSection from './SearchSection';
import Travelpartner from './Travelpartner';
import WhyWeUs from './WhyWeUs';
import OurBenifits from './OurBenifits';
import HowWeWork from './HowWeWork';
import Testimonial from './Testimonial';
import Clients from './Clients';
import Footer from './Footer';
import ThingtoDo from './ThingtoDo';


class LandiingPage extends Component {
  render() {
    return (
        <div> 
          
          <Banner/>
          <SearchSection/>
          <Travelpartner/>
          <WhyWeUs/>
          <OurBenifits/>
          <ThingtoDo/>
          <HowWeWork/>
          <Testimonial/>
          <Clients/>
          <Footer/>
        </div>
    );
  }
}  
export default LandiingPage;