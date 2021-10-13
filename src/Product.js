import React from 'react'
import './Product.css'

function Product({img, title, price, image}) {
    return (
      
           <div className="product">
            <div className="info">
            <img className="im" src={img}/>

             <p className="tit"><b>Traits:</b>{title}</p>  

             <div className="price">
             {/* <bold>₹</bold> */}
                 <p className="ruppes"><b>₹</b>{price}</p>
             </div>

             <div className="product-image">
               <img src={image}/>  
             </div>

           
             <button className="btns">Cart</button>
           
        </div>  
  
                
         
         
        </div> 
       
    )
}

export default Product
