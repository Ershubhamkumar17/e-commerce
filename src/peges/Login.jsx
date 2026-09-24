
import { React, useContext, useState } from "react";
import { Link } from "react-router-dom";
import storedata from '../utils/ContextApi'
function Login() {
  const { ragistration } = useContext(storedata)
  const [email, setEmail] = useState("")

  const loginbtn = () => {
    console.log("ragistretion form", ragistration)
    console.log("email",email)
    const findemail = ragistration.find((item) =>{   console.log("item",item);
    return item==email;})
    console.log("find email", findemail)
    if (findemail !== undefined) {
      alert("login sucessfull")
    }
  }


  return (
    <div className="user-login-screen">
      <div className="user-login-box">

        <div className="user-login-heading">
          <h1>Welcome Back</h1>
          <p>Login to your account</p>
        </div>

        <div className="user-login-form">

          <div className="user-login-input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="user-login-input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="user-login-options">
            <label className="user-login-remember">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <Link to="#" className="user-login-forgot">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="user-login-button"
            onClick={loginbtn}
          >
            Login
          </button>

          <div className="user-login-register" >
            <span>Don't have an account?</span>
            <Link to="/rajistration">Create Account</Link>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;