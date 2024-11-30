"use client"

import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaHeart, FaRupeeSign } from "react-icons/fa";
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Contributor from "../../Contributor";
import axios from "axios";
import {
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon
} from 'next-share';
import { usePathname } from 'next/navigation';

const Fundraiser = () => {
    const currentURL = usePathname();
    const url = typeof window !== 'undefined' ? window.location.origin + currentURL : '';

    const { data: session } = useSession();
    const { id } = useParams();
    const [fundraiser, setFundraiser] = useState({});
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false); // State to show/hide form
    const [contributor, setContributor] = useState({
        name: '',
        amount: 0,
        receipt: ''
    });

    const [contributors, setContributors] = useState([]);

    const [image, setimage] = useState([]);


    const getContributors = async (title) => {
        try {
            
            const response = await axios.get(`/api/contributor?title=${title}`);
            console.log(response.data.json);
            setContributors(response.data.json);
        } catch (error) {
            console.log(error);
        }
    }



    const getfundraiser = async () => {
        try {
            const response = await axios.get("/api/fundraiser", {
                params: {
                    id: id
                }
            })
            setFundraiser(response.data.json);
            setimage(response.data.json.image);

            getContributors(response.data.json.title);
        } catch (error) {
            console.log(error);
        }
    }



    useEffect(() => {
        getfundraiser();
        // getContributors();
    }, [])


    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setContributor({ ...contributor, [name]: value });

    };

    function isValidURL(url) {
        const urlPattern = /^(https?:\/\/)?([a-zA-Z\d-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/;
        return urlPattern.test(url);
    }

    const updateAmountraised = async (amount) => {
        try {
            const response = await fetch('/api/fundraiser', {
                method: 'PATCH',
                body: JSON.stringify({
                    id: id,
                    amount: amount
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (response.ok) {
                console.log('Amount raised updated successfully');
            }
            else {
                console.error('Failed to update amount raised');
            }
        }
        catch (error) {
            console.error('An error occurred:', error);
        }

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Submit the form data to the backend or handle it as needed
        if (!isValidURL(contributor.receipt)) {
            alert("Please enter a valid URL for the payment receipt.");
        }
        else if (contributor.amount === '') {
            alert("Please enter the amount paid.");
        }
        else {
            console.log(contributor);

            const Data = new FormData();

            Data.append('name', contributor.name);
            Data.append('Amount', contributor.amount);
            Data.append('receipt', contributor.receipt);
            Data.append('beneficiary', fundraiser.beneficiary);
            Data.append('title', fundraiser.title);

            try {
                const response = await fetch('/api/contributor', {
                    method: 'POST',
                    body: Data,
                });

                if (response.ok) {
                    console.log('Contributor added successfully');
                    updateAmountraised(contributor.amount);

                } else {
                    console.error('Failed to create fundraiser');
                }
            } catch (error) {
                console.error('An error occurred:', error);
            }


            alert("Form submitted successfully!");

        }


    };

    const progress = Math.round((fundraiser.amountraised / fundraiser.goal) * 100);

    // console.log(fundraiser);

    return (
        <>
            <div className="w-full h-auto flex justify-center items-center bg-gray-50 py-12">
                <div className="w-11/12 max-w-7xl flex flex-col lg:flex-row gap-10">
                    {/* Left Section: Image and Description */}
                    <div className="lg:w-7/12 bg-white p-8 shadow-lg rounded-lg">

                        <div className="w-full mb-6 flex justify-center items-center">
                            <Image
                                src={image[0]}
                                width={400}
                                height={300}
                                alt="Fundraiser Image"
                                className="rounded-lg"
                            />
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg shadow-inner mb-6">
                            <div className="flex items-center justify-between">
                                <Typography className="font-bold text-lg text-blue-900">
                                    <FaRupeeSign className="inline mr-2" />  {fundraiser.amountraised}
                                </Typography>
                                <Typography className="text-gray-600">
                                    out of <FaRupeeSign className="inline" />  {fundraiser.goal}
                                </Typography>
                            </div>
                            <LinearProgress variant="determinate" value={progress} className="mt-2" />
                        </div>
                        <h1 className="font-bold text-4xl text-center text-blue-900 mb-6">
                            {/* Help 12-year-old patient suffering from cancer */} {fundraiser.title}
                        </h1>
                        <h2 className="text-xl font-semibold mb-4">Description</h2>
                        <p className="text-gray-700 mb-6">
                            {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio sapiente assumenda illum perspiciatis soluta, labore esse ratione libero possimus eligendi aut consectetur qui perferendis necessitatibus accusamus enim commodi doloremque ullam quaerat. */} {fundraiser.description}
                        </p>

                        {/* Share Buttons */}
                        <div className="flex justify-between space-x-4">
                            <FacebookShareButton url={url} quote="Support this cause!" hashtag="#fundraiser">
                                <div className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                                    <FacebookIcon size={28} round className="mr-2" />
                                    Share to Facebook
                                </div>
                            </FacebookShareButton>

                            <WhatsappShareButton url={url} title="Support this cause!">
                                <div className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300">
                                    <WhatsappIcon size={28} round className="mr-2" />
                                    Share to WhatsApp
                                </div>
                            </WhatsappShareButton>

                            <LinkedinShareButton url={url}>
                                <div className="flex items-center px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition duration-300">
                                    <LinkedinIcon size={28} round className="mr-2" />
                                    Share to LinkedIn
                                </div>
                            </LinkedinShareButton>
                        </div>
                    </div>

                    {/* Right Section: Contributions and Bank Details */}
                    <div className="lg:w-5/12 flex flex-col space-y-8">
                        {/* Bank Details Card */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-4 text-center text-blue-900">Bank Account Details</h3>
                            <div className="text-gray-700 space-y-2">
                                <p><strong>Account Holder:</strong>   {fundraiser.beneficiary}</p>
                                <p><strong>Account Number:</strong>  {fundraiser.accountNumber}</p>
                                {/*<p><strong>Bank:</strong> ABC Bank</p>*/}
                                <p><strong>IFSC Code:</strong>  {fundraiser.ifscCode}</p>
                                <p><strong>UPI ID:</strong>  {fundraiser.upiId}</p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                <h3 className="text-xl font-semibold mb-4 text-center text-blue-900 uppercase tracking-wide">
                                    Beneficiary
                                </h3>
                                <p className="text-lg font-medium text-center text-gray-700">
                                    {fundraiser.beneficiary}
                                </p>
                            </div>

                            <div className="flex-1 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                <h3 className="text-xl font-semibold mb-4 text-center text-blue-900 uppercase tracking-wide">
                                    Requisitee
                                </h3>
                                <p className="text-lg font-medium text-center text-gray-700">
                                    {fundraiser.requisitee}
                                </p>
                            </div>
                        </div>



                        {/* Contributors List */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-4 text-center text-blue-900">Contributors</h3>
                            <div className="space-y-2">
                                {contributors.map((contributor, index) => (
                                    <Contributor key={index} name={contributor.name}  />
                                ))}
                            </div>
                        </div>

                        {/* Contribution Button */}
                        <button
                            onClick={() => setShowForm(!showForm)}
                            className="w-full px-4 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            <FaHeart className="inline mr-2" />
                            Contribute Now
                        </button>

                        {/* Conditional Rendering of Form */}
                        {showForm && (
                            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg space-y-4">
                                <h3 className="text-xl font-semibold mb-4 text-center text-blue-900">Contributor Details</h3>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Contributor Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={contributor.name}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Amount Paid</label>
                                    <input
                                        type="number"
                                        name="amount"
                                        value={contributor.amount}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Payment Receipt</label>
                                    <input
                                        type="text"
                                        name="receipt"
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
                                >
                                    Submit Contribution
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Fundraiser;
