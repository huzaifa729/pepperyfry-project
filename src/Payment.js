import React, { useState,useEffect } from 'react'
import './Payment.css'
import {useStateValue} from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from './reducer';
import axios from 'axios';

function Payment() {
    const [{cart,user}, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [processing, setProcessing] = useState("")
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecret, setClientSecret] = useState(true)


    useEffect(()=>{
      // generate  the special stripe secret which allows us to charge a customer
    const   getClientSecret = async () => {
     const response = await axios({
       method:'post',
       //stripe expect total amount in base currencies like rupees to paise
       url: `/payment/create?total=${getCartTotal(cart)* 100}`
     });
     setClientSecret(response.data.clientSecret);
    }
    getClientSecret();
    },[cart])
    
    const handleSubmit = async (event) =>{
        event.preventDefault();
        setProcessing(true);

         const payload = await stripe.confirmCardPayment(clientSecret, {
           payment_method:{
             cart: elements.getElement(CardElement)
           }
         });
    };

    const handleChange = (event) =>{
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "" );
    }

    return (
        <div className='payment'>
            <div className='payment-container'>
               {/* Delivery Address */}
               <div className='payment-section'>
               <div className='payment--title'>
                  <h1>Delivery Address:</h1>
                  </div>
                   <div className='payment-address'>
                       <p>{user?.email}</p>
                       <p>Flat No:-202, Hiranandani</p>
                       <p>Andheri, India</p>
                 </div>
               </div>

                {/* Cart Review */}
                <div className='payment-section'>
                <div className='payment--title'>
                 <h3>Review on your Item in Cart:</h3>
                 </div>
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
                    <div className='payment--title'>
                  <h3>Payment Method:</h3>
                  </div>
                  <div className='paymen-details'>
                      {/* Stripe Secret Code */}

                      <form onSubmit={handleSubmit}>
                          <CardElement onChange={handleChange}/>

                          <div className='payment-priceContainer'>

                          <CurrencyFormat

                            renderText = { (value)=>(
                             <>
                           <p>Subtotal ({cart.length} items) : <strong>{value}</strong> {" "} </p>
                             {/* <small className="subtotal--gift">
                           <input type="checkbox" /> This order contains a gift
                          </small>  */}
                        </>
                      )} 
                        decimalScale = {2}
                        value = {getCartTotal(cart)}
                        displayType = {"text"}
                        thousandSeparator = {true}
                        prefix={"₹"}
                   />
                        <button disabled = {processing || disabled || succeeded}> <span> { processing ? <p>Processing</p> : "Buy Now"}  </span></button>
                          </div>

                          {/* Errors */}
                          {error && <div>{error}</div>}
                      </form>
                  </div>
              </div>
            </div> 
        </div>
    )
}

export default Payment
