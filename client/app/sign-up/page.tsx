"use client";
import React, { useState } from "react";

type Props = {};

const SignUp = (props: Props) => {
  
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const result = await response.json()
    console.log(result);
  };

  let [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e:any) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="email"
          required
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          id=""
          value={formData.password}
          onChange={handleChange}
          placeholder="password"
          required
        />
        <input type="submit" value="Signup" className="cursor-pointer" />
      </form>
    </div>
  );
};

export default SignUp;
