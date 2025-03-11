
import {BsSearch} from 'react-icons/bs'
import './index.css'
const FiltersGroup=(props)=>{
    const {categoryOptions,ratingsList,
    updateCategoryId,updateRatingId,updateInput,
    clearFilter,searchInput}=props
    
    
    const clickedCategory=(categoryId)=>{
        updateCategoryId(categoryId)
    }
    const clickedRating=(ratingId)=>{
        updateRatingId(ratingId)
    }
    const changedInput=(event)=>{
        updateInput(event.target.value)
    }
    const isFilter=()=>{
        clearFilter()
    }

    return(
        <div className="filters-group-container">

        <div className="input-container">
           <input type="search" placeholder="Search"
           className="search-input"
           value={searchInput}
           onChange={changedInput}/>
          <BsSearch className='search-icon'/>
        </div>
        
         <h1 className="category-heading">
           Category
         </h1>
         <ul className="categories-list">
            {
                categoryOptions.map(each=>
                <li className="category-item"
                key={each.categoryId}
                onClick={()=>clickedCategory(each.categoryId)}>
                {each.name}
                 </li> 
                )
            }

         </ul>

        
        <h1 className="rating-heading">Rating</h1>
        <ul className="rating-list">
            {
                ratingsList.map(each=>
                    <li className="rating-item"
                    key={each.ratingId}
                    onClick={()=>clickedRating(each.ratingId)}
                    >
                    <img src={each.imageUrl} alt="rating 4" 
                    className="rating-image"/>  
                    <span className="rating-name">& up</span>
                   </li>  
                )
            }
        </ul>
        
        <button className="clear-button"
        onClick={isFilter}>
            Clear Filter
        </button>
      </div>
    )
}
export default FiltersGroup