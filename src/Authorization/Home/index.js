
import Header from '../NavHeader'
import './index.css'
const Home=(props)=>{

    const clickToShopping=()=>{
       const {history}=props
       history.push('/products')
    }
    return(
      <div className='website-container'>
        <Header/>

        <div className="home-container">
            <div className="home-content">
                <h1 className="home-heading">
                    Clothes That Get YOU Noticed
                </h1>
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png" alt="dresses to be noticed" 
                     className="home-moblie-img"/>
                <p className="home-paragraph">
                    Fashion is part of the daily air and it
                    does not quite help that it changes all
                    the time.Clothes have always been a marker of the
                    era and we are in a revolution.Your fashion makes
                    you been seen and heard that way you are.So,celebrate
                    the seasons new and exciting fashion in your own way.
                </p>
                <button className="home-button"
                onClick={clickToShopping}>
                    Shop Now
                </button>
                </div>
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png" alt="dresses to be noticed" 
                className="home-desktop-img"/>
   
        </div>

      </div>
    )
}
export default Home