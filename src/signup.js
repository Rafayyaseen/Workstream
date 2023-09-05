import React, { useState } from 'react';
import axios from 'axios'; 
import workstreamLogo from "./images/workstream-logo.png"
import './signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

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
    } catch (error) {
      alert('Signup error:');
    }
  };

  return (
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
  );
};

export default Signup;
