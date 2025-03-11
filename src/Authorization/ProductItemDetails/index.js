
import './index.css'

const ProductItemDetails=(props)=>{
   const {itemDetails,quantity,increment,decrement,addCart}=props
   const {rating,title,brand,description,imageUrl,price,totalReviews,availability}=itemDetails

   const incrementOn=()=>{
      increment()
   }
   const decrementOn=()=>{
      decrement()
   }
   const clicked=()=>{
      addCart()
   }
   return(
      <div className="product-item-details">
      <img src={imageUrl} alt="product" 
      className="product-item-image"/>
     <div className="product-item-content">
     <h2 className="product-item-title">{title}</h2>
     <h2 className="product-item-price">Rs {price}/-</h2>
     <span className="product-item-rating">
       {rating}
     <img src="https://assets.ccbp.in/frontend/react-js/star-img.png" alt="star" 
    className="rating-star"/>
     </span>
     <span className="product-item-reviews">{totalReviews} Reviews</span>
     <p className="product-item-paragraph">
        {description}
     </p>
      <p className="value"><span className="label">Avaliable: </span>{availability}</p>
      <p className="value"><span className="label">Brand: </span>{brand}</p>
      <hr/>
     <div>
        <button className="quantity-button"
        onClick={decrementOn}>-</button>
        <span className="quantity">{quantity}</span>
        <button className="quantity-button"
         onClick={incrementOn}>+</button>
     </div>
      
      <button className="add-cart-button"
    onClick={clicked}>ADD TO CART</button>
  </div>
   
       </div>
   )
}


export default ProductItemDetails