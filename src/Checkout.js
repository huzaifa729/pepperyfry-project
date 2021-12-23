import React from 'react';
import './Checkout.css'
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
function Checkout() {
    const [{cart}, dispatch] = useStateValue();

    return (
        <div className='checkout'>
           <div className='checkout-left'>
            <img className="checkout--adv" src="https://rukminim1.flixcart.com/flap/2666/384/image/3565b7a0e4b1c1bf.jpg?q=50" alt="adv" />   
            <div> 
           <h3 className="checkout--title">Your Shopping Details</h3>

            {cart.map( item =>(
                <CheckoutProduct
                
                     id= {item.id}
                     title={item.title}
                     price={item.price}
                     image={item.image}
                
                />
            ))}

           </div>
        </div> 

           <div className='checkout--right'>
            <Subtotal/>
           </div>
        </div>
    )
}

export default Checkout
