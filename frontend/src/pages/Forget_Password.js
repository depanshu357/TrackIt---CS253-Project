import React, { Component, useState } from "react";
import "./page.css";

const Forget_Password = () => {
  const [email, setEmail] = useState(null);
  const [Otp, setOtp] = useState(null);
  // const [otp,setFetchedOtp] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [temp,setTemp] = useState(null)

  var otp = null;
  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    otp = Math.floor(100000 + Math.random() * 900000);
    console.log(otp);
    setTemp(otp);
    const otp_email = { otp, email };

    const fetchOtp = async () => {
      const response = await fetch("/api/user/signup/otp", {
        method: "POST",
        body: JSON.stringify(otp_email),
        headers: { "Content-Type": "application/json" },
      });
      const json = await response.json();
    };
    fetchOtp();
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    const updatePassword = { email, password };
    console.log(temp ,Otp)
    if ((temp.toString()) !== Otp) {
      setMessage("Wrong OTP");
    } else if (confirmPassword !== password) {
      setMessage("Passwords do not match");
    } else {
        console.log("ok to proceed")
        const fetchUpdatePassword = async() =>{

            const response = await fetch("/api/user/signup/updatePassword", {
                method: "POST",
                body: JSON.stringify(updatePassword),
                headers: { "Content-Type": "application/json" },
            });
            const json = await response.json();
            console.log(response)
            if (response.ok) {
              setMessage("Password successfully updated, Please go to Login Page");
            } else {
              setMessage("Error in updating password, Please try again");
            }
        }
        fetchUpdatePassword();
    }
  };

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
            <input
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              value={email}
            />
          </div>
          <button className="login-btnn" onClick={sendEmail}>
            send OTP
          </button>
          <div className="text-input">
            <i className="ri-user-fill" />
            <input
              type="number"
              placeholder="enter OTP"
              value={Otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
          {/* <button className="login-btnn">SUBMIT</button> */}
          <div className="text-input">
            <i className="ri-lock-fill" />
            <input
              type="password"
              placeholder="Enter new Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="text-input">
            <i className="ri-lock-fill" />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button className="login-btnn" onClick={handleSubmit}>
            SUBMIT
          </button>

          <div className="create">
            <a href="./"> Login</a>
            {/* <i className="ri-arrow-right-fill" />*/}
          </div>
          <div>{message}</div>
        </div>
      </div>
    </div>
  );
};

export default Forget_Password;