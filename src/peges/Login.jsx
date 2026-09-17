
import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="user-login-screen">
      <div className="user-login-box">

        <div className="user-login-heading">
          <h1>Welcome Back</h1>
          <p>Login to your account</p>
        </div>

        <form className="user-login-form">

          <div className="user-login-input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
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

            <a href="#" className="user-login-forgot">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="user-login-button"
          >
            Login
          </button>

          <div className="user-login-register">
            <span>Don't have an account?</span>
            <Link to="/rajistration">Create Account</Link>
   
          </div>

        </form>
      </div>
    </div>
  );
}

export default Login;

