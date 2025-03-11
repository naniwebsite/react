
import Cookies from 'js-cookie'
import {Component} from 'react'
import BeatLoader from 'react-spinners/BeatLoader'
import './index.css'
import ProductCard from '../ProductCard'
const apiStatus={
    success:'Success',
    failure:'Faliure',
    inProgress:'In_Progress'
}

class PrimeDeals extends Component{
     state={
        primeList:[],
        status:''
     }
    componentDidMount(){
       this.getPrimeDeals()
    }
    getPrimeDeals=async()=>{
        this.setState({
            status:apiStatus.inProgress
        })
        const jwtToken=Cookies.get('jwt_token')
        //console.log(jwtToken)
        
        const url='https://apis.ccbp.in/prime-deals'
        const options={
            method:'GET',
            headers:{
            AuthoriZation:`Bearer ${jwtToken}`
            }
        }

        const response=await fetch(url,options)
        const data= await response.json()
        //console.log(response)
        //console.log(data)

       if(response.ok===true){
            const {prime_deals}=data
            //console.log(prime_deals)

            const updateData=prime_deals.map(each=>({
                 id:each.id,
                 brand:each.brand,
                 title:each.title,
                 imageUrl:each.image_url,
                 price:each.price,
                 rating:each.rating
            }))
            this.setState({
                primeList:updateData,
                status:apiStatus.success
                
            })
       }
       else{
           this.setState({
            status:apiStatus.failure
           })
       }

    }

    getSuccessView=()=>{
        const {primeList}=this.state
        return(
            <div className="prime-deals-container">
             <h1 className="prime-heading">Exclusive Prime Deals</h1>
             <ul className="prime-deals-list">
                {
                    primeList.map(each=>
                        <ProductCard productDetails={each}
                         key={each.id}/>
                    )
                }
             </ul>
          </div>
        )
    }
    getFailureView=()=>(
        <img
        src="https://assets.ccbp.in/frontend/react-js/exclusive-deals-banner-img.png"
        alt="Register Prime"
        className="register-prime-image"
      />
    )
    getLoadingView=()=>(
        <div className='loading-view'>
           <BeatLoader color='#0b69ff'/>
        </div>
       
    )
    render(){
        const {status}=this.state
        switch(status){
          case apiStatus.success:
            return this.getSuccessView()
          case apiStatus.failure:
            return this.getFailureView()
          case apiStatus.inProgress:
            return this.getLoadingView()
          default:
            return null  
        }
               
    }
}
export default PrimeDeals