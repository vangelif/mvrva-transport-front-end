import React from "react";
import { useState, useEffect } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const { name, email, password } = formData;

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
      <h2>Register</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={name} onChange={onChange}/>
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={email} onChange={onChange}/>
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={password} onChange={onChange}/>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}