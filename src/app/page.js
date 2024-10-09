"use client"

import Image from "next/image";
import Card from "./card";
import styles from "./home.module.css";
// import Navbar from "./Navbar"
// import Footer from "./Footer"
import Fundraisercard from "./Fundraisercard";
import TextField from '@mui/material/TextField';
import { CiSearch } from "react-icons/ci";
import { LuStethoscope } from "react-icons/lu";
import { TbCandle } from "react-icons/tb";
import { PiDotsThreeOutline } from "react-icons/pi";
import { BiSolidDonateHeart } from "react-icons/bi";
import {useState, useEffect} from "react";




// import Trial from "../../public/trial.jpg"


export default function Home() {

  const [data,setdata] = useState([]);

  const getfundraisers = async()=>{
    try{
    const response = await fetch("/api/fundraiser");
    const val = await response.json();
    console.log(val);
    setdata(val.json);
    }catch(error){
      console.log(error);
    }

    
  }


  useEffect(()=>{
    getfundraisers();
  }
  ,[])

  // const currdata = data.slice(0,6);


  return (
    <>
    
      <Image
      src="/webcover.png"
      width={500}
      height={400}
      alt="Webcover"
      className = "w-full object-cover"
    />
    <div className = "w-full flex flex-col justify-center items-center ">
    
    <div className = {styles.custom}>
    {/* <div className = "flex justify-center items-center"><Fundraisercard/></div>
    <div className = "flex justify-center items-center"><Fundraisercard/></div>
    <div className = "flex justify-center items-center"><Fundraisercard/></div> */}
    {data.map((fundraiser,index)=>{
      return(
        <div className = "flex justify-center items-center " key = {index}><Fundraisercard  key = {index} fundraiser = {fundraiser}/></div>
      )
    })}
    </div>
    </div>

   
    
     


    </>
  );
}
