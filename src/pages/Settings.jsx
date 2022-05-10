import React from 'react'
import '../styles/settings.css'

const Settings = () => {
  return (
    <div className='settings'>
        <div className="settingswrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <button className="settingsDeletebtn">Delete Account</button>
            </div>
             <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                      <img className="settingsImg" src={process.env.PUBLIC_URL + "/twigs.jpg"}
                      alt="" />

                      <label htmlFor="fileInput">
                      <i className=" settingsPPIcon fa-solid fa-user"></i>   
                      </label>
                      <input type="file" id="fileInput" style={{display:"none"}}/>
                </div>
                  <label>Username</label>
                   <input type="text" placeholder="futuregenie" />
                   <label>Email</label>
                   <input type="email" placeholder="futuregenie254@gmail.com" />
                   <label for="phone">Enter your phone number:</label>
                   <input type="tel" id="phone" name="phone" placeholder="Format: 123-456-7890"pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"required/>
                   <label>Old Password</label>
                   <input type="password"placeholder="your old password" />
                   <label>New Password</label>
                   <input type="password"placeholder="your new password" />
                   <label>Confirm New Password</label>
                   <input type="password"placeholder="Confirm your new password" />
                 <button className="settingsSubmit">Update</button>
             </form>
          </div>
        </div>
  )
}

export default Settings