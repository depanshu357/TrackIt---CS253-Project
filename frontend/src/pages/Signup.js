import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

let otp;

// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 465,
//   secure: true,
//   auth: {
//     user: 'noreplytrackit98@gmail.com',
//     pass: 'nfkyirhkalqckdop'
//   }
// });


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [OTP, setOTP] = useState("");
  const [rollNo, setRollNo] = useState(0);
  const [userType, setUserType] = useState("Customer");
  const [shopName, setShopName] = useState("");
  const { signup, error, isLoading } = useSignup();
  const options = ["Customer", "Shopkeeper"];
  const [newError, setNewError] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();

    otp = Math.floor(100000 + Math.random() * 900000);
    const otp_email = { otp, email };
    console.log(otp);


    const fetchOtp = async () => {
      const response = await fetch("/api/user/signup/otp", {
        method: "POST",
        body: JSON.stringify(otp_email),
        headers: { 'Content-Type': 'application/json', }
      })
      const json = await response.json();

    }
    fetchOtp();
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otp != OTP) {
      setNewError("OTP does not match!");
      console.log("wrong otp", otp, OTP);
    }
    else {
      console.log("correct otp");
      setNewError(null);
      await signup(email, password, userType, rollNo, shopName);
    }

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
        <div className="singup-page-background">
          <div className="container">
            <div className="design">
              <div className="pill-1 rotate-45" />
              <div className="pill-2 rotate-45" />
              <div className="pill-3 rotate-45" />
              <div className="pill-4 rotate-45" />
            </div>
            <form className="login signup" onSubmit={handleSubmit}>
              <h3 className="title">Register</h3>
              {/* <div className="text-input">
            <i className="ri-user-fill" />
            <input type="text" placeholder="First Name" />
          </div>
          <div className="text-input">
            <i className="ri-user-fill" />
            <input type="text" placeholder="Last Name" />
          </div> */}
              <div className="text-input">
                <i className="ri-user-fill" />
                <input
                  placeholder="Email id"
                  type="email"
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
              <select className="text-input" onChange={onOptionChangeHandler}>
                <i className="ri-user-fill" />
                {/* <input
            placeholder="Email id"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email} /> */}
                <option>Please choose one option</option>
                {options.map((option, index) => {
                  return <option key={index}>{option}</option>;
                })}
              </select>
              <div className="text-input">
                <i className="ri-user-fill" />
                {/* <input
            placeholder="Email id"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email} /> */}
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
              <button className="login-btn" disabled={isLoading}>
                SUBMIT
              </button>
              {error && <div className="error">{error}</div>}
              <div className="create">
                <a href="/login"> Registered Already? Log in</a>
                <i className="ri-arrow-right-fill" />
              </div>
            </form>
          </div>

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

          <select onChange={onOptionChangeHandler}>
            <option>Please choose one option</option>
            {options.map((option, index) => {
              return <option key={index}>{option}</option>;
            })}
          </select>

          {
            (userType === "Customer") && <div>
              <label>IITK RollNo: </label>
              <input
                type="number"
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
                placeholder="IITK RollNo"
              />
            </div>
          }
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

{
  (userType === "Shopkeeper") &&
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
        </div>
      </>
    );
  };
}
export default Signup;
