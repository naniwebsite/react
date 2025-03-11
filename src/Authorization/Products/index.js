
import './index.css'
import Header from '../NavHeader'
import PrimeDeals from '../PrimeDeals'
import AllProducts from '../AllProducts'
const Products=()=>{
    return(
        <div className='website-container'>
        <Header/>
         
         <div className='products-container'> 
           <PrimeDeals/>
           <AllProducts/>
         </div>
        
        </div>
    )
}
export default Products

//<img
//src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
//alt="products"
//className="products-img"
// />