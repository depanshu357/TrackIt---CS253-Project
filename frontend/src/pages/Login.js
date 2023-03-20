import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import "./style.css";

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  return (
    <>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap" rel="stylesheet"></link>
      <link rel="stylesheet" href="./style.css"></link>
      {/* <div className="login-page-background">
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
            {/*</div>
          </form>
        </div> */}
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
      {/* </div> */}
      <section class="ftco-section">
      <div class="container1">
      <div class="row justify-content-center">
        <div class="col-md-12 col-lg-10">
          <div class="wrap d-md-flex">
            <div class="img" 
            // style ="background: url(IMG_20220816_095445457 (2).jpg"
            ><img src="https://i.postimg.cc/Ghz0mN4z/login.jpg"/></div>
            <div class="login-wrap p-4 p-md-5">
              <div class="d-flex">
                <div class="w-100">
                  <h3 class="mb-4">User Login</h3>
                </div>
                
              </div>
                <form onSubmit={handleSubmit} class="signin-form">
                  <div class="form-group mb-3">
                    <label class="label" for="name">Username</label>
                    <input type="email"
                    placeholder="Email"
                    class="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}/>
                  </div>
                  <div class="form-group mb-3">
                    <label class="label" for="password">Password</label>
                    <input type="password"
                    placeholder="Password"
                    class="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}/>
                  </div>
                  <div class="form-group">
                    <button disabled={isLoading} class="form-control btn btn-primary rounded submit px-3">Sign In</button>
                  </div>
                  <div class="form-group d-md-flex">
                    {/* <div class="w-50 text-left">
                      <label class="checkbox-wrap checkbox-primary mb-0">Remember Me
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                      </label>
                    </div> */}
                    <div class="w-50 text-md-center">
                    <a href="/Forget_Password" className="forgot">
                      Forgot Password?
                    </a>
                    {error && <div className="error">{error}</div>}
                    </div>
                  </div>
                </form>
                <p class="text-center">Not a member? <a href="./signup"> Register</a></p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
    </>
  );
};

export default Login;
{/* <section class="ftco-section">
  <div class="container">
    <div class="col-md-12 col-lg-10">
      <div class="wrap d-md-flex">
        <div class="img" style ="background-image: url(frontend\src\images\IMG_20220816_095445457 (2).jpg);"></div>
        <div class="login-wrap p-4 p-md-5">
          <div class="d-flex">
            <div class="w-100">
              <h3 class="mb-4">User Login</h3>
            </div>
            <form onSubmit={handleSubmit} class="signin-form">
			      	<div class="form-group mb-3">
			      		<label class="label" for="name">Username</label>
                <input type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}/>
              </div>
              <div class="form-group mb-3">
                <label class="label" for="password">Password</label>
                <input type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}/>
              </div>
              <div class="form-group">
                <button disabled={isLoading} class="form-control btn btn-primary rounded submit px-3">Sign In</button>
              </div>
              <div class="form-group d-md-flex">
                {/* <div class="w-50 text-left">
                  <label class="checkbox-wrap checkbox-primary mb-0">Remember Me
                  <input type="checkbox" checked>
                  <span class="checkmark"></span>
                  </label>
                </div> */}
                {/*<div class="w-50 text-md-right">
                <a href="/Forget_Password" className="forgot">
                  Forgot Password?
                </a>
                {error && <div className="error">{error}</div>}
                </div>
              </div>
		        </form>
            <p class="text-center">Not a member? <a href="./signup"> Register</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}