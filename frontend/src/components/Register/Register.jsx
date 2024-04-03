import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const userData = {
      email: email,
      name: name,
      password: password
    };

    // try {
    //   const response = await fetch('http://localhost:5000/api/register', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(userData)
    //   });

    //   const data = await response.json();

    //   if (response.ok) {
    //     console.log('Registration successful:', data.message);
    //   } else {
    //     console.error('Registration failed:', data.error);
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    // }
    if(email.length === 0){
        alert("Email is blank")
    }else if(password.length === 0){
        alert("password is left blank")
    }else{
       axios.post("http://127.0.0.1:5000/api/register",{
        email:email,
        name:name,
        password:password
       })
       .then(function(response) {
        console.log(response)
        navigate('/login');
        
       })
       .catch(function (error) {
        console.log(error,'error');
        if(error?.response?.status === 401){
            alert("Invalid credentials");
        }
       })
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <div className="input-group">
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </div>
      <div className="input-group">
        <label>Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div className="input-group">
        <label>Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
      </div>
      <button onClick={handleSubmit}>Register</button>
      <p>Already have an account? <button className="login-button" onClick={() => { window.location.href = "/login"; }}>Login</button></p>
    </div>
  );
};

export default Register;
 