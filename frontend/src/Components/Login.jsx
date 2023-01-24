import React from 'react'
import "./loginStyles.css"
const Login = () => {
    const api  = "http://localhost:5000";
  return (
    <div>
      <form action={api+"/login"} method="POST" className='login-form'>

        {/* <label htmlFor="login-name" >Name</label>
        <input type="text" className='login-name' placeholder='Name' name="name"/> */}
        <label htmlFor="login-email" >Email</label>
        <input type="email" className="login-email" name="email"/>
        <label htmlFor="login-password">Password</label>
        <input type="password" className='login-password' name="password"/>
        <button type='submit'>Submit</button>
        <div>New User? <a href="/register">Register Here</a></div>
      </form>
    </div>

  )
}

export default Login
