import React from 'react'
import "./signUpStyles.css"
const SignUp = () => {
    const api  = "http://localhost:5000";
  return (
    <div>
      <form action={api+"/register"} method="POST" className='signUp-form'>
        <label htmlFor="register-name">Name</label>
        <input type="text" className='register-name' name='name' placeholder='Name'/>
        <label htmlFor="register-email">Email</label>
        <input type="email" className="register-email" name="email"/>
        <label htmlFor="register-password">Password</label>
        <input type="password" className='register-password' name='password' />
        <button type='submit'>Submit</button>
        <label for="userType">Choose a car:</label>

        <select name="userType" id="userType">
          <option value="customer">Customer</option>
          <option value="Shopkeeper">ShopKeeper</option>
        </select>
        <div>Already a user? <a href="/login">Login Here</a></div>
      </form>
    </div>
  )
}

export default SignUp
