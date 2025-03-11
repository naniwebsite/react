//context concept are handle multiple components 
//It is a mechanism to make data available to all the components 
//sytnax: React.createContext(INITIAL_VALUE)
//returns an object with different properties to update an access values from the context


import React from 'react'
const Context=React.createContext({
      cartList:[],
      addCartItem:()=>{
      },
      removeCartItem:()=>{
      },
      incrementQuantity:()=>{
            
      }
})
export default Context