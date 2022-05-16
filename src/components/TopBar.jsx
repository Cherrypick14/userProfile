import React from 'react'
import '../styles/topbar.css'
import {Link} from "react-router-dom"

const TopBar = () => {
   const user = true;
  return (
    <div className='top'>
      <div className="topLeft">
        <i className="topIcon fa-brands fa-github"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fa-brands fa-linkedin"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem"><Link className='link' to="/">HOME </Link></li>
        <li className="topListItem"><Link  className='link'to ="/">ABOUT</Link></li>
        <li className="topListItem"><Link className='link' to ="/">CONTACT</Link></li>
        <li className="topListItem"><Link className='link' to ="/">BLOG</Link></li>
        <li className="topListItem"><Link className='link active' to ="/settings">SETTINGS</Link></li>
        
      </ul>
    </div>
    <div className="topRight">
      
        {user? (
          <img className="topImg" src={process.env.PUBLIC_URL + "/ice-skating.jpg"} alt="" />
         ):(
          <ul className="topList" >
            <li className="topListItem">
            <Link className='link' to ="/login">LOGIN </Link>
            </li>
            <li className="topListItem">
            <Link className='link' to ="/register">REGISTER </Link>
            </li>
          </ul>
          )
        } 
        <div class="input-placeholder">
          <input type="text" name="searchuserName" id="searchuserName" placeholder="Search user"/><span className="topSearchIcon fa-solid fa-magnifying-glass"></span>
     </div> 
        {/* <input type="text"<i className=" topSearchIcon fa-solid fa-magnifying-glass"></i> placeholder="search user"/> */}
        
      </div>
    
    </div>
  )
}

export default TopBar