import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {

  const [signState, setSignState] = useState("Sing In");


  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState == "Sign Up" ? <input type="text" name="" id="" placeholder='Name' /> : ''}
          <input type="email" name="" id="" placeholder='Email' />
          <input type="password" name="" id="" placeholder='Password' />
          <button>Sign Up</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" name="" id="" />
              <label htmlFor=""> Remember</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState == "Sign Up" ? <p>Already have an account? <span onClick={()=>{setSignState("Sign In")}}>Signin Now</span></p> : <p>New to Netflix? <span onClick={()=>{setSignState("Sign Up")}}>Signup Now</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login
