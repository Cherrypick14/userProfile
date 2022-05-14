import React from 'react'
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
             <li className="sideBarListItem"><a href="#profileupdate"><i className=" fa-solid fa-user"></i>Profile</a></li>
             <li className="sideBarListItem"><a href="#passwordupdate"><i class="fa-solid fa-key"></i>Password</a></li>
          </ul>
        </div>
         
        </div>
    </div>
  )
}

export default Sidebar