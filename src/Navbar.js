import React from 'react'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import { Link } from 'react-router-dom';
import {useStateValue} from './StateProvider'
import { auth } from './firebase';
function Navbar() {
 const [{cart,user}, dispatch] = useStateValue();

 const handleAuthentication = () =>{
     if(user){
        auth.signOut();
     }
 }
    return (
      
         <div className="header">
             <div className="logo">
                 <Link to="/">
              <img className="img" src="https://ii1.pepperfry.com/images/pf-logo-web-diwali-2021-2X.gif"alt="ny"/>
             </Link>
             </div> 


              
             <div className="search-box">
                 {/* <input className="searchs" type="" placeholder="Search"/> */}
                 <input class="searchs" type="search" placeholder="Search" aria-label="Search"/>
                 <SearchIcon className="icon" />
             </div>
      

                 <div className="head">
       
                 <Link to={!user && "/login"}>
                  <div onClick={handleAuthentication} className="button">
                   <button className="btn">{user? 'Sign Out': 'Sign In'}</button>
                  </div>
                  </Link>

                     <div className="option">
                      <LocalShippingIcon fontSize="medium" className="icos"/>
                      <span className="one">Track</span>
                     </div>

                     <div className="option">
                      <FavoriteBorderIcon fontSize="medium"  className="icos"/>
                      <span className="one">Wishlist</span>
                     </div>

                     <Link to="/checkout">
                     <div className="option">
                       <ShoppingCartOutlinedIcon fontSize="medium"  className="icos"/>
                      <span className="one">Cart {cart?.length}</span>
                      </div>
                     </Link>
                 
                     {/* <div className="option">
                      <AccountCircleSharpIcon fontSize="medium" className="icos"/>
                      <span className="one">Profile</span>
                     </div> */}
                 </div>

           

         </div>
         

    )
}

export default Navbar
