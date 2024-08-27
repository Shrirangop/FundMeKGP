"use client"
// import React from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { signOut } from "next-auth/react"

const ProfilePage = () => {
  const router = useRouter();

  const handleLogout = () => {
    signOut();
    // Redirect to the home page
    router.push('/');
  };

const { data: session } = useSession();


let accountInfo;

if(session){
  accountInfo = {
    name: session.user.name,
    email: session.user.email,
  };
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

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Account Information</h2>
          <p className="mb-2"><strong>Name:</strong> {accountInfo.name}</p>
          <p className="mb-2"><strong>Email:</strong> {accountInfo.email}</p>
        </div>

        <p className="text-xl mb-6">Total Contribution: ${totalContribution}</p>

        <div className="mb-8">
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
        </div>

        <div>
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
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
