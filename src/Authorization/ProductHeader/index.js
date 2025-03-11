
import {BsFilterRight} from 'react-icons/bs'
import './index.css'

const ProductHeader=(props)=>{
   const {sortbyOptions,updateActiveOptionId}=props
   const changeSort=(event)=>{
      //console.log(event.target.value)
      updateActiveOptionId(event.target.value)
   }
    return(
        <div className="products-header">
        <h1 className="products-header-title">All Products</h1>
        <div className="sort-container">
         <BsFilterRight className='sort-icon'/>
          <h1 className="sort-heading">Sort by</h1>
          <select className="sort-by-select"
          onChange={changeSort}
         >
            {
               sortbyOptions.map(each=>
               <option 
                key={each.optionId}
                value={each.optionId}
                className="select-option">
                 {each.text}
               </option>
               )
            }
             
          </select>
        </div>
      </div>
    )
}
export default ProductHeader