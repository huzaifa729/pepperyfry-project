 import React from 'react'
 import './Product.css'
 import { useStateValue } from './StateProvider'

 function Product({id, img, title, price, image}) {

  const [{cart}, dispatch] = useStateValue();



     console.log("Inside cart", cart);

   const addToCart = ()=>{

          dispatch( {
           type:"ADD_TO_CART",
           item: {
           id:id,
          //  img:img,
            title:title,
            price:price,
            image:image,
          
           }
         });
  }

     return (
      
            <div className="product">
            <div className="info">
             <img className='detrm' src={img} alt=""/>

             <p className="tit"><b>Traits:-</b>{title}</p>  

             <div className="price">
        
                 <p className="ruppes"><b>₹</b>{price}</p>
             </div>

          
              <img className='product-image' src={image} alt=""/> 
            
          
                </div> 
            
          <button className="product--button" onClick={addToCart}>Add to Cart</button> 
        
 </div> 
       
     )
 }

 export default Product



// import React from 'react'
// import './Product.css'
// import { useStateValue } from './StateProvider'

// function Product({id,  title, price, image}) {
//     const [{cart}, dispatch] = useStateValue();
 
//     console.log("In side Cart",cart);

//     const addToCart = ()=>{
//         dispatch({
//             type: "ADD_TO_CART",
//             item:{
//              id: id,
           
//              title:title,
//              price:price,
//              image:image,
           
//             }
//         });
// }

//     return (
//         <div className="product">
//         <div className="product--info">
//          {/* <img className="logo" src={logo} alt="/"></img>    */}
//         <p>{title}</p>


//         <p className="product--price">
//         <bold>₹</bold>
//         <strong>{price}</strong>
//         </p>
            
//          <img className="product--image" src={image}alt="" /> 
//          </div>
//          <button className="product--button" onClick={addToCart}>Add to Cart</button>    
      
//     </div>


//     )
// }

// export default Product
