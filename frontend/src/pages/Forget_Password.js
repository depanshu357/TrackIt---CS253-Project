import React, { Component, useState } from "react";
import "./style.css";

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

//   return (
//     <div className="login-page-background">
//       <div className="container">
//         <div className="design">
//           <div className="pill-1 rotate-45" />
//           <div className="pill-2 rotate-45" />
//           <div className="pill-3 rotate-45" />
//           <div className="pill-4 rotate-45" />
//         </div>
//         <div className="login">
//           <h3 className="title">Change Password</h3>
//           <div className="text-input">
//             <i className="ri-user-fill" />
//             <input
//               type="email"
//               placeholder="Enter email"
//               onChange={(e) => setEmail(e.target.value)}
//               disabled={isLoading}
//               value={email}
//             />
//           </div>
//           <button className="login-btnn" onClick={sendEmail}>
//             send OTP
//           </button>
//           <div className="text-input">
//             <i className="ri-user-fill" />
//             <input
//               type="number"
//               placeholder="enter OTP"
//               value={Otp}
//               onChange={(e) => setOtp(e.target.value)}
//             />
//           </div>
//           {/* <button className="login-btnn">SUBMIT</button> */}
//           <div className="text-input">
//             <i className="ri-lock-fill" />
//             <input
//               type="password"
//               placeholder="Enter new Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <div className="text-input">
//             <i className="ri-lock-fill" />
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//           </div>
//           <button className="login-btnn" onClick={handleSubmit}>
//             SUBMIT
//           </button>

//           <div className="create">
//             <a href="./"> Login</a>
//             {/* <i className="ri-arrow-right-fill" />*/}
//           </div>
//           <div>{message}</div>
//         </div>
//       </div>
//     </div>
//   );
// };
return (
  <>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap" rel="stylesheet"></link>
    <link rel="stylesheet" href="./style.css"></link>
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
                  <h3 class="mb-4">Change Password</h3>
                </div>
                
              </div>
                <form onSubmit={handleSubmit} class="signin-form">
                  <div class="form-group mb-3">
                    <label class="label" for="name">Username</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Enter email"
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isLoading}
                      value={email}
                    />
                    <button className="form-control btn btn-primary rounded submit px-3" onClick={sendEmail}>Send OTP</button>
                  </div>
                  <div class="form-group mb-3">
                    <label class="label" for="password">OTP:</label>
                    <input
                      type="number"
                      placeholder="Enter OTP"
                      value={Otp}
                      class="form-control"
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </div>
                  <div class="form-group mb-3">
                    <label class="label" for="password">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Enter New Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div class="form-group mb-3">
                    <label class="label" for="password">Re-enter Password</label>
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      class="form-control"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <button className="form-control btn btn-primary rounded submit px-3" onClick={handleSubmit} disabled={isLoading}>
                    Submit
                  </button>
                  {/* <div className="create">
                    <a href="./">Back to Login</a>
                    <i className="ri-arrow-right-fill" />
                  </div> */}
                  <p class="text-left">Back to <a href="./">Login</a></p>
                  <div>{message}</div>
                </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
    {/* <div className="singup-page-background">
      <div className="container">
        <div className="design">
          <div className="pill-1 rotate-45" />
          <div className="pill-2 rotate-45" />
          <div className="pill-3 rotate-45" />
          <div className="pill-4 rotate-45" />
        </div>
        <form className="login signup" onSubmit={handleSubmit}>
          <h3 className="title">Register</h3> */}
          {/* <div className="text-input">
          <i className="ri-user-fill" />
          <input type="text" placeholder="First Name" />
        </div>
        <div className="text-input">
          <i className="ri-user-fill" />
          <input type="text" placeholder="Last Name" />
        </div> */}

          {/* <div className="text-input email-verify">
            <i className="ri-user-fill" />
            <input
              placeholder="Email id"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <button className="verify-btn" onClick={sendEmail}>Verify</button>
          </div>



          <div className="text-input">
            <i className="ri-user-fill" />
            <label>OTP:</label>
            <input type="number"
              onChange={(e) => setOTP(e.target.value)}
              value={OTP}
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
          <select className="text-input" onChange={onOptionChangeHandler}>
            <i className="ri-user-fill" /> */}
            {/* <input
          placeholder="Email id"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email} /> */}
            {/* <option>Please choose one option</option>
            {options.map((option, index) => {
              return <option key={index}>{option}</option>;
            })}
          </select>
          <div className="text-input">
            <i className="ri-user-fill" /> */}
            {/* <input
          placeholder="Email id"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email} /> */}
            {/* {userType === "Customer" && (
              <div>
                <input
                  type="number"
                  value={rollNo}
                  onChange={(e) => setRollNo(e.target.value)}
                  placeholder="IITK RollNo"
                />
              </div>
            )}

            {userType === "Shopkeeper" && (
              <div>
                <input
                  type="text"
                  value={shopName}
                  onChange={(e) => setShopName(e.target.value)}
                  placeholder="ShopName"
                />
              </div>
            )}
          </div>
          <button className="login-btn" disabled={isLoading}>
            SUBMIT
          </button>
          {error && <div className="error">{error}</div>}
          <div className="create">
            <a href="/login"> Registered Already? Log in</a>
            <i className="ri-arrow-right-fill" />
          </div>
        </form>
      </div> */}

      {/* <form className="signup" onSubmit={handleSubmit}>
    <h3>Sign Up</h3>

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
      /> */}
      {/* <label> IITK Roll Number</label>
    <input
    type="text"
    onChange={(e) => setRollNo(e.target.value)}
    value={rollNo}
  /> */}

      {/* <select onChange={onOptionChangeHandler}>
      <option>Please choose one option</option>
      {options.map((option, index) => {
        return <option key={index}>{option}</option>;
      })}
    </select>

    {
      (userType==="Customer") && <div>
        <label >IITK RollNo: </label>
        <input
         type="number"
         value={rollNo}
         onChange={(e)=>setRollNo(e.target.value)}
         placeholder="IITK RollNo"
         />
      </div>
    }

    {(userType==="Shopkeeper") && 
      <div>
        <label >Shop Name:</label>
        <input 
        type="text"
        value={shopName}
        onChange={e => setShopName(e.target.value)}
        />
      </div>
    }

    <button disabled={isLoading}>Sign up</button>
    <p>
      Already a user!! <a href="/login">Login Here</a>
    </p>
    {error && <div className="error">{error}</div>}
  </form> */}
    {/* </div> */}
  </>
);

};

export default Forget_Password;
