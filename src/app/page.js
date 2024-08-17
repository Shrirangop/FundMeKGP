import Image from "next/image";
import Card from "./card";
import Navbar from "./Navbar"
import Footer from "./Footer"
import Fundraisercard from "./Fundraisercard";
import TextField from '@mui/material/TextField';
import { CiSearch } from "react-icons/ci";
import { LuStethoscope } from "react-icons/lu";
import { TbCandle } from "react-icons/tb";
import { PiDotsThreeOutline } from "react-icons/pi";
import { BiSolidDonateHeart } from "react-icons/bi";


// import Trial from "../../public/trial.jpg"


export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Image
      src="/trial.jpg"
      width={500}
      height={500}
      alt="Webcover"
      className = "w-full"
    />
    <div className = "w-full flex flex-col justify-center items-center">
    <div className="w-4/5 h-auto mt-8 flex justify-center items-center">
    <TextField fullWidth label="Search by fundraiser name, title or other keywords" id="fullWidth" className="outline-blue-700"/>
    <div className = ""><CiSearch size = {50} color = {"blue"} className = "cursor-pointer" /></div>
    </div>
    <div className = "w-4/5 h-auto flex justify-center items-center">
      <div className="card rounded-md shadow-md shadow-blue-300 w-1/5 h-auto flex flex-col justify-center items-center p-2 m-4">
      <LuStethoscope size = {60} color = {"blue"}/>
      <h2 className = "text-blue-500 mt-2">Medical</h2>
      </div>

      <div className="card rounded-md shadow-md shadow-blue-300 w-1/5 h-auto flex flex-col justify-center items-center p-2 m-2">
      <TbCandle size = {60} color = {"blue"}/>
      <h2 className = "text-blue-500 mt-2">Calamity</h2>
      </div>  
  
      <div className="card rounded-md shadow-md shadow-blue-300 w-1/5 h-auto flex flex-col justify-center items-center p-2 m-2">
      <BiSolidDonateHeart size = {60} color = {"blue"}/>
      <h2 className = "text-blue-500 mt-2">Social Cause</h2>
      </div>  
      
      <div className="card rounded-md shadow-md shadow-blue-300 w-1/5 h-auto flex flex-col justify-center items-center p-2 m-2">
      <PiDotsThreeOutline size = {60} color = {"blue"}/>
      <h2 className = "text-blue-500 mt-2">Technical Societies</h2>
      </div>
    </div>
    <div className = "grid grid-flow-row grid-cols-3 w-4/5 mt-8 mb-8">
    <div className = "flex justify-center items-center"><Fundraisercard/></div>
    <div className = "flex justify-center items-center"><Fundraisercard/></div>
    <div className = "flex justify-center items-center"><Fundraisercard/></div>
    </div>
    </div>

   
    
     

      <Footer></Footer>
    </>
  );
}
