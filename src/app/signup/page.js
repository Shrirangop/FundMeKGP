"use client"
import { useState } from "react";

const signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    password: "",
    role: "user",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const validateForm = (e) => {
    let isValid = true;
    if (!formData.name) {
      isValid = false;
    }
    if (!formData.email) {
      isValid = false;
    }
    if (!formData.phonenumber || formData.phonenumber.length !== 10) {
      isValid = false;
    }
    if (!formData.password) {
      isValid = false;
    }
    return isValid;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('User registered succesfully');
        // Optionally reset form or redirect to another page
      } else {
        console.error('Failed to register');
        alert("failed to register")
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center text-center p-10">
      <form
        className="flex flex-col w-60  sm:w-80 md:w-96 justify-center text-center py-8 px-4 border-2 border-blue-700 rounded-xl shadow-lg shadow-orange-200 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-500 hover:shadow-blue-700"
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl font-bold mt-1 mb-4 text-blue-700">
          Sign Up
        </h1>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Name"
          className="w-full border-2 mx-auto rounded-3xl py-3 px-4 my-2 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
          onChange={handleInputChange}
        />
        <div className="w-full flex justify-center gap-2 items-center">
          <h2 className="mx-auto border-2 py-3 px-2 rounded-2xl text-stone-500">
            +91
          </h2>
          <input
            type="text"
            name="phonenumber"
            value={formData.phonenumber}
            placeholder="Mobile Number"
            className=" w-10/12 border-2 mx-auto rounded-3xl py-3 px-4 my-2 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
            onChange={handleInputChange}
          />
        </div>
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          className="w-full border-2 mx-auto rounded-3xl py-3 px-4 my-2 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="password"
          value={formData.password}
          placeholder="Password"
          className="w-full border-2 mx-auto rounded-3xl py-3 px-4 my-2 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
          onChange={handleInputChange}
        />

<select
          type="text"
          name="role"
          value={formData.role}
          placeholder="Select a role"
          className="w-full border-2 mx-auto rounded-3xl py-3 px-4 my-2 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
          onChange={handleInputChange}
        >
          <option value="user">User</option>
          <option value="alumni">Alumni</option>
        </select>
        <button className="mt-2 text-white py-2 border-2 border-blue-700 px-3 rounded-3xl bg-blue-700 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105  duration-300  active:bg-orange-700">
          Sign Up
        </button>
        <p className="text-[10px] text-left px-3 my-1">
          By clicking on Sign Up, I accept the{" "}
          <span className="font-semibold">Terms & Conditions</span> &{" "}
          <span className="font-semibold">Privacy Policy</span>
        </p>
        <p className="mt-5 text-sm">
          Already have an account?{" "}
          <a className="underline font-semibold hover:text-blue-700 active:text-orange-700" href="/signin">
            Login
          </a>
        </p>
        <div className="text-center"></div>
      </form>
    </div>
  )
}
export default signup;
