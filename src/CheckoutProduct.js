import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'


function CheckoutProduct({id, title, price, image}) {
  const [{cart}, dispatch] = useStateValue();

     const removeFromCart = () =>{
          dispatch({
            type:"REMOVE_FROM_CART",
            id:id,
          })
     }

    return (
        <div className='checkoutproduct'>
           <img className='checkoutimage' src={image} alt=""/> 

           <div className='checkoutproduct-info'>
                 <p className='checkoutproduct-title'>{title}</p>
                 <p className='checkoutproduct-price'>
                     <bold>₹</bold>
                   <strong>{price}</strong>
                     </p>
                     <button onClick={removeFromCart}>Remove From Cart</button>
           </div>
 </div>
    )
}

export default CheckoutProduct





      
