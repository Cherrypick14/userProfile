import React from 'react'
import '../styles/header.css'


const Header = () => {
  return (
    <div className='header'>
         <div className="headerTitles">
             <span className="headerTitlesmall">Tours and Travel</span>
             <span className="headerTitlebig">welcome to future.me!</span>
         </div>
         <img className="headerImg"src={process.env.PUBLIC_URL + "/misty-forest.jpg"} alt="landscape" />
    </div>
  )
}

export default Header