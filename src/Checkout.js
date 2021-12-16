import React from 'react';
import './Checkout.css'
import Subtotal from './Subtotal';

function Checkout() {
    return (
        <div className='checkout'>
           <div className='checkout-left'>
            <img className="checkout--adv" src="https://rukminim1.flixcart.com/flap/2666/384/image/3565b7a0e4b1c1bf.jpg?q=50" alt="adv" />   
            <div> 
           <h3 className="checkout--title">Your Shopping Details</h3>
           </div>
           
            </div> 

           <div className='checkout--right'>
            <Subtotal/>
           </div>
        </div>
    )
}

export default Checkout
