"use client";

import { useState } from 'react';

const FundraiserForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    goal: '',
    image: '',
    requisitee: '',
    beneficiary: '',
    enddate: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/fundraiser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Fundraiser created successfully');
        // Optionally reset form or redirect to another page
      } else {
        console.error('Failed to create fundraiser');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white mt-2 mb-2">
      <form
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg border-2 border-blue-700 animate-slide-in"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center">Create a Fundraiser</h2>

        <div className="mb-4">
          <label className="block text-blue-700 font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-blue-700 font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-blue-700 font-bold mb-2" htmlFor="goal">
            Goal Amount
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
            id="goal"
            type="number"
            name="goal"
            value={formData.goal}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-blue-700 font-bold mb-2" htmlFor="image">
            Image URL
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-blue-700 font-bold mb-2" htmlFor="requisitee">
            Requisitee
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
            id="requisitee"
            type="text"
            name="requisitee"
            value={formData.requisitee}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-blue-700 font-bold mb-2" htmlFor="beneficiary">
            Beneficiary
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
            id="beneficiary"
            type="text"
            name="beneficiary"
            value={formData.beneficiary}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-blue-700 font-bold mb-2" htmlFor="enddate">
            End Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
            id="enddate"
            type="date"
            name="enddate"
            value={formData.enddate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-blue-700 font-bold mb-2" htmlFor="category">
            Category
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
            id="category"
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition-transform duration-300 hover:scale-105"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FundraiserForm;
