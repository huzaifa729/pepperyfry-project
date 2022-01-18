import React from 'react'
import './Payment.css'
import {useStateValue} from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
function Payment() {
    const [{cart,user}, dispatch] = useStateValue();
    return (
        <div className='payment'>
            <div className='payment-container'>
               {/* Delivery Address */}
               <div className='payment-section'>
                  <h1>Delivery Address:</h1>
                   <div className='payment-address'>
                       <p>{user?.email}</p>
                       <p>Flat No:-202, Hiranandani</p>
                       <p>Andheri, India</p>
                 </div>
               </div>

                {/* Cart Review */}
                <div className='payment-section'>
                 <h3>Review on your Item in Cart:</h3>
                 <div className='payment-items'>
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

                {/* Payment Gateway */}
                <div className='payment-section'>
                  <h3>Payment Method:</h3>
                  <div className='paymen-details'>
                      {/* Stripe Secret Code */}
                  </div>
              </div>
            </div> 
        </div>
    )
}

export default Payment
