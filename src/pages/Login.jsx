import React from 'react'
import { Link } from 'react-router-dom'
import { FaStethoscope } from "react-icons/fa";

function Login() {
  return (
    <form action="">
      <h1>Welcome back</h1>
      <p className="muted">Log in to manage your appointments.</p>
      <label className="field">
            Email address
            <input type="email" name='email' required value={""} />
            <div className="field">
              <div className="row between">
                <label htmlFor="password">Password</label>
                <Link to={"/forget-password"} className="small">Forgot password?</Link>
              </div>
              <div className="password-field">
                <input type="password" name="password" id="password" value={""} />
                <button type='button' className='show-password'></button>
              </div>
            </div>
            <button className="btn btn-block">Log in</button>
            <p className="small center">
              New to CareBook?
              <link to={"/register"}>Create an account</link>
            </p>
            <div className="auth-note">
              <FaStethoscope />
              <div>
                <strong>Are you a doctor?</strong>
                <Link to="">Register as a doctor</Link>
                Your profile goes live once an admin checks your MDCN license.
              </div>
            </div>
          </label>
    </form>
  )
}

export default Login