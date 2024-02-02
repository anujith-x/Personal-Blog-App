'use client'
import React, { useState } from "react";

type Props = {};

const Login = (props: Props) => {

  const handleSubmit = async (e: any) => {
    let response = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    });
    let result = await response.json();
    console.log(result);
  };

  let [formData , setFormData] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e:any) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Email</label>
        <input type="email" name="email" placeholder="email" value={formData.email} onChange={handleChange}/>
        <label htmlFor="">Password</label>
        <input type="password" name="password" id="" placeholder="password" value={formData.password} onChange={handleChange}/>
        <input type="submit" value="Login" className="cursor-pointer" />
      </form>
    </div>
  );
};

export default Login;
