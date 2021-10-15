import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

import './Carousel.css'

export class Carousel extends Component {  
    render()  
    {  
      return (  
        <div>  
   
   <div class='container-fluid' >            

    <div className="headinges">
      <h2 className="h2">AS EXQUISITE AS YOU</h2>
      <span className="span">Collections For The Auspicious Season</span>
   </div>


<OwlCarousel className='owl-theme' loop margin={10} nav >
    <div class='item'>
      <img  src ="https://ii1.pepperfry.com/media/wysiwyg/banners/Ca_web_14092021_1.jpg" alt='any'/>
    </div>
    <div class='item'>
      <img  src="https://ii2.pepperfry.com/media/wysiwyg/banners/Ca_web_14092021_2.jpg" alt='any'/>
    </div>
    <div class='item'>
       <img  src="https://ii3.pepperfry.com/media/wysiwyg/banners/Ca_web_14092021_3.jpg" alt='any'/>
    </div>
    <div class='item'>
       <img  src="https://ii1.pepperfry.com/media/wysiwyg/banners/Ca_web_14092021_4.jpg" alt='any'/>
    </div>
    <div class='item'>
      <img  src="https://ii2.pepperfry.com/media/wysiwyg/banners/Ca_web_14092021_5.jpg" alt='any'/>
    </div>
    <div class='item'>
        <img  src="	https://ii3.pepperfry.com/media/wysiwyg/banners/Ca_web_14092021_6.jpg"alt='any'/>
    </div>
  
</OwlCarousel>
  </div>  

  </div>  
      )  
    }  
  }  

export default Carousel

