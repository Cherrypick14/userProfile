import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/sidebar.css"

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sideBarItem">
          <span className="sideBarTitle">Your Personal Account</span>
          <img style={{height:350,width:350}}src={process.env.PUBLIC_URL + "/ice-skating.jpg"} alt="ice-profile" />
        </div>
        <div className="sideBarItem">
        <span className="sideBarTitle2">CATEGORIES</span>
        <div className="Profile-details">
        <ul className="sideBarList">
             <li className="sideBarListItem"><a href="#profileupdate"><i className=" fa-solid fa-user">&nbsp;&nbsp;&nbsp;</i>Public Profile</a></li>
             <li className="sideBarListItem"><a href="#passwordupdate"><i className="fa-solid fa-key">&nbsp;&nbsp;&nbsp;</i>Password</a></li>
             <li className="sideBarListItem"><Link className='link' to="/viewprofile"><i className="fa-solid fa-user">&nbsp;&nbsp;&nbsp;</i>View Profile</Link></li>
          </ul>
          
        </div>
         
        </div>
    </div>
  )
}

export default Sidebar