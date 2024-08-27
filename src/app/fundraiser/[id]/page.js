"use client"

import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { CiShare2 } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import LinearProgress from '@mui/material/LinearProgress';

import Typography from '@mui/material/Typography';
import { FaRupeeSign } from "react-icons/fa";
import Contributor from "../../Contributor";
import axios from "axios"


const Fundraiser = ()=>{
    const { data: session } = useSession();
    const { id } = useParams();
    const [fundraiser, setFundraiser] = useState({});
    const [loading, setLoading] = useState(true);
    // const [contributions, setContributions] = useState([]);
    // const [totalContributions, setTotalContributions] = useState(0);
    // const [goal, setGoal] = useState(0);
    // const [progress, setProgress] = useState(0);
    // const [showContributors, setShowContributors] = useState(false);
    // const [showShare, setShowShare] = useState(false);

    const getfundraiser = async()=>{

        console.log(id);
        try{
        const response = await axios.get("http://localhost:3000/api/fundraiser",{
            params:{
                id:id
            }
        })
        // setFundraiser(response.data);
        // setFundraiser(val.json);
        // setLoading(false);

        console.log(response);
        setFundraiser(response.data.json);

        }catch(error){
        console.log(error);
        }
    }

    useEffect(()=>{
        getfundraiser();
    }
    ,[])

    
    return (
        <>
        {/* <Navbar></Navbar> */}
        <div className = "w-full h-auto flex justify-center items-center">
        <div className = "w-4/5 h-auto flex flex-col justify-center items-center mt-2">
            <h1 className = "font-bold text-5xl text-center mt-2">Help 12 year old patient suffering from cancer</h1>
             {/* {fundraiser.title} */}

            <div className = "w-full h-auto flex justify-center items-center mt-8">
                <div className = "w-3/5 h-auto ">
                   <div className = "w-full flex justify-center items-center ">
                   <Image
                    src="/trial.jpg"
                    width={500}
                    height={500}
                    alt="Webcover"
                    className = "w-4/5"
                    />
                    </div> 

                    <div>
                        <h2 className = "text-xl mt-4">Description</h2>
                        <p className = "mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio sapiente assumenda illum perspiciatis soluta, labore esse ratione libero possimus eligendi aut consectetur qui perferendis necessitatibus accusamus enim commodi doloremque ullam quaerat. Dolor?</p>
                        {/* {fundraiser.description} */}
                    </div>
                    
                </div>

                <div className = "w-2/5 h-auto flex flex-col justify-between place-items-center">
                <button className="flex items-center px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-colors duration-300 mb-4">
                <CiShare2 className = "mr-2" size = {25}/>
                    Share the Fundraiser
                </button>

                <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 mb-4">
                <FaHeart className  = "mr-2"/>
                Contribute Now
                </button>

                <Typography variant="body2" color="text.secondary">
                <div className='flex justify-left items-center mt-2 mb-2'><Typography className = "flex justify-center items-center mr-2 font-bold text-black text-lg"><FaRupeeSign /> 87000</Typography> raised out of <FaRupeeSign className = "ml-2"/>1500000</div>
                <LinearProgress variant="determinate" value={50} />
            </Typography>

            <div className="mt-8 text-xl">Contributors</div>

            <div className = "flex flex-col justify-center items-center w-full">
            <Contributor name = "Manish Paul" className = "mt-1"></Contributor>
            <Contributor name = "Manish Paul" className = "mt-1"></Contributor>
            <Contributor name = "Manish Paul" className = "mt-1"></Contributor>

            </div>
            


                </div>
            </div>
        </div>
        </div>
        {/* <Footer></Footer> */}
        </>
    )    
}

export default Fundraiser;