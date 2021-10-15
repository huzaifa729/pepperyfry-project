import React from 'react'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';

function Navbar() {
    return (
      
         <div className="header">
             <div className="logo">
                <img className="img" src="https://ii1.pepperfry.com/images/pf-logo-web-navaratri-2021-2X.gif" alt="/" />
             </div>

             <div className="search-box">
                 {/* <input className="searchs" type="" placeholder="Search"/> */}
                 <input class="searchs" type="search" placeholder="Search" aria-label="Search"/>
                 <SearchIcon className="icon" />
             </div>

                 <div className="head">

                  <div className="button">
                   <button className="btn">Login</button>
                  </div>

                     <div className="option">
                      <LocalShippingIcon fontSize="medium" className="icos"/>
                      <span className="one">Track</span>
                     </div>

                     <div className="option">
                      <FavoriteBorderIcon fontSize="medium"  className="icos"/>
                      <span className="one">Wishlist</span>
                     </div>

                     <div className="option">
                      <ShoppingCartOutlinedIcon fontSize="medium"  className="icos"/>
                      <span className="one">Cart</span>
                     </div>

                     <div className="option">
                      <AccountCircleSharpIcon fontSize="medium" className="icos"/>
                      <span className="one">Profile</span>
                     </div>
                 </div>

               
         </div>
         

    )
}

export default Navbar
