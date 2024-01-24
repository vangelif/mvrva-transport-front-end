import React from "react";
import { useState, useEffect } from "react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = () => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    
  }

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={email} onChange={onChange}/>
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={password} onChange={onChange}/>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;