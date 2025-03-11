
import CartItem from '../CartItem'
import Context from '../Context'
import './index.css'
const CartList=()=>(
     <Context.Consumer>
      {
        value=>{
            const {cartList}=value
          return(
            //console.log(cartList)
            <ul className="cart-list">
              {
              cartList.map(each=>
                <CartItem itemDetails={each} key={each.id}/>
              )
              }
            
          </ul>
          )
        }
      }
     </Context.Consumer>
)
  
export default CartList