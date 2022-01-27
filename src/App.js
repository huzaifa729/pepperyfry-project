
import React, {useEffect} from 'react'
import './App.css'
import Navbar from './Navbar'
import Header from './Header'
import Slider from './Slider'
import Home from './Home'
import Carousel from './Carousel'
import Photo from './Photo'
import Slick from './Slick'
import End from './End'
import Footer from './Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";
import Login from './Login'
import Checkout from './Checkout'
import { useStateValue } from './StateProvider'
import { auth } from './firebase';
import Payment from './Payment'
import { loadStripe} from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51KJFGGSGtv46Bfi1hBljdoSq8Kk1qdWlTh8YkLD4BtrICG2fBbej5eY7X9JChCX904FfJKijj39ZpFIKWyujkZER00WtQ42E8j')

function App() {
  const [{}, dispatch]= useStateValue();

  useEffect(() => {
     auth.onAuthStateChanged(
         
      authUser => {
        console.log('The User Is :', authUser)
      

         if(authUser){
           //user just logged in / user was logged in
           dispatch(
             {
             type: 'SET_USER',
             user: authUser
             }
           )
         }
         else{
           //user logged out
           dispatch(
             {
               type: 'SET_USER',
               user: null
             }
           )
         }
        })
  }, [])
  return (
    <Router>
    <div>
       {/* <p>gvyhgyhyg</p> */}
       <Switch>
       <Route path="/login">
       <Navbar/>
       <Login/>
       </Route>

       <Route path="/checkout">
       <Navbar/>
       <Checkout/>
       </Route>

       <Route path="/payment">
       <Navbar/>
       <Elements stripe={promise}>
       <Payment/>
       </Elements>
       </Route>

       <Route path='/'>
    <Navbar />
        <Header/>
        <Slider/>
        <Home/>
        <Carousel/>
         <Photo/>
         <Slick/>
         <End/>
         <Footer/>
         </Route>
         </Switch>

    </div>
    </Router>
  )
}

export default App

