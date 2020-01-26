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
                <h3>GAURISH</h3>
                <p className="font-32">28 June, 2016</p>
                <p>I planned my trip online and for travel they assigned Global Tourism. When the cab and driver came I felt very nice the way vehicle was kept and driver behaved. The Driver was guiding me all through the way, and I was with my small family each one had a good time travelling including my stay at Manali.</p>
            </div>
            <div className="item">
                <h3>FAIZAN</h3>
                <p className="font-32">14 November, 2016</p>
                <p>Hello, your driver Karamveer was good and his driving skills are best. He knows less English but his attitude was cordial and disciplined. He took us to each site planned in our itinerary and even telling us any speciality of the place. I found your Innova also well maintained.</p>
            </div>
            <div className="item">
                <h3>SAROOP</h3>
                <p className="font-32">10 January, 2017</p>
                <p>I have been regular traveller but this was my first experience to Himachal and it was astounding experience. Really difficult roads there but your driver was making it with such each and professionalism that me and my friends enjoyed whole road travel. </p>
            </div>
            <div className="item">
                <h3>VENKODOTHU</h3>
                <p className="font-32">3 May, 2017</p>
                <p>I enjoyed Himachal trip very much and in summer time that is the best place I will recommend to all to visit there. And Yes I will recommend Global as because they made my trip memorable. Their driver know all the area and even good places to stay and visit.</p>
            </div>
            <div className="item">
                <h3>SARASVINI</h3>
                <p className="font-32">30 May, 2018</p>
                <p>
                Good experience and we enjoyed it. I was satisfied that our itinerary was followed and even we were given extra awareness of the area we were travelling. Global tours has good cars and many also because our driver has so many colleagues visiting with travellers to the same location we were visiting. 
                </p>
            </div>
            <div className="item">
                <h3>SUPRIYO</h3>
                <p className="font-32">5 June, 2018</p>
                <p>In summer travelling up mountains is a thrilling experience but me and my family felt secure with driver and cab provided by Global Tourism. We appreciate that we were tied up with good travel partners.</p>
            </div>
            <div className="item">
                <h3>PARTH</h3>
                <p className="font-32">7 April, 2019</p>
                <p>
                Global Tourism has provided good service to us, their driver was in uniform and his cab was in good condition. We have enjoyed all travel by road and site seeing. We recommend Global Tourism  
                </p>
            </div>
            <div className="item">
                <h3>SHANMUGAM</h3>
                <p className="font-32">27 December, 2019</p>
                <p>We loved the way chauffeur of Global drove us in snow and with so easiness on highest sea level roads of the world. They know Himachal very well and will provided us with good services and they had songs in our language also. Good Job. </p>
            </div>
            <div className="item">
                <h3>SARASVINI</h3>
                <p className="font-32">30 May, 2018</p>
                <p>
                Good experience and we enjoyed it. I was satisfied that our itinerary was followed and even we were given extra awareness of the area we were travelling. Global tours has good cars and many also because our driver has so many colleagues visiting with travellers to the same location we were visiting. 
                </p>
            </div>
        </OwlCarousel>
        </div>
    );
  }
}  
export default TestimonialSlide;