"use client"
import { useState } from "react";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const validateForm = (e) => {
    if (!formData.password) {
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('User logged in');
        // Optionally reset form or redirect to another page
      } else {
        console.error('Failed to login');
        alert("user invalid")
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center text-center">
      <form
        className="flex flex-col w-60  sm:w-80 md:w-96 justify-center text-center py-8 px-4 border-2 border-blue-700 rounded-xl shadow-lg shadow-blue-300 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-500 hover:shadow-blue-700"
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl font-bold mt-1 mb-4 text-blue-700">Login</h1>
        <div className="w-full flex justify-center gap-2 items-center">
          {/* <h2 className="mx-auto border-2 py-3 px-2 rounded-2xl text-stone-400">
            +91
          </h2> */}
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleInputChange}
            className=" w-full border-2 mx-auto rounded-3xl py-3 px-4 my-2 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
          />
        </div>
        
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Password"
          onChange={handleInputChange}
          className="w-full border-2 mx-auto rounded-3xl py-3 px-4 my-2 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
        />

        <button className="mt-2 text-white py-2 border-2 border-blue-700 px-3 rounded-3xl bg-blue-700 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105  duration-300 active:bg-orange-700">
          Login
        </button>
        <p className="text-[10px] text-left px-3 my-1">
          By clicking on Login, I accept the{" "}
          <span className="font-semibold">Terms & Conditions</span> &{" "}
          <span className="font-semibold">Privacy Policy</span>
        </p>
        <p className="mt-5 text-sm">
          Don't have an account?{" "}
          <a className="underline font-semibold hover:text-blue-700 active:text-blue-900" >
            Sign Up
          </a>
        </p>
        <div className="text-center"></div>
      </form>
    </div>
  );
};

export default SignIn;
