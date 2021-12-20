// import React from 'react'
// import './Home.css';
// import Product from './Product';
// function Home() {
//     return (
//         <div className="home">
//            <div className="home-row">
//               <Product
//               id="01"
//               imgn="https://ii1.pepperfry.com/media/wysiwyg/banners/hp-brand-logo-woodsworth_2x_15012021.png"
//                  title=" Contemporary, Clean, Functional"
//               price={5212}
//               image="https://ii2.pepperfry.com/media/wysiwyg/banners/Bs_web_10082021_1.jpg"
           
//               /> 

//             <Product
//               id="02"
//               imgn="https://ii3.pepperfry.com/media/wysiwyg/banners/hp-brand-logo-casacraft_2x_15012021.png"
//               title=" Trendy, Comfortable, Vibrant"
//               price={2500}
//               image="https://ii1.pepperfry.com/media/wysiwyg/banners/Bs_web_10082021_2.jpg"
//               /> 


//             <Product
//               id="03"
//               imgn="https://ii2.pepperfry.com/media/wysiwyg/banners/hp-brand-logo-mudramark_2x_15012021.png"
//               title=" Ethnic, Indian Carvings, Impeccable Crafting"
//               price={5040}
//               image="https://ii3.pepperfry.com/media/wysiwyg/banners/Bs_web_10082021_3.jpg"
//               /> 
//  </div> 

//  <div className="home-row">
//               <Product
//                 id="04"
//               imgn="	https://ii1.pepperfry.com/media/wysiwyg/banners/hp-brand-logo-mintwud_2x_15012021.png"
//               title=" Modern, Functional, Affordable"
//               price={3500}
//               image="	https://ii2.pepperfry.com/media/wysiwyg/banners/Bs_web_19082021_4.jpg"
//               /> 

//             <Product
//               id="05"
//               imgn="https://ii3.pepperfry.com/media/wysiwyg/banners/hp-brand-logo-amberville_2x_15012021.png"
//               title=" Gracious Living, Colonial Style, Curved Lines"
//               price={1590}
//               image="https://ii1.pepperfry.com/media/wysiwyg/banners/Bs_web_10082021_5.jpg"
//               /> 


//             <Product
//               id="06"
//               imgn="	https://ii2.pepperfry.com/media/wysiwyg/banners/hp-brand-logo-bohemiana_2x_15012021.png"
//               title=" Hand-Crafted, Free-Spirited , Adventurous"
//               price={1980}
//               image="https://ii3.pepperfry.com/media/wysiwyg/banners/Bs_web_10082021_6.jpg"
//               /> 

         
//         </div> 
    
//         </div>
//     )
// }

// export default Home




import React from 'react'
import './Home.css';
import Product from './Product';
function Home() {
    return (
        <div className="home">
        <div className="home--container">
          {/* <img className="home--image" src="https://m.media-amazon.com/images/I/71UhgZQzskL._SX3000_.jpg" alt="" /> */}

            <div className="home--row">
           <Product 
               id="01"
               title="See you in C by Ali-karim Sayed (Author)"
               price={4450}
               image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg"
               />
          
          <Product 
               id="02"
               title="Redmi Note 10T 5G (Graphite Black, 4GB"
               price={1499900}
               image="https://images-eu.ssl-images-amazon.com/images/I/41JMIe2FHuL._SX300_SY300_QL70_FMwebp_.jpg"
               />

          <Product 
               id="03"
               title="Samsung 163 cm (65 inches) The Frame Series 4K Ultra HD Smart QLED TV "
               price={122290}
               image="https://m.media-amazon.com/images/I/71vZypjNkPS._AC_UY218_.jpg"
               />

        <Product 
               id="02"
               title="Redmi Note 10T 5G (Graphite Black, 4GB"
               price={1499900}
               image="https://images-eu.ssl-images-amazon.com/images/I/41JMIe2FHuL._SX300_SY300_QL70_FMwebp_.jpg"
               />


          
            </div>

            <div className="home--row">
         
            <Product 
               id="04"
               title="Candy 170 L 2 Star Direct-Cool Single Door Refrigerator (CDSD522170MS, Moon Silver)"
               price={8990}
               image="https://m.media-amazon.com/images/I/718n2Wv3inL._AC_UY218_.jpg"
               />

               
          <Product 
               id="05"
               title="Decker Chronograph Black Dial Men's Watch - CH2573P"
               price={4985}
               image="https://m.media-amazon.com/images/I/618-2dN9fWL._AC_UL320_.jpg"
               />
</div>

<Product 
               id="05"
               title="Decker Chronograph Black Dial Men's Watch - CH2573P"
               price={4985}
               image="https://m.media-amazon.com/images/I/618-2dN9fWL._AC_UL320_.jpg"
               />
</div>

          
  
        </div>  
    
    )
}

export default Home