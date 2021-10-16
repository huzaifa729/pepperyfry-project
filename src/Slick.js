import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slick.css"


class App extends Component {
    render() {
      const settings = {
        // dots: true,
        // autoplay: true,
         infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
      };
      return (
        <div>
        <div className="informe">
         <span className="ofse">KEEPING TRADITIONS ALIVE</span>
         <span className="greye">And Staying On The Top Of Trends</span>
       </div>
            
        <div className="containerers">
          <Slider {...settings}>
          <div className="zoom"><img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Contemporary_27082019.jpg" alt="Credit to Joshua Earle on Unsplash"/></div>

          <div className="zoom"><img src="https://ii3.pepperfry.com/media/wysiwyg/banners/modern_27082019.jpg" alt="Credit to Alisa Anton on Unsplash"/></div>

          <div className="zoom"><img src="https://ii1.pepperfry.com/media/wysiwyg/banners/midcentury_27082019.jpg" alt="Credit to Igor Ovsyannykov on Unsplash"/></div>

          <div className="zoom"><img src="https://ii2.pepperfry.com/media/wysiwyg/banners/industrial_27082019.jpg" alt="Credit to Pierre Châtel-Innocenti on Unsplash"/></div>

          <div className="zoom"><img src="https://ii3.pepperfry.com/media/wysiwyg/banners/traditional_27082019.jpg" alt="Credit to Richard Nolan on Unsplash"/></div>

          <div className="zoom"><img src="https://ii1.pepperfry.com/media/wysiwyg/banners/transitional_27082019.jpg" alt="Credit to Cristina Gottardi on Unsplash"/></div>
          
          </Slider>
        </div>
</div>



      );
    }
  }
  
  export default App;