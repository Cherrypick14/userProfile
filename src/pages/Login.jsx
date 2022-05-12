import React from 'react'
import '../styles/login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  const onSubmit =(e)=>{
    e.preventDefault();
    console.log("successful submission")
   }
  return (
    <div className='login'>
          <span className="loginTitle">Welcome to future.me</span>
         <form className="loginform" onSubmit={onSubmit}>
              <label>Email</label>
              <input type="email" className="logininput" placeholder="enter your email.."/>
              <label>Password</label>
              <input type="password"className="logininput" placeholder="enter your password..."/>
              <button className="loginButton">Login</button>
         </form>
          
          <div className='moreinfo2'>
              <Link className="link"to="/register">Create Account</Link>
              <span className='forgotpass'>Forgot Password?</span>
          </div>
         
    </div>
  )
}

export default Login