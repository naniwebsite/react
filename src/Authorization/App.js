import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import {Component} from 'react'
import LoginForm from "./LoginForm"
import Home from './Home'
import Products from "./Products"
import Cart1 from './Cart1'
import NotFound from "./NotFound"
import ProductDetails from './ProductDetails'
import Context from './Context'
class App extends Component{
    state={
        cartList:[]
    }
    addCartItem=(product)=>{
        this.setState(prevState=>({
            cartList:[...prevState.cartList,product]
        }))
    }
    removeCartItem=(id)=>{
        const {cartList}=this.state
        const list=cartList.filter(each=>
            each.id!==id
        )
        this.setState({
            cartList:list
        })
    }
    incrementQuantity=(quantity,id)=>{
        const {cartList}=this.state
        const i=cartList.filter(each=>{
            if(each.id===id){
                return each.quantity=quantity
            }
            return each
        })
            
        
        this.setState({
            cartList:i
        })
        

    }
    render(){
        const {cartList}=this.state
        //console.log(cartList)
        return(
            <BrowserRouter>
            <Context.Provider
            value={{
                cartList,
                addCartItem:this.addCartItem,
                removeCartItem:this.removeCartItem,
                incrementQuantity:this.incrementQuantity
            }}
            >
               
            <Switch>
                <Route exact path='/react' component={Home}/>
                <Route exact path='/products' component={Products}/>
                <Route exact path='/cart' component={Cart1}/>
                <Route exact path='/login' component={LoginForm}/>
                <Route exact path='/products/:id' component={ProductDetails}/>
                <Route exact path='/not-found' component={NotFound}/>
                <Redirect to='/not-found'/>
            </Switch>
            </Context.Provider>
           
            </BrowserRouter>
        )
    }
}

export default App