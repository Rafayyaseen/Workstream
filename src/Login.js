import googleicon1 from "./images/google-icon.png"
import './login.css';
import workstreamLogo from "./images/workstream-logo.png"
import arbisoftlogo from "./images/arbisoft-logo.png"
import axios from 'axios';
import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleLogin = async(e) => {
    e.preventDefault();
    console.log('Logged in with:', email, password);
    try {
      const response = await axios.post('http://localhost:8000/user/api/authenticate_user/', {
        email,
        password,
      });
      navigate('/');
    } catch (err) {
      setError('Invalid Email or Password.');
      alert(error);
    }

  };

  return (
    <div className="body">
    <div className="login-container">
        <img src={workstreamLogo} alt="" />
        <h5>Explore the benefits of cloud enterprise resource </h5>
        <p>planning</p>
        <img id="img111" src={googleicon1} alt="" />
        <h4>or be classical</h4>
        <form onSubmit={handleLogin}>
        <input
        type="text"
        id="name"
        placeholder="Email"
        defaultValue={email}
        onChange={(e) => setemail(e.target.value)}
      />
       <input
        type="password"
        id="password"
        placeholder="Password" defaultValue={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
     <br />
      <a id="a1" href="https://erp.arbisoft.com/login/accounts/password_reset/">Forgot Password</a>
      <button id="btn1" type="submit">Login</button>
      </form>
      <br />
      <h3>by</h3>
      <a id="img22" href="https://arbisoft.com">
      <img id="img333" src={arbisoftlogo} alt="Image Description" />
      </a>
    </div> 
    </div>
  )
};

export default Login;
