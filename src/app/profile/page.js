"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { MdAccountCircle } from "react-icons/md";
import axios from "axios";
import Image from "next/image";

const ProfilePage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isprofileComplete, setisprofileComplete] = useState(false);
  const [curruser,setcurruser] = useState({});

  const handleLogout = () => {
    signOut();
    router.push("/");
  };

  const [formData, setFormData] = useState({
    Department: "",
    Hall: "",
    Place: "",
  });

  const [pic, setpic] = useState([]);
  const [idcard, setidcard] = useState([]);

  const handlepicChange = (e) => {
    setpic(e.target.files);
  };

  const handleidcardChange = (e) => {
    setidcard(e.target.files);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Data = new FormData();

    Data.append("email", session.user.email);
    Data.append("Department", formData.Department);
    Data.append("Hall", formData.Hall);
    Data.append("Place", formData.Place);
    Data.append("pic", pic[0]);
    Data.append("idcard", idcard[0]);

    try {
      const response = await axios.post("/api/profile", Data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.ok) {
        console.log("Profile updated successfully");
        setisprofileComplete(true);
      } else {
        console.error("Failed to update profile");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const getuser = async () => {
    try {
      const response = await axios.get("/api/profile", {
        params: {
          email: session.user.email,
        },
      });
      const user = response.data;
      setcurruser(user);

      if (user.Department !== "") {
        setisprofileComplete(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (session) {
      getuser();
    }
  }, [session]);

  const handleclick = () => {
    setIsFormOpen(!isFormOpen);
  };

  let accountInfo = {
    name: session ? session.user.name : "",
    email: session ? session.user.email : "",
  };

  return (
    <div className="bg-blue-700 min-h-screen text-white p-8">
      <div className="max-w-4xl mx-auto bg-white text-blue-700 rounded-lg shadow-md p-8">
        <div className="flex flex-row  md:justify-left items-center mb-6">
          <h1 className="text-3xl font-bold text-center md:text-left">Your Profile</h1>
        </div>

        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="mb-4 text-center mr-8 rounded-full">
            {!isprofileComplete?(
              <MdAccountCircle size={150} />
            ):(
            <Image src = {curruser.profilepic} width = {150} height = {150} className = "w-full h-full object-cover rounded-full"></Image>

            )}
            {/* <MdAccountCircle size={150} />  */}
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-4">Account Information</h2>
            <p className="mb-2">
              <strong>Name:</strong> {accountInfo.name}
            </p>
            <p className="mb-2">
              <strong>Email:</strong> {accountInfo.email}
            </p>
          </div>
        </div>

        {/* Conditionally render "Complete Your Profile" button if profile is incomplete */}
        {!isprofileComplete && (
          <button
            onClick={handleclick}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Complete Your Profile
          </button>
        )}

        {/* Render the form to complete the profile */}
        {isFormOpen && !isprofileComplete && (
          <div className="bg-blue-100 p-4 mt-4 rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Complete Your Profile</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-lg font-semibold mb-1">
                  Department
                </label>
                <input
                  type="text"
                  name="Department"
                  value={formData.Department}
                  className="w-full p-2 rounded-md border"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-lg font-semibold mb-1">Hall</label>
                <input
                  type="text"
                  name="Hall"
                  value={formData.Hall}
                  className="w-full p-2 rounded-md border"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-lg font-semibold mb-1">
                  Native Place
                </label>
                <input
                  type="text"
                  name="Place"
                  value={formData.Place}
                  className="w-full p-2 rounded-md border"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-lg font-semibold mb-1">
                  Profile Picture
                </label>
                <input
                  type="file"
                  className="w-full p-2 rounded-md border"
                  onChange={handlepicChange}
                />
              </div>
              <div>
                <label className="block text-lg font-semibold mb-1">
                  ID Card
                </label>
                <input
                  type="file"
                  className="w-full p-2 rounded-md border"
                  onChange={handleidcardChange}
                />
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

        {/* Show profile info when profile is complete */}
        {isprofileComplete && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Profile Completed</h2>
            <p>Your profile is complete, and all your details have been saved successfully!</p>
          </div>
        )}

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 mt-4 "
          >
            Logout
          </button>
      </div>
     
    </div>
  );
};

export default ProfilePage;
