import {Link} from 'react-router-dom'
import './index.css'
const ProductCard=(props)=>{
   const {productDetails}=props
   const {title,price,rating,imageUrl,brand,id}=productDetails
    return(
        
      <Link to={`/products/${id}`}
      className='product-link'>
        <li className="product-card-item">
        <img src={imageUrl}
        alt="product" 
        className="thumbnail"/> 
         <h2 className="product-card-title">{title}</h2>
         <p className="product-card-brand">by {brand}</p>
         <div className="product-card-details">
            <span className="product-card-price">Rs {price}/-</span>
            <div className="product-card-rating-container">
               <span className="product-card-rating">{rating}</span>
               <img
               src="https://assets.ccbp.in/frontend/react-js/star-img.png"
               alt="star"
               className="star"
             />
            </div>
            
         </div>
       </li>
       
      </Link>
       
    )
}
export default ProductCard