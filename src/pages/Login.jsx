import React from 'react'
import '../styles/login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
          <span className="loginTitle">Welcome to future.me</span>
         <div className="loginform">
              <label>Email</label>
              <input type="email" className="logininput" placeholder="enter your email.."/>
              <label>Password</label>
              <input type="password"className="logininput" placeholder="enter your password..."/>
              <button className="loginButton">Login</button>
         </div>
          
          <div className='moreinfo2'>
              <Link className="link"to="/register">Create Account</Link>
              <span className='forgotpass'>Forgot Password?</span>
          </div>
         
    </div>
  )
}

export default Login