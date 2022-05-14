import React from 'react'
import Sidebar from '../components/Sidebar'
import '../styles/settings.css'

const Settings = () => {
  return (
    <div className='settings'>
      <Sidebar />
        <div className="settingswrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle" id="profileupdate">Update Your Profile</span>
                {/* <button className="settingsDeletebtn">Delete Account</button> */}
            </div>
             <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                      <img className="settingsImg" src={process.env.PUBLIC_URL + "/ice-skating.jpg"}
                      alt="profile-pic" />

                      <label htmlFor="fileInput">
                      <i className=" settingsPPIcon fa-solid fa-user"></i>   
                      </label>
                      <input type="file" id="fileInput" style={{display:"none"}}/>
                </div>
                  <label>Name</label>
                   <input type="text" placeholder="futuregenie" />
                   <label>Email</label>
                   <input type="email" placeholder="futuregenie254@gmail.com" />
                   <label>Bio:</label>
                   <textarea id="w3review" name="w3review" rows="10" cols="30" placeholder='Type something about yourself...'>
                  
                   </textarea>
                   <label>Twitter Username</label>
                   <input type="text" />
                   <label>Personal Website</label>
                   <input type="text" placeholder="example@www.codementor.com" />
                   <label>Location</label>
                   <input type="text" />
                  
                 <button className="settingsSubmit">Update profile</button>
             </form>
             
             <form className='settingsForm'>
               <label id="passwordupdate"style={{paddingBottom:10,fontWeight:600,color:'#8A3953'}}>Change Password</label>
               <hr/>
               <label className='oldlabel'>Old Password</label>
               <input type="password" placeholder="enter old Password..."/>
               <label>New Password</label>
               <input type="password"  placeholder="enter new Password..."/>
               <label>Confirm new Password</label>
               <input type="password" placeholder="Confirm new password..." />
               <div className='profbtns'>
               <button className='updatePassword'>Update Password</button>
               
               <button className="settingsDeletebtn">Delete Account</button>
               </div>
               
             </form>
          </div>
        </div>
  )
}

export default Settings