//context object provides two properties:Consumer,Provider
//we can accesss value the context using counsumer component provided by context object
//syntax:<ContextObject.Consumer> {callback function} </ContextObject.Consumer>


import CartEmpty from '../CartEmpty'
import CartList from '../CartList'
import Context from '../Context'
import Header from '../NavHeader'
import './index.css'
const Cart1=()=>(
    <Context.Consumer>
     {
        (value)=>{
            const {cartList}=value
           // console.log(cartList)
            const showEmptyView=cartList.length===0
            const i=cartList.map(t=> 
                 t.quantity*t.price  
            )
            //console.log(i)
            let s=0;
            for(let j of i){
                s=s+j
            }
           //console.log(s)

            return(
             <div className='website-container'>
                <Header/>
                {
                    showEmptyView?<CartEmpty/>
                    :
                    <div className="cart-box">
                  
                   <h1 className="cart-head">My Cart</h1>
                     <CartList/>
                     <div className='total-price1'>
                     <span className="price">Rs {s}/-</span>
                    <span className="price">Total Price</span>
                     
                     </div>
                    
                   </div>
               
                }
                
             </div>
            )
        }
     }
    </Context.Consumer>
)
export default Cart1