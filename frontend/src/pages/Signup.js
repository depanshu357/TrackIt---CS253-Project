import React,{ useState } from "react";
import { useSignup } from "../hooks/useSignup";
import "./style.css";

let otp;


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [OTP, setOTP] = useState("");
  const [rollNo, setRollNo] = useState(null);
  const [userType, setUserType] = useState("Customer");
  const [shopName, setShopName] = useState("");
  const { signup, error, isLoading } = useSignup();
  const options = ["Customer", "Shopkeeper"];

  const [newError, setNewError] = useState(null);


  const sendEmail = async (e) => {
    e.preventDefault();

    otp = Math.floor(100000 + Math.random() * 900000);
    console.log(otp);
    const otp_email = { otp, email };


    const fetchOtp = async () => {
      const response = await fetch("/api/user/signup/otp", {
        method: "PATCH",
        body: JSON.stringify(otp_email),
        headers: { 'Content-Type': 'application/json', }
      })
      const json = await response.json();

    };
    fetchOtp();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otp != OTP) {
      setNewError("OTP does not match!");
      console.log("wrong otp");
    }
    else {
      console.log("correct otp");
      setNewError(null);
      await signup(email, password, userType, rollNo, shopName);
    }
  };

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  const onOptionChangeHandler = (e) => {
    console.log(e.target.value);
    setUserType(e.target.value);
  };

  function generateString(length) {
    let result = " ";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }

  return (
    <>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap" rel="stylesheet"></link>
      <link rel="stylesheet" href="./style.css"></link>
      <section class="ftco-section" style={{overflowX:"hidden"}}>
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
                    <h3 class="mb-4">Register</h3>
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
                      <button className="form-control btn btn-primary rounded submit px-3" onClick={sendEmail}>Verify</button>
                    </div>
                    <div class="form-group mb-3">
                      <label class="label" for="password">OTP:</label>
                      <input type="number"
                        onChange={(e) => setOTP(e.target.value)}
                        value={OTP}
                        placeholder="Enter OTP"
                        class ="form-control"
                      />
                    </div>
                    <div class="form-group mb-3">
                      <label class="label" for="password">Password</label>
                      <input
                        class ="form-control"
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                      />
                    </div>
                    <select class ="form-control2"
                    onChange={onOptionChangeHandler}>
                      <option>Please choose one option</option>
                      {options.map((option, index) => {
                        return <option key={index}>{option}</option>;
                      })}
                    </select>
                    <div className="form-group mb-3">
                      {userType === "Customer" && (
                        <div>
                          <input
                            type="number"
                            value={rollNo}
                            class ="form-control"
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
                            class ="form-control"
                            onChange={(e) => setShopName(e.target.value)}
                            placeholder="ShopName"
                          />
                        </div>
                      )}
                    </div>
                    <button className="form-control btn btn-primary rounded submit px-3" disabled={isLoading}>
                      Submit
                    </button>
                    {error && <div className="error">{error}</div>}
                    {/* <div className="create">
                      <a href="/login"> Registered Already? Log in</a>
                      <i className="ri-arrow-right-fill" />
                    </div> */}
                    <p class="text-left">Registered Already? <a href="./">Log in</a></p>
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

export default Signup;

{/* <section class="ftco-section">
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
                  <h3 class="mb-4">Register</h3>
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
                    <button className="form-control btn btn-primary rounded submit px-3" onClick={sendEmail}>Verify</button>
                  </div>
                  <div class="form-group mb-3">
                    <label class="label" for="password">OTP:</label>
                    <input type="number"
                      onChange={(e) => setOTP(e.target.value)}
                      value={OTP}
                    />
                  </div>
                  <div class="form-group mb-3">
                    <label class="label" for="password">Password</label>
                    <input
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </div>
                  <select className="text-input" onChange={onOptionChangeHandler}>
                    <option>Please choose one option</option>
                    {options.map((option, index) => {
                      return <option key={index}>{option}</option>;
                    })}
                  </select>
                  <div className="text-input">
                    {userType === "Customer" && (
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
                  <button className="form-control btn btn-primary rounded submit px-3" disabled={isLoading}>
                    Submit
                  </button>
                  {error && <div className="error">{error}</div>}
                  <div className="create">
                    <a href="/login"> Registered Already? Log in</a>
                    <i className="ri-arrow-right-fill" />
                  </div>
                </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section> */}