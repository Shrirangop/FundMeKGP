"use client"
import { useState,useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { signOut } from "next-auth/react";
import { MdAccountCircle } from "react-icons/md";
import axios from 'axios';

const ProfilePage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isprofileComplete,setisprofileComplete] = useState(false);

  const handleLogout = () => {
    signOut();
    router.push('/');
  };

  const [formData, setFormData] = useState({
    Department : '',
    Hall : '',
    Place : '',
  });

  const [pic,setpic] = useState([]);
  const [idcard,setidcard] = useState([]);

  const handlepicChange = (e)=>{
    // console.log(e.target.files);
    setpic(e.target.files);
  }

  const handleidcardChange = (e)=>{
    // console.log(e.target.files);
    setidcard(e.target.files);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Data = new FormData();

    Data.append('email',session.user.email);

    Data.append('Department', formData.Department);
    Data.append('Hall', formData.Hall);
    Data.append('Place', formData.Place);
    Data.append('pic', pic[0]);
    Data.append('idcard', idcard[0]);

    try {
      const response = await axios.post('/api/profile', Data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.ok) {
        console.log('Profile updated successfully');
        setisprofileComplete(true);
       
      } else {
        console.error('Failed to update profile');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }

  }





  let accountInfo = {
    name: '',
    email: '',
  };

  //check if profile is complete

  let user;

  const getuser = async()=>{
    await axios.get('/api/profile',{
      params:{
        email:session.user.email
      }
    }).then((response)=>{
      console.log(response);
      user = response.data;
    }).catch((error)=>{
      console.log(error);
    })

    return user;
  }

  if(session){
    accountInfo = {
      name: session.user.name,
      email: session.user.email,
    };
  }

  useEffect(()=>{
    if (session) {
     
  
        const user = getuser();
  
        
      if(user.Department!=="") {
        setisprofileComplete(true);
      }
  
    }
  })




  


  const handleclick = ()=>{
    setIsFormOpen(!isFormOpen);
  }

  const totalContribution = 5000; // Example amount
  const currentFundraisers = [
    { id: 1, title: 'Help Build a School', progress: '75%' },
    { id: 2, title: 'Community Health Initiative', progress: '40%' },
  ];
  const pastFundraisers = [
    { id: 1, title: 'Food Drive for the Homeless', amountRaised: 2000 },
    { id: 2, title: 'Animal Shelter Support', amountRaised: 3000 },
  ];

  return (
    <div className="bg-blue-700 min-h-screen text-white p-8">
      <div className="max-w-4xl mx-auto bg-white text-blue-700 rounded-lg shadow-md p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Your Profile</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Logout
          </button>
        </div>

       

        <div className="mb-8 flex justify-left items-center ">
        <div className="mb-4 text-center mr-8">
            {/* <img
              src="/path/to/profile-pic.jpg"
              alt="Profile Picture"
              className="w-24 h-24 rounded-full mx-auto"
            /> */}<MdAccountCircle size = {150}/>
          </div>
          <div>
          <h2 className="text-2xl font-semibold mb-4">Account Information</h2>
          <p className="mb-2"><strong>Name:</strong> {accountInfo.name}</p>
          <p className="mb-2"><strong>Email:</strong> {accountInfo.email}</p>
          </div>
         
        </div>

        <button
            onClick={handleclick}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Complete Your Profile
          </button>

        {isFormOpen && (
          <div className="bg-blue-100 p-4 rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Complete Your Profile</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-lg font-semibold mb-1">Department</label>
                <input type="text"name = "Department" value = {formData.Department} className="w-full p-2 rounded-md border" onChange = {handleChange}/>
              </div>
              <div>
                <label className="block text-lg font-semibold mb-1">Hall</label>
                <input type="text" name = "Hall" value = {formData.Hall} className="w-full p-2 rounded-md border-none" onChange = {handleChange} />
              </div>
              <div>
                <label className="block text-lg font-semibold mb-1">Native Place</label>
                <input type="text" name = "Place" value = {formData.Place} className="w-full p-2 rounded-md border" onChange = {handleChange}/>
              </div>
              <div>
                <label className="block text-lg font-semibold mb-1">Profile Picture</label>
                <input type="file" className="w-full p-2 rounded-md border" onChange={handlepicChange} />
              </div>
              <div>
                <label className="block text-lg font-semibold mb-1">ID Card</label>
                <input type="file" className="w-full p-2 rounded-md border" onChange={handleidcardChange} />
              </div>
              <button
                type="submit"
                className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        )}

        {/* Existing content like total contribution, current, and past fundraisers */}
      </div>
    </div>
  );
};

export default ProfilePage;



{/* <p className="text-xl mb-6">Total Contribution: ${totalContribution}</p> */}

        {/* <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Current Fundraisers</h2>
          <ul>
            {currentFundraisers.map(fundraiser => (
              <li key={fundraiser.id} className="mb-4">
                <div className="bg-blue-100 p-4 rounded-md">
                  <h3 className="text-lg font-semibold">{fundraiser.title}</h3>
                  <p>Progress: {fundraiser.progress}</p>
                </div>
              </li>
            ))}
          </ul>
        </div> */}

        {/* <div>
          <h2 className="text-2xl font-semibold mb-4">Past Fundraisers</h2>
          <ul>
            {pastFundraisers.map(fundraiser => (
              <li key={fundraiser.id} className="mb-4">
                <div className="bg-blue-100 p-4 rounded-md">
                  <h3 className="text-lg font-semibold">{fundraiser.title}</h3>
                  <p>Amount Raised: ${fundraiser.amountRaised}</p>
                </div>
              </li>
            ))}
          </ul>
        </div> */}