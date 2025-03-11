

import Cookies from 'js-cookie'
import {Component} from 'react'
import './index.css'
class LoginForm extends Component{
    state={
        username:'',
        password:'',

        submiterror:false,
        errorMsg:''

    }
    changedUsername=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    changedPassword=(event)=>{
        this.setState({
            password:event.target.value
        })
    }

   onSumbmitFaliure=(errorMsg)=>{
        console.log(errorMsg)

        this.setState({
            errorMsg,
            submiterror:true
        })
   }
   onSumbmitSuccess=(jwtToken)=>{
        //store JWT Token client-side data storage mechanism COOKIES
       //cookies a piece of data stored on user's computer by the brower
       //sytnax: Cookies.set('CookieName','CookieValue',{expires:DAYS})
       Cookies.set('jwt_token',jwtToken,{expires:30})
       
       const {history}=this.props
       console.log(history)
       history.push('/react')
       console.log('go....')
   }
    submitForm=async(event)=>{
        event.preventDefault()
        const {username,password}=this.state
        const userDetails={username,password}

        const url='https://apis.ccbp.in/login'
        const options={
            method:'POST',
            body:JSON.stringify(userDetails)
        }

        const response=await fetch(url,options)
        const data=await response.json()
        //console.log(data)//returns jwt_token

        //console.log(response)
        if(response.ok===true){
            //console.log(data.jwt_token)
            this.onSumbmitSuccess(data.jwt_token)
        }else{
            console.log(data.error_msg)
            this.onSumbmitFaliure(data.error_msg)
        }

    }

    render(){
        const {submiterror,errorMsg}=this.state
        return(
        <div className="login-container">
            <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" 
            className="login-website-image" alt="website logo"/>
           <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png" 
           className="login-image" alt="website login"/> 
            <form className="form-container"
            onSubmit={this.submitForm}>
              <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" 
            className="login-desktop-image" alt="website logo"/>
              
              
              <div className="input-card">
                 <label className="input-label"
                 htmlFor='username'
                 >USERNAME
                 </label>
                 <input className="user-input"
                 id='username' 
                 type="text"
                 onChange={this.changedUsername}
                 />
              </div>
              
              <div className="input-card">
                 <label  className="input-label"
                 htmlFor='password'
                 >PASSWORD
                 </label>
                 <input className="user-input" 
                 id='password'
                 type="password"
                 onChange={this.changedPassword}
                 />
              </div>
              <button className="login-button" type="submit">Login</button>
              {
                submiterror && <p className="error-msg">*{errorMsg}</p>
              } 
            </form>
            username:rahul password:rahul@2021
         </div>
        )
    }
}
export default LoginForm