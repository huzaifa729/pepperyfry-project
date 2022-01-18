
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
       <Payment/>
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

