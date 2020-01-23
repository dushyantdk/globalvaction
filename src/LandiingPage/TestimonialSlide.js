import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class TestimonialSlide extends Component {
    
  render() {
    const  responsiveValues = {
        1025 : {
            items : 1

        },
        1024 : {
            items : 1

        },
        0 : {
            items : 1

        }
    }
    return (
        <div  className="test-block">
            <h2>Tourist <span>feedback</span></h2>
        <OwlCarousel smartSpeed={450} responsiveRefreshRate={10} loop={true} autoplay={true} autoplayTimeout={2000}   className="owl-theme" responsive={responsiveValues} margin={15}   nav>
            <div className="item">
                <h3>African Forest</h3>
                <p className="font-32">28 October, 2018</p>
                <p>Duis non condimentum nunc. Nunc quis turpis eu est tincidunt rutrum. Cras a purus quis sem tincidunt egestas vel id lacus. Nunc sed volutpat erat. Duis sollicitudin.
                </p>
            </div>
            <div className="item">
                <h3>African Forest</h3>
                <p className="font-32">28 October, 2018</p>
                <p>Duis non condimentum nunc. Nunc quis turpis eu est tincidunt rutrum. Cras a purus quis sem tincidunt egestas vel id lacus. Nunc sed volutpat erat. Duis sollicitudin.
                </p>
            </div>
            <div className="item">
                <h3>African Forest</h3>
                <p className="font-32">28 October, 2018</p>
                <p>Duis non condimentum nunc. Nunc quis turpis eu est tincidunt rutrum. Cras a purus quis sem tincidunt egestas vel id lacus. Nunc sed volutpat erat. Duis sollicitudin.
                </p>
            </div>
        </OwlCarousel>
        </div>
    );
  }
}  
export default TestimonialSlide;