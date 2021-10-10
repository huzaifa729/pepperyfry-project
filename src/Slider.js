import React from 'react'
import './Slider.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import LocationOnIcon from '@mui/icons-material/LocationOn';
function Slider() {
    return (
        <div className="slid-im">
            <Carousel infiniteLoop autoPlay >
              <div className="imagees">
            <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Promo_71021_ET.jpg" /> 
         </div>  

         <div className="imagees">
            <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/HB01_Web_04102021_1x-n.jpg" /> 
         </div> 

         <div className="imagees">
            <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/HB02_Web_04102021_1x-n.jpg" /> 
         </div> 

         <div className="imagees">
            <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/HB03_Web_04102021_1x-n.jpg" /> 
         </div> 

         <div className="imagees">
            <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/HB04_Web_04102021_1x-n.jpg" /> 
         </div> 
        </Carousel>  

             {/* <div className="hed-imge">
                 <img className="photo" src="https://ii1.pepperfry.com/media/wysiwyg/banners/WEB_Top_RHS-7-oct.png"/>
             </div> */}
    
                 <div className="rij">
                     <div className="mui">
                 <img className="photo" src="https://ii1.pepperfry.com/media/wysiwyg/banners/WEB_Top_RHS-7-oct.png"/>
                </div>

                <div className="mui">
                 <img className="photo" src="https://ii2.pepperfry.com/media/wysiwyg/banners/Sun_WEB_Bottom_RHS.png"/>
                </div>
                </div>

                <div className="h">
            <span className="symbols"><LocationOnIcon fontSize="large"/></span>
 <span className="sma">Find your Nearest studio</span>
</div>
</div>
    )
}

export default Slider
