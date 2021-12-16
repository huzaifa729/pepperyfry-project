
import React from 'react'
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
function App() {
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

       <Route path="/">
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

