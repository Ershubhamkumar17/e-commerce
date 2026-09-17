import React, { useContext } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import storedata from '../utils/ContextApi'

function Rajistration() {
  const { setRagistration, ragistration } = useContext(storedata)
  const [name, setName] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState()
  const [pasword, setPasseord] = useState("")

  const ragistrabtn = () => {

    setRagistration([name, lastname, email, number, pasword])
    alert("ragistration successfully")
  }
  //  if (ragistration !== null) {
  //     const navigate = useNavigate("/login")
  //     navigate("/login")
  //   }





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
                type="tel"
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
              onClick={ragistrabtn}
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

export default Rajistration