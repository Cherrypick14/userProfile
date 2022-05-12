import React from 'react'
import '../styles/register.css'
import { Link } from 'react-router-dom'

const Register = () => {
   const onSubmit =(e)=>{
    e.preventDefault();
    console.log("successful submission")
   }
  return (
    <div className='register'>
    <span className="registerTitle">create account</span>
   <form className="registerform" onSubmit={onSubmit}>
        <label>NAME</label>
        <input type="text" className="registerinput" placeholder="your name.."/>
        <label>EMAIL</label>
        <input type="email" className="registerinput" placeholder="your email.."/>
        <label>PASSWORD</label>
        <input type="password"className="registerinput" placeholder="Password..."/>
        <label>REPEAT PASSWORD</label>
        <input type="password"className="registerinput" placeholder="Repeat your password..."/>

        <button className="registerButton">Sign Up</button>
   </form>
  <div className='moreInfo'>
      <span>Have an account?</span>
     <Link className="link"to ="/login">Login here</Link>
  </div>
</div>
  )
}

export default Register