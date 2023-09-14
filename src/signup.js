import React, { useState } from 'react';
import axios from 'axios'; 
import workstreamLogo from "./images/workstream-logo.png"
import './signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigate=useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    try {
        const response = await axios.post('http://localhost:8000/user/api/create_user/', userData);
        alert("Account Successfully Created");
        setFormData({ name: '', email: '', password: '' });
        navigate('/login');
      } catch (error) {
        if (error.response && error.response.status === 400) {
          alert('User already exists.');
        } else {
          alert('Signup error: Something went wrong.');
        }
      }
    }   

  return (
    <div className="signupbody" style={{border:'1px solid',height:'100vh'}}>
    <div className="signup">
         <img src={workstreamLogo} alt="" />
      <h4>Sign Up</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="signupname"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="signupemail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="signuppassword"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button id="signupbtn" type="submit">Sign Up</button>
      </form>
    </div>
    </div>
  );
};

export default Signup;
