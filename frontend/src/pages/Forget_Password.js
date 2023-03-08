import React, { Component } from 'react'
import "./page.css";



class Forget_Password extends Component {
  render() {
     return (
      <div className="login-page-background">
        <div className="container">
        <div className="design">
          <div className="pill-1 rotate-45" />
          <div className="pill-2 rotate-45" />
          <div className="pill-3 rotate-45" />
          <div className="pill-4 rotate-45" />
        </div>
        <div className="login">
          <h3 className="title">Change Password</h3>
          <div className="text-input">
            <i className="ri-user-fill" />
            <input type="email" placeholder="Enter email" />
          </div>
           <button className="login-btnn">SUBMIT</button>
          <div className="text-input">
            <i className="ri-user-fill" />
            <input type="number" placeholder="enter OTP" />
          </div>
          <button className="login-btnn">SUBMIT</button>
          <div className="text-input">
            <i className="ri-lock-fill" />
            <input type="password" placeholder="Enter new Password" />
          </div>
          <div className="text-input">
            <i className="ri-lock-fill" />
            <input type="password" placeholder="Confirm Password"  />
          </div>
          <button className="login-btnn"  >SUBMIT</button>
         
          <div className="create">
            <a href="./"> Login</a>
           {/* <i className="ri-arrow-right-fill" />*/}
          </div>
        </div>
      </div>
      </div>
       
    );
  }
}

export default Forget_Password;
