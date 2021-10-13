import React from 'react'
import './Home.css';
import Product from './Product';
function Home() {
    return (
        <div className="home">
           <div className="home-row">
              <Product
              img="https://ii1.pepperfry.com/media/wysiwyg/banners/hp-brand-logo-woodsworth_2x_15012021.png"
              title=" Contemporary, Clean, Functional"
              price={5212}
              image="https://ii2.pepperfry.com/media/wysiwyg/banners/Bs_web_10082021_1.jpg"
              /> 

            <Product
              img="https://ii3.pepperfry.com/media/wysiwyg/banners/hp-brand-logo-casacraft_2x_15012021.png"
              title=" Trendy, Comfortable, Vibrant"
              price={2500}
              image="https://ii1.pepperfry.com/media/wysiwyg/banners/Bs_web_10082021_2.jpg"
              /> 


            <Product
              img="https://ii2.pepperfry.com/media/wysiwyg/banners/hp-brand-logo-mudramark_2x_15012021.png"
              title=" Ethnic, Indian Carvings, Impeccable Crafting"
              price={5040}
              image="https://ii3.pepperfry.com/media/wysiwyg/banners/Bs_web_10082021_3.jpg"
              /> 
 </div> 

 <div className="home-row">
              <Product
              img="	https://ii1.pepperfry.com/media/wysiwyg/banners/hp-brand-logo-mintwud_2x_15012021.png"
              title=" Modern, Functional, Affordable"
              price={3500}
              image="	https://ii2.pepperfry.com/media/wysiwyg/banners/Bs_web_19082021_4.jpg"
              /> 

            <Product
              img="https://ii3.pepperfry.com/media/wysiwyg/banners/hp-brand-logo-amberville_2x_15012021.png"
              title=" Gracious Living, Colonial Style, Curved Lines"
              price={1590}
              image="https://ii1.pepperfry.com/media/wysiwyg/banners/Bs_web_10082021_5.jpg"
              /> 


            <Product
              img="	https://ii2.pepperfry.com/media/wysiwyg/banners/hp-brand-logo-bohemiana_2x_15012021.png"
              title=" Hand-Crafted, Free-Spirited , Adventurous"
              price={1980}
              image="https://ii3.pepperfry.com/media/wysiwyg/banners/Bs_web_10082021_6.jpg"
              /> 

         
        </div> 
    
        </div>
    )
}

export default Home
