import React from 'react'
import './CheckoutProduct.css'

function CheckoutProduct({id, title, price, image}) {
    return (
        <div className='checkoutproduct'>
           <img className='checkoutimage' src={image} alt=""/> 

           <div className='checkoutproduct-info'>
                 <p className='checkoutproduct-title'>{title}</p>
                 <p className='checkoutproduct-price'>
                     <bold>₹</bold>
                   <strong>{price}</strong>
                     </p>
                     <button>Remove From Cart</button>
           </div>
 </div>
    )
}

export default CheckoutProduct
