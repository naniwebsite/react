
import {Component} from 'react'
import Context from '../Context'
import './index.css'

class CartItem extends Component{
    state={
        quantity:this.props.itemDetails.quantity,
    }
    
    render(){
        const{quantity}=this.state
        const {itemDetails}=this.props
       const{price,brand,imageUrl,title,id}=itemDetails
        
        return(
            <Context.Consumer>
            {
              (value)=>{
                  const {removeCartItem,incrementQuantity}=value
                  const deleteCart=()=>{
                    removeCartItem(id)
                  }
                
                  const increment=()=>{
                    
                       this.setState(prevState=>({
                        quantity:prevState.quantity+1,  
                   }) ,incrementQuantity(quantity+1,id)) 
                  
                 }
                 const decrement=()=>{
                   if(quantity>1){
                    this.setState(prevState=>({
                      quantity:prevState.quantity-1,
                      
                    }),incrementQuantity(quantity-1,id))
                   }
                 }
                 
                 
                  return(
                    <>
                    
                      <li className="cart-item">
                      <img src={imageUrl} alt={title} 
                      className="cart-product-image"/>
                      <div>
                         <p className="cart-product-title">{title}</p>
                         <p className="cart-product-brand">by {brand}</p>
                       </div>
                       <div className="cart-quantity-container">
                         <button type="button"
                        onClick={decrement}>
                           -
                         </button>
                         <p className="cart-quantity">{quantity}</p>
                         <button type="button"
                         onClick={increment}>
                           +
                         </button>
                          <p className="cart-total-price">Rs {price*quantity}/-</p>
                     
                     </div>
                     <button className="remove-button" 
                     onClick={deleteCart}
                     type="button">
                      Remove
                    </button>   
                      </li>
                      
                      
                      </>
                  )
                    
              }
            }
          </Context.Consumer>  
        )
    }
}

export default CartItem