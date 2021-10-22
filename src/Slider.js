import React from 'react'
import './Slider.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import LocationOnIcon from '@mui/icons-material/LocationOn';
function Slider() {
    return (
        <div>
        <div className="slid-im">
            <Carousel infiniteLoop autoPlay >
              <div className="imagees">
            <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Promo_71021_ET.jpg" alt="veer"/> 
         </div>  

         <div className="imagees">
            <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/HB01_Web_04102021_1x-n.jpg" alt="/" /> 
         </div> 

         <div className="imagees">
            <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/HB02_Web_04102021_1x-n.jpg" alt="/"  /> 
         </div> 

         <div className="imagees">
            <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/HB03_Web_04102021_1x-n.jpg" alt="/"  /> 
         </div> 

         <div className="imagees">
            <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/HB04_Web_04102021_1x-n.jpg" alt="/"  /> 
         </div> 
        </Carousel>  

            
    
                 <div className="side-img">
                     <div className="crash">
                 <img className="photo" src="https://ii1.pepperfry.com/media/wysiwyg/banners/WEB_Top_RHS-7-oct.png" alt="/" />
                </div>

                <div className="mui">
                 <img className="photo" src="https://ii2.pepperfry.com/media/wysiwyg/banners/Sun_WEB_Bottom_RHS.png" alt="/" />
                </div>
                </div>

                <div className="location">
            <span className="symbols"><LocationOnIcon fontSize="large"/></span>
 <span className="smal">Find  Nearest studio</span>
</div>
</div>

    <div className="banner">
      <div className="banner-one">
         <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/2021_web_regBanner_01_5Oct.jpg" alt="/"  />
          </div> 

          <div className="banner-two">
         <img src="	https://ii1.pepperfry.com/media/wysiwyg/banners/Safe_Web2_2x_11062021.jpg" alt="/" />
          </div> 
          </div>



          <div className="bank">
              <span className="oyl">Bank offers</span>

              <div className="im-sli">

                   <div className="bnk-slids">
                       <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Web_No_Cost_EMI16421_2x.png" alt="/" />
                   </div>

                   <div className="bnk-slids">
                       <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Web_Bank_IDFC16421_2x.png" alt="/" />
                   </div>

                   <div className="bnk-slids">
                       <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Web_Bank_AMEX16721_2x.png" alt="/" />
                   </div>

                   <div className="bnk-slids">
                       <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Web_Bank_ICICI_Festive_0122421_2x.png" alt="/" />
                   </div>

                   <div className="bnk-slids">
                       <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Web_Bank_RBL16421_2x.png" alt="/" />
                   </div>

                   <div className="bnk-slids">
                       <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Web_Bank_ICICI_Festive_0222421_2x.png" alt="/" />
                   </div>

              </div>
          </div>
 </div>
            
    )
}

export default Slider
