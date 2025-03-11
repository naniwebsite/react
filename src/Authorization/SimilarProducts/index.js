
import {Link} from 'react-router-dom'
import './index.css'
const SimilarProducts=(props)=>{
  const {similarItems}=props
  //console.log(similarItems)
    return(
        <div className="similar-products">
            <h1 className="similar-product-heading">Similar Products</h1>
            <ul className="similar-products-list">
              {
                similarItems.map(each=>
                  <Link to={`/products/${each.id}`}
                  className='link' key={each.id}>
                  <li className="similar-product-item"
                  >
                <img src={each.imageUrl}alt="product" 
                className="similar-product-image"/> 
                 <h2 className="similar-product-title">{each.title}</h2>
                 <p className="similar-product-brand">by {each.brand}</p>
                 <div className="similar-product-details">
                    <span className="similar-product-price">Rs {each.price}/-</span>
                    <div className="similar-product-rating-container">
                       <span className="similar-product-rating">{each.rating}</span>
                       <img
                       src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                       alt="star"
                       className="similar-product-star"
                     />
                    </div>
                    
                 </div>
                  </li>
                  </Link>
                
                )
              }
               
           </ul>
         </div>
    )
}
export default SimilarProducts