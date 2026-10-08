import React, { useContext } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import storedata from '../utils/ContextApi'

function Registration() {
  const { setRegistration, registration} = useContext(storedata)
  const [name, setName] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState()
  const [pasword, setPasseord] = useState("")
  const navigate = useNavigate()

 const registrabtn = () => {
  if (!name || !lastname || !email || !number || !pasword) {
    alert("All fields are required");
    return;
  }

  const user = {
    name: name,
    lastname: lastname,
    email: email,
    number: number,
    password: pasword
  };

  setRegistration(user);

  console.log("user", user);

  sessionStorage.setItem("user", JSON.stringify(user));

  alert("Registration successful");


    // localStorage.setItem("user", JSON.stringify(user));

    // setRagistration([name, lastname, email, number, pasword])
    // alert("Registrationsuccessfully")

    if (registration!== null) {
      navigate("/login")
    }
  }


  return (
    <>
      <div className="user-register-page">
        <div className="user-register-card">

          <div className="user-register-header">
            <h1>Create Account</h1>
            <p>Register your account and get started</p>
          </div>

          <div className="user-register-form">

            <div className="user-register-row">
              <div className="user-register-field">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="Enter first name" maxLength={10}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="user-register-field">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Enter last name"
                  maxLength={10}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
            </div>

            <div className="user-register-field">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="user-register-field">
              <label>Phone Number</label>
              <input
                type="number"
                placeholder="Enter phone number" maxLength={10}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>

            <div className="user-register-field">
              <label>Password</label>
              <input
                type="password"
                placeholder="Create password"
                maxLength={15}
                onChange={(e) => setPasseord(e.target.value)}
              />
            </div>
            <div className="user-register-agreement">
              <input type="checkbox" id="registerTerms" />
              <label htmlFor="registerTerms">
                I agree to the Terms & Conditions
              </label>
            </div>

            <button
              type="submit"
              className="user-register-submit"
              onClick={registrabtn}
            >
              Create Account
            </button>

            <div className="user-register-login">
              <span>Already have an account?</span>
              <Link to="/login">Login</Link>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default Registration