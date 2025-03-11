import {Link,withRouter} from 'react-router-dom'
import Context from '../Context'
import './index.css'
const Header=(props)=>{
  const clickedLogout=()=>{
     const {history}=props
     console.log(history)
     history.push('/login')//withRouter used to work

  }
  const cartCount=()=>(
    <Context.Consumer>
    {
      value=>{
           const {cartList}=value
           const cartLength=cartList.length
        return(
          <>
           {cartLength>0?
            <span className='cart-count'>{cartList.length}</span>
            :null
           }
          </>
        )
      }
    }
    </Context.Consumer>
  )

  
    return(
        <nav className="nav-header">
        <div className="nav-content">
         <img className="website-logo" src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" 
         alt="website logo"/> 
         <ul className="nav-menu">
             <li>
                 <Link className='nav-link' to='/react'>Home</Link>
             </li>
             <li>
                <Link className='nav-link' to='/products'>Products</Link>
             </li>
             <li>
                 <Link className='nav-link' to='/cart'>Cart{cartCount()}</Link>
             </li>
            <li>
             <button className="logout-button"
             onClick={clickedLogout}>Logout</button>
            </li>
         </ul> 
       <button className="log-button"
       onClick={clickedLogout}>
     <img
     src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
     alt="logout icon"
     className="logout-icon"
   />
       </button> 
     </div>  

     <ul className="nav-moblie-layout">
          <li>
            <Link to='/react'>
            <img
         src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
         alt="nav home"
         className="nav-image-moblie-layout"
          />
            </Link>
            
          </li>
          <li>
          <Link to='/products'>
            <img
         src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
         alt="nav home"
         className="nav-image-moblie-layout"
          />
            </Link>
          </li>
          <li>
          <Link to='/cart' className='count-link'>
            <img
         src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
         alt="nav home"
         className="nav-image-moblie-layout"
          />{cartCount()}
            </Link>
          </li>
       </ul>
       
        
      </nav>
    )
}
export default withRouter(Header)