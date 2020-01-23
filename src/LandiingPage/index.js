import React, { Component } from 'react';
import Banner from './Banner';
import SearchSection from './SearchSection';
import OurBenifits from './OurBenifits';
import HowWeWork from './HowWeWork';

class LandiingPage extends Component {
  render() {
    return (
        <div> 
          <Banner/>
          <SearchSection/>
          <OurBenifits/>
          <HowWeWork/>
        </div>
    );
  }
}  
export default LandiingPage;