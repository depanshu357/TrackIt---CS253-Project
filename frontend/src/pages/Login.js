<<<<<<< HEAD
import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import "./page.css";
=======
import { useState } from "react"
import { useLogin } from "../hooks/useLogin"
>>>>>>> 24265d28e8e98792efa3236e125f874d74ff5076

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  return (
<<<<<<< HEAD
    <>
      <div className="login-page-background">
        <div className="container">
          <div className="design">
            <div className="pill-1 rotate-45" />
            <div className="pill-2 rotate-45" />
            <div className="pill-3 rotate-45" />
            <div className="pill-4 rotate-45" />
          </div>
          <form className="login" onSubmit={handleSubmit}>
            <h3 className="title">User Login</h3>
            <div className="text-input">
              <i className="ri-user-fill" />
              <input
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="text-input">
              <i className="ri-lock-fill" />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <button className="login-btn" disabled={isLoading}>
              LOGIN
            </button>
            <a href="/Forget_Password" className="forgot">
              Forgot Password?
            </a>
              {error && <div className="error">{error}</div>}
            <div className="create">
              <a href="./signup"> Register</a>
              {/* <i className="ri-arrow-right-fill" />*/}
            </div>
          </form>
        </div>
        {/* <form className="login" onSubmit={handleSubmit}>
        <h3>Log In</h3>
        
        <label>Email address:</label>
        <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        />
        <label>Password:</label>
        <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        />
        <button disabled={isLoading}>Log in</button>
        <p>
        New User? <a href="/signup">Register Here</a>
        </p>
        {error && <div className="error">{error}</div>}
      </form> */}
      </div>
    </>
  );
};
=======
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>
      
      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />
      <button disabled={isLoading}>Log in</button>
      <p>New User? <a href="/signup">Register Here</a></p>
      {error && <div className="error">{error}</div>}
    </form>
  )
}
>>>>>>> 24265d28e8e98792efa3236e125f874d74ff5076

export default Login