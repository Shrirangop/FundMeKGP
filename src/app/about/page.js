// pages/about.js
"use client"
// pages/about.js
import Image from 'next/image';
import { FaLinkedin } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Vision & Mission Section with Left-Right Layout */}
      <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Vision */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-blue-200">
          <h1 className="text-3xl font-bold text-blue-700 mb-4">Vision</h1>
          <p className="text-lg text-gray-700">
            To create a compassionate and united student community where no individual faces barriers to health, innovation, or well-being, fostering a culture of collective responsibility and empowerment.
          </p>
        </div>
        
        {/* Mission */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-blue-200">
          <h1 className="text-3xl font-bold text-blue-700 mb-4">Mission</h1>
          <p className="text-lg text-gray-700">
            Our mission is to build a transparent and accessible fundraising platform that mobilizes the institute community to support urgent medical needs and transformative social initiatives. We aim to bridge the gap between students and alumni, creating sustainable impact through direct contributions, fostering solidarity, and enabling life-changing support for those in need.
          </p>
        </div>
      </section>

      {/* Why do we do this Section with Iconic Presentation */}
      <section className="mb-12">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-10">Why do we do this?</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex items-center bg-white p-6 rounded-lg shadow-lg border border-blue-200">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 010 6.844L12 20"></path>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 20l-6.16-3.422a12.083 12.083 0 010-6.844L12 4"></path>
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-700">Urgent Genuine Requests Aren’t Supported</h3>
            </div>
          </div>

          <div className="flex items-center bg-white p-6 rounded-lg shadow-lg border border-blue-200">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-700">Underutilization of 16k+ students & 1 lakh+ alumni base</h3>
            </div>
          </div>

          <div className="flex items-center bg-white p-6 rounded-lg shadow-lg border border-blue-200">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14"></path>
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-700">Genuineness of Requests is Questioned</h3>
            </div>
          </div>

          <div className="flex items-center bg-white p-6 rounded-lg shadow-lg border border-blue-200">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h10a4 4 0 004-4v-3a4 4 0 00-4-4H7a4 4 0 00-4 4v3z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 11V9a4 4 0 118 0v2"></path>
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-700">Donors Don’t Know the Results</h3>
            </div>
          </div>

          <div className="flex items-center bg-white p-6 rounded-lg shadow-lg border border-blue-200">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 15h18"></path>
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-700">Unawareness About the Need</h3>
            </div>
          </div>

          <div className="flex items-center bg-white p-6 rounded-lg shadow-lg border border-blue-200">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 13l3-3 4 4 4-4"></path>
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-700">Too Many Barriers for Contributors</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-12">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-10">Meet the Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 border border-blue-200">
            <div className="w-48 h-60 mx-auto  overflow-hidden mb-4">
              <Image src="/shrirang.jpg" alt="Shrirang Elkunchwar" width={192} height={240} />
            </div>
            <h2 className="text-xl font-semibold text-blue-700 text-center">Shrirang Elkunchwar</h2>
            <p className="text-center text-gray-600">Tech Lead</p>
            {/* <div className="text-center mt-4">
              <a
                href="https://www.linkedin.com/in/shrirang-elkunchwar-b17171250/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900"
              >
             <FaLinkedin />
              </a>
            </div> */}
          </div>

          {/* Team Member 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 border border-blue-200">
            <div className="w-48 h-60 mx-auto  overflow-hidden mb-4">
              <Image src="/tiru.jpg" alt="Thiruvignesh" width={192} height={240} />
            </div>
            <h2 className="text-xl font-semibold text-blue-700 text-center">R S Thiruvignesh </h2>
            <p className="text-center text-gray-600">Founder</p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 border border-blue-200">
            <div className="w-48 h-60 mx-auto overflow-hidden mb-4">
              <Image src="/rohan.jpg" alt="Rohit Bhalerao" width={192} height={240} />
            </div>
            <h2 className="text-xl font-semibold text-blue-700 text-center">Rohit Bhalerao</h2>
            <p className="text-center text-gray-600">Public Relations Lead</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

