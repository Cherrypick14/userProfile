import React from 'react'
import '../styles/register.css'
import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'

const Register = () => {

  //form validation rules
  const validateSchema= Yup.object().shape({
      name:Yup.string()
      .required("Name can't be blank"),

      email:Yup.string()
      .required("Email is required"),
      
      password:Yup.string()
      .required("Password is required") 
      .min(6,'Password must be at least 6 characters long'),

      repeatPassword:Yup.string()
      .required("repeat password is required")
      .oneOf([Yup.ref('password')], 'Passwords must match')
  });
  const formOptions={resolver: yupResolver(validateSchema)}; //validate our input values using yupResolver

  //build our form with the useForm() hook
  const{register, handleSubmit, reset, formState:{errors}}= useForm(formOptions);
  const onSubmit= (data) =>{
    console.log(data);
    reset();
  } 
  return (
    <div className='register'>
    <span className="registerTitle">create account</span>
   <form className="registerform" onSubmit={handleSubmit(onSubmit)}>
        <label>NAME</label>
        <input type="text"{...register("name",)} className="registerinput" placeholder="your name.."/>
       
        <span>{errors.name?.message}</span>
        <label>EMAIL</label>
        <input type="email" {...register("email",)}className="registerinput" placeholder="your email.."/>
       
        <span>{errors.email?.message}</span>
        <label>PASSWORD</label>
        <input type="password"{...register("password",)}className="registerinput" placeholder="Password..."/>
       
         <span>{errors.password?.message}</span>
       
        <label>REPEAT PASSWORD</label>
        <input type="password"{...register("repeatPassword",)}className="registerinput" placeholder="Repeat your password..."/>
       
         <span>{errors.repeatPassword?.message}</span>
       
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