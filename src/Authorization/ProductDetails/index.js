
import BeatLoader from 'react-spinners/BeatLoader'
import Cookies from 'js-cookie'
import {Component} from 'react'
import './index.css'
import NavHeader from '../NavHeader'
import ProductItemDetails from '../ProductItemDetails'
import SimilarProducts from '../SimilarProducts'
import Context from '../Context'
class ProductDetails extends Component{
     state={
        itemDetails:{},
        similarItems:[],
        isLoading:true,
        quantity:1
     }
    componentDidMount(){
        this.getProductDetails()
    }
    getProductDetails=async()=>{
         const {match}=this.props
         //console.log(match)
         const {params}=match
         const {id}=params
         //console.log(id)
         const jwtToken=Cookies.get('jwt_token')
         const url=`https://apis.ccbp.in/products/${id}`
         const options={
            method:'GET',
            headers:{
                Authorization:`Bearer ${jwtToken}`
            }
         }
         const response=await fetch(url,options)
         const data=await response.json()
         //console.log(response)
         //console.log(data)

         const {similar_products}=data
         //console.log(similar_products)

         const updateProductItem={
            id:data.id,
            availability:data.availability,
            brand:data.brand,
            description:data.description,
            imageUrl:data.image_url,
            price:data.price,
            rating:data.rating,
            title:data.title,
            totalReviews:data.total_reviews
         }
         const updateSimilarItems=similar_products.map(each=>({
              id:each.id,
              title:each.title,
              brand:each.brand,
              price:each.price,
              rating:each.rating,
              imageUrl:each.image_url
         }))
         this.setState({
                itemDetails:updateProductItem,
                similarItems:updateSimilarItems,
                isLoading:false
         })
    }
    
    increment=()=>{
        this.setState(prevState=>({quantity:prevState.quantity+1}))
     }
     decrement=()=>{
        this.setState(prevState=>({
            quantity:prevState.quantity>1?prevState.quantity-1:1
        }))
     }
     
    getSuccessView=()=>(
        <Context.Consumer>
         {
            (value)=>{
                const {addCartItem}=value
             const {itemDetails,similarItems,quantity}=this.state
            const addCart=()=>{
            addCartItem({...itemDetails,quantity})
            //console.log({...itemDetails,quantity})
         }
        
       return(
        <div className='website-container'>
        <NavHeader/>
       <div className="products-details">
          <ProductItemDetails
          itemDetails={itemDetails}
           increment={this.increment}
           decrement={this.decrement}
           quantity={quantity}
           addCart={addCart}
          />
          <SimilarProducts
          similarItems={similarItems}/>
       </div>
       </div>
       ) 
        }
         }
        </Context.Consumer>
        
        )
    getFailureView=()=>(
        <div className='loadingIs'>
         <BeatLoader/>
        </div>
        
    )

    
    render(){
        const {isLoading}=this.state
       return(
           isLoading?this.getFailureView():this.getSuccessView()
         )
    }
}
export default ProductDetails