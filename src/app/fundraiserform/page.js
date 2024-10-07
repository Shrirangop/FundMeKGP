"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const FundraiserForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    goal: '',
    requisitee: '',
    beneficiary: '',
    enddate: '',
    category: '',
    accountNumber: 0,
    ifscCode: '',
    upiId: '',
  });

  const [files, setFiles] = useState([]);
  const [agreeToShare, setAgreeToShare] = useState(false); // State to track checkbox

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setAgreeToShare(e.target.checked); // Update checkbox state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent form submission if checkbox is not checked
    if (!agreeToShare) {
      alert("Please agree to share your bank account details.");
      return;
    }

    const Data = new FormData();
    Data.append('title', formData.title);
    Data.append('description', formData.description);
    Data.append('goal', formData.goal);
    Data.append('requisitee', formData.requisitee);
    Data.append('beneficiary', formData.beneficiary);
    Data.append('enddate', formData.enddate);
    Data.append('category', formData.category);
    Data.append('accountNumber', formData.accountNumber);
    Data.append('ifscCode', formData.ifscCode);
    Data.append('upiId', formData.upiId);

    for (let i = 0; i < files.length; i++) {
      Data.append('image', files[i]);
    }

    try {
      const response = await fetch('/api/fundraiser', {
        method: 'POST',
        body: Data,
      });

      if (response.ok) {
        console.log('Fundraiser created successfully');
        // router.push('/');
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

        {/* Title */}
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

        {/* Description */}
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

        {/* Goal Amount */}
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

        {/* Image */}
        <div className="mb-4">
          <label className="block text-blue-700 font-bold mb-2" htmlFor="image">
            Image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="file"
            name="image"
            multiple
            onChange={handleFileChange}
            required
          />
        </div>

        {/* Requisitee */}
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

        {/* Beneficiary */}
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

        {/* End Date */}
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

        {/* Category */}
        <div className="mb-4">
          <label className="block text-blue-700 font-bold mb-2" htmlFor="category">
            Category
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select a category</option>
            <option value="Medical">Medical</option>
            <option value="Calamity">Calamity</option>
            <option value="Social Cause">Social Cause</option>
          </select>
        </div>

        {/* Bank Account Number */}
        <div className="mb-4">
          <label className="block text-blue-700 font-bold mb-2" htmlFor="accountNumber">
            Bank Account Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
            id="accountNumber"
            type="Number"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            required
          />
        </div>

        {/* IFSC Code */}
        <div className="mb-4">
          <label className="block text-blue-700 font-bold mb-2" htmlFor="ifscCode">
            IFSC Code
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
            id="ifscCode"
            type="text"
            name="ifscCode"
            value={formData.ifscCode}
            onChange={handleChange}
            required
          />
        </div>

        {/* UPI ID */}
        <div className="mb-4">
          <label className="block text-blue-700 font-bold mb-2" htmlFor="upiId">
            UPI ID
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
            id="upiId"
            type="text"
            name="upiId"
            value={formData.upiId}
            onChange={handleChange}
            required
          />
        </div>

        {/* Checkbox for agreeing to share bank account details */}
        <div className="mb-4">
          <label className="inline-flex items-center text-blue-700 font-bold">
            <input
              type="checkbox"
              className="form-checkbox"
              checked={agreeToShare}
              onChange={handleCheckboxChange}
            />
            <span className="ml-2">
              I agree to share my bank account details, and they will not be shared with anyone else.
            </span>
          </label>
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
