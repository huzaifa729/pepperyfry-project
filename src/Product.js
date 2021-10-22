import React from 'react'
import './Product.css'

function Product({img, title, price, image}) {
    return (
      
           <div className="product">
            <div className="info">
            <img className="im" src={img} alt=""/>

             <p className="tit"><b>Traits:</b>{title}</p>  

             <div className="price">
        
                 <p className="ruppes"><b>₹</b>{price}</p>
             </div>

             <div className="product-image">
               <a href="no/"><img src={image} alt=""/> </a>
             </div>

             <div className="buttos">
            <a href="/">
              <button className="btns">View All</button>
              </a>
              </div>

        </div>  
  
                
         
         
        </div> 
       
    )
}

export default Product
