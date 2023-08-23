import googleicon1 from "./images/google-icon.png"
import './Login.css';
import workstreamLogo from "./images/workstream-logo.png"
import arbisoftlogo from "./images/arbisoft-logo.png"

import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleclick=()=>
  {
    console.log("Button clicked");
  }
    
  
  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logged in with:', username, password);

  
  };

  return (
    <div className="login-container">
        <img src={workstreamLogo} alt="" />
        <h5>Explore the benefits of cloud enterprise resource </h5>
        <p>planning</p>
        <img id="img1" src={googleicon1} alt="" />
        <h4>or be classical</h4>
        <input
        type="text"
        id="name"
        placeholder="Email"
      />
       <input
        type="password"
        id="password"
        placeholder="Password"
      />
     <br />
      <a id="a1" href="https://erp.arbisoft.com/login/accounts/password_reset/">Forgot Password</a>
      <button id="btn" type="submit" onClick={handleclick}>Login</button>
      <br />
      <h3>by</h3>
      <a id="img2" href="https://arbisoft.com">
      <img id="img3" src={arbisoftlogo} alt="Image Description" />
      </a>
    </div> 
  )
};

export default Login;

