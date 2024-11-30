"use client"

import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { LuStethoscope } from "react-icons/lu";
import { TbCandle } from "react-icons/tb";
import Fundraisercard from "../Fundraisercard"; // Assume you have a Fundraisercard component
import TextField from "@mui/material/TextField";
import { BiSolidDonateHeart } from "react-icons/bi";
import Pagination from "@mui/material/Pagination";

export default function Donate() {
  const [data, setdata] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [category, setCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(0);
  const fundraisersPerPage = 3; // Number of fundraisers per page

  const getfundraisers = async () => {
    try {
      const response = await fetch("/api/fundraiser");
      const val = await response.json();
      console.log(val);
      setdata(val.json);
      setFilteredData(val.json); // Initialize filtered data
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getfundraisers();
  }, []);

  // Filter fundraisers based on category
  useEffect(() => {
    if (category === "all") {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter((item) => item.category === category));
    }
    setCurrentPage(0); // Reset to first page when filters change
  }, [category, data]);

  // Handle page change
  const handlePageClick = (selected,value) => {
    console.log(value);
    setCurrentPage(value -1);
  };

  // Calculate number of pages
  const count = Math.ceil(data.length /fundraisersPerPage );


  // Slice data for current page
  const offset = currentPage * fundraisersPerPage;
  const currentData = filteredData.slice(offset, offset + fundraisersPerPage);

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        {/* Search Bar
        <div className="w-4/5 h-auto mt-8 flex justify-center items-center">
          <TextField
            fullWidth
            label="Search by fundraiser name, title or other keywords"
            id="fullWidth"
            className="outline-blue-700"
          />
          <div className="">
            <CiSearch size={50} color={"blue"} className="cursor-pointer" />
          </div>
        </div> */}

        {/* Filter Section */}
        {/* <div className="w-4/5 h-auto flex justify-center items-center">
          <div
            className="card rounded-md shadow-md shadow-blue-300 w-1/5 h-auto flex flex-col justify-center items-center p-2 m-4 cursor-pointer"
            onClick={() => setCategory("medical")}
          >
            <LuStethoscope size={60} color={"blue"} />
            <h2 className="text-blue-500 mt-2">Medical</h2>
          </div>

          <div
            className="card rounded-md shadow-md shadow-blue-300 w-1/5 h-auto flex flex-col justify-center items-center p-2 m-2 cursor-pointer"
            onClick={() => setCategory("calamity")}
          >
            <TbCandle size={60} color={"blue"} />
            <h2 className="text-blue-500 mt-2">Calamity</h2>
          </div>

          <div
            className="card rounded-md shadow-md shadow-blue-300 w-1/5 h-auto flex flex-col justify-center items-center p-2 m-2 cursor-pointer"
            onClick={() => setCategory("social")}
          >
            <BiSolidDonateHeart size={60} color={"blue"} />
            <h2 className="text-blue-500 mt-2">Social Cause</h2>
          </div>
        </div> */}

        {/* Fundraisers List */}
        <div className="grid grid-flow-row sm:grid-cols-3 grid-cols-1 w-4/5 mt-8 mb-8 gap-5">
          {currentData.length > 0 ? (
            currentData.map((fundraiser, index) => (
              <div className="flex justify-center items-center" key={index}>
                <Fundraisercard key={index} fundraiser={fundraiser} />
              </div>
            ))
          ) : (
            <p>No fundraisers found</p>
          )}
        </div>

        {/* Pagination */}
        <Pagination count={count} defaultPage={1} siblingCount={0}  onChange={handlePageClick}/>
        
      </div>
    </>
  );
}
