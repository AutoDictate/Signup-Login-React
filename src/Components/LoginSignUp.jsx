import React, { useState } from 'react'
import user from './Assets/user.png';
import email from './Assets/email.png';
import password from './Assets/password.png';
import './LoginSignUp.css';

const LoginSignUp = () => {


  const [action, setAction] = useState("Sign Up");


  return (
    <div>
        <div className="container">
            <div className="header">
              <div className="text">{action}</div>
              <div className="underline"></div>
            </div>
            <div className="inputs">

              {action=="Login"?<div></div>:<div className="input">
                <img src={user} alt="" />
                <input type="text" placeholder="Enter your Username" />
              </div>}
              
              <div className="input">
                <img src={email} alt="" />
                <input type="email" placeholder="Enter your Email-id" />
              </div>
              <div className="input">
                <img src={password} alt="" />
                <input type="password" placeholder="Enter your password"/>
              </div>
            </div>
            {action=="Sign Up"?<div></div>:<div className="password">Forgot Password? <span>Click Here!</span></div>}
        
        <div className="submit-container">
          <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
          <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
        </div>
    </div>
  )
}

export default LoginSignUp