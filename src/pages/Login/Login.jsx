import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login, signup } from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {
  const [signState, setSignState] = useState("Sing In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
    debugger;
    event.preventDefault();
    setLoading(true);
    if (signState == "Sing In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setLoading(false);
  }


  return (
    loading ? <div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div> :
      <div className='login'>
        <img src={logo} className='login-logo' alt="" />
        <div className="login-form">
          <h1>{signState}</h1>
          <form>
            {signState == "Sign Up" ? <input type="text" name="" id="" placeholder='Name'
              value={name} onChange={
                (e) => { setName(e.target.value) }
              } /> : ''}
            <input type="email" name=""
              value={email} onChange={
                (e) => { setEmail(e.target.value) }
              } id="" placeholder='Email' />
            <input type="password" name="" id="" placeholder='Password'
              value={password} onChange={
                (e) => { setPassword(e.target.value) }
              } />
            <div className='buttonDiv' onClick={user_auth}>
              {signState == "Sign Up" ? 'Sign Up' : 'Sign In'}
            </div>
            <div className="form-help">
              <div className="remember">
                <input type="checkbox" name="" id="" />
                <label htmlFor=""> Remember</label>
              </div>
              <p>Need Help?</p>
            </div>
          </form>
          <div className="form-switch">
            {signState == "Sign Up" ? <p>Already have an account? <span onClick={() => { setSignState("Sign In") }}>Signin Now</span></p> : <p>New to Netflix? <span onClick={() => { setSignState("Sign Up") }}>Signup Now</span></p>}
          </div>
        </div>
      </div>
  )
}

export default Login
