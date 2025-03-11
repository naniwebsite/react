
import BeatLoader from 'react-spinners/BeatLoader'
import Cookies from 'js-cookie'
import {Component} from 'react'
import './index.css'
import ProductCard from '../ProductCard'
import ProductHeader from '../ProductHeader'
import FiltersGroup from '../FiltersGroup'
const sortbyOptions=[
    {
        optionId:'PRICE_HIGH',
        text:'Price (High-Low)'
    },
    {
        optionId:'PRICE_LOW',
        text:'Price (Low-High)'
    },

]
const categoryOptions=[
    {name:'Clothing',categoryId:'1'},
    {name:'Electronics',categoryId:'2'},
    {name:'Appliances',categoryId:'3'},
    {name:'Gorcey',categoryId:'4'},
    {name:'Toys',categoryId:'5'}
]
const ratingsList = [
    {
      ratingId: '4',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png',
    },
    {
      ratingId: '3',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png',
    },
    {
      ratingId: '2',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png',
    },
    {
      ratingId: '1',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png',
    },
  ]

class AllProducts extends Component{
    
    state={
        productList:[],
        activeOptionId:sortbyOptions[0].optionId,
        activeCategoryId:'',
        activeRatingId:'',
        searchInput:'',
        status:'FAILURE'
    }
    componentDidMount(){
        this.getProducts()
    }
    getProducts=async()=>{
        const {activeOptionId,activeCategoryId,
            activeRatingId,searchInput
            }=this.state
        const apiUrl=`https://apis.ccbp.in/products?sort_by=${activeOptionId}&category=${activeCategoryId}&rating=${activeRatingId}&title_search=${searchInput}`
        //const url='https://apis.ccbp.in/products'
        const jwtToken=Cookies.get('jwt_token')
        const options={
            method:'GET',
            headers:{
                Authorization:`Bearer ${jwtToken}`
            }
        }
        const response=await fetch(apiUrl,options)
        const data=await response.json()
        //console.log(data)
        //console.log(response)
        const {products}=data
        //console.log(products)
        if(response.ok){
            if(products.length===0){
                this.setState({
                    productList:[],
                    status:'NO_PRODUCTS'
                })
            }
            else{
                const updateData=products.map(each=>({
                    id:each.id,
                    brand:each.brand,
                    title:each.title,
                    imageUrl:each.image_url,
                    price:each.price,
                    rating:each.rating
               }))
               this.setState({
                   productList:updateData,
                  status:'SUCCESS'
               })
            }
        }
       
    }
    updateActiveOptionId=(activeOptionId)=>{
         console.log(activeOptionId)
         this.setState({
            activeOptionId
         },this.getProducts)
         
    }
    getLoadingView=()=>(
        <div className='loading'>
           <BeatLoader color='#0b68ff'/>
        </div>
    )
    getAllProductsView=()=>{
        const {productList}=this.state
        return(
        <div>
        <ProductHeader
        sortbyOptions={sortbyOptions}
        updateActiveOptionId={this.updateActiveOptionId}
        />
         <ul className="product-list">
            {
              productList.map(each=>
                  <ProductCard productDetails={each}
                   key={each.id}/>
              )
            }
          </ul>
       </div>
        )
    }
    updateCategoryId=(categoryId)=>{
         this.setState({
            activeCategoryId:categoryId
         },this.getProducts)
    }
    updateRatingId=(ratingId)=>{
        this.setState({
            activeRatingId:ratingId
        },this.getProducts)
    }
    updateInput=(searchInput)=>{
        this.setState({
            searchInput
        },this.getProducts)
    }
    clearFilter=()=>{
        this.setState({
            searchInput:'',
            activeCategoryId:'',
            activeRatingId:'',
            activeOptionId:sortbyOptions[0].optionId
        },
        this.getProducts
    )
    }
    
    getNoproductsView=()=>(
    <div className="no-products-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
        alt="no products"
      />
      <h1>No Products Found</h1>
      <p>We could not find any products. Try other filters.</p>
    </div>
    )
     
    getAllViews=()=>{
         const {status}=this.state
         switch(status){
            case 'FAILURE':
                return this.getLoadingView()
            case 'SUCCESS':
                return this.getAllProductsView()
            case 'NO_PRODUCTS':
                return this.getNoproductsView() 
            default:
                return null           
         }
    }
    render(){
       const {searchInput}=this.state
        return(
            <div className="all-products-container">
              <FiltersGroup
              categoryOptions={categoryOptions}
              ratingsList={ratingsList}
              updateCategoryId={this.updateCategoryId}
              updateRatingId={this.updateRatingId}
              updateInput={this.updateInput}
              clearFilter={this.clearFilter}
              searchInput={searchInput}
              
              />
           {this.getAllViews()}
           </div>
        )
    }
}
export default AllProducts