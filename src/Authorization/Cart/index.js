
import './index.css'
import Header from '../NavHeader'
const Cart=()=>{
    return(
        <div className='website-container'>
        <Header/>
         
         <div className='cart-container'> 
         <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
           alt="products"
          className="cart-img"
         />
         </div>
        
        </div>
    )
}
export default Cart