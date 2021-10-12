import React from 'react'
import './Product.css'

function Product({img, title, price, image}) {
    return (
      
           <div className="product">
            <div className="info">
            <img className="im" src={img}/>
             <p className="tit">{title}</p>  

             <div className="price">
                 <p>{price}</p>
             </div>

             <div className="product-image">
               <img src={image}/>  
             </div>
        </div>  
        
         
        </div> 
       
    )
}

export default Product
