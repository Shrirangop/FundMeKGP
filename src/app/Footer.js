import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="footer bg-gray-100 py-8 mt-8 shadow-lg">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="navs text-center md:text-left">
                    <h1 className="text-2xl font-bold mb-4 text-blue-700">FundMeKGP</h1>
                    <ul className="space-y-2">
                        <li>
                            
                                <Link className="text-gray-600 hover:text-blue-700" href = "/">Home</Link>
                            
                        </li>
                        {/* <li>
                            <Link href="/schemes">
                                <a className="text-gray-600 hover:text-blue-700">Schemes</a>
                            </Link>
                        </li> */}
                        <li>
                   
                                <Link className="text-gray-600 hover:text-blue-700" href = "/aboutus">About Us</Link>
                    
                        </li>
                        <li>

                                <Link className="text-gray-600 hover:text-blue-700" href = "/donate">Donate</Link>
                
                        </li>
                    </ul>
                </div>

                <div className="address text-center flex justify-left items-center flex-col md:text-left">
                    <h1 className="text-2xl font-bold mb-4 text-blue-700">Address</h1>
                    <p className="text-gray-600">
                        IIT Kharagpur, West Bengal, India
                    </p>
                    <div className="social-links mt-6">
                        <h1 className="text-lg font-semibold mb-4 text-blue-700">Follow Us</h1>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="#" className="hover:opacity-75">
                                <Image src="https://img.icons8.com/color/48/000000/facebook.png" alt="FacebooImage" width = {50} height = {50}/>
                            </a>
                            <a href="#" className="hover:opacity-75">
                                <Image src="https://img.icons8.com/color/48/000000/twitter.png" alt="Twitter"  width = {50} height = {50}/>
                            </a>
                            <a href="#" className="hover:opacity-75">
                                <Image src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="Instagram" width = {50} height = {50} />
                            </a>
                            <a href="#" className="hover:opacity-75">
                                <Image src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn"  width = {50} height = {50}/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="fund text-center flex justify-left items-center flex-col md:text-left">
                    {/* <h1 className="text-2xl font-bold mb-4 text-blue-700">Supported By</h1>
                    <div className="flex justify-center md:justify-start space-x-4 mb-4">
                        <Image src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa"  width = {50} height = {50}/>
                        <Image src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard"  width = {50} height = {50}/>
                        <Image src="https://img.icons8.com/color/48/000000/amex.png" alt="Amex"  width = {50} height = {50}/>
                        <Image src="https://img.icons8.com/color/48/000000/paytm.png" alt="Paytm"  width = {50} height = {50}/>
                    </div>
     */}

                        <Image src = "/footerimg.png" 
                        alt = "footerimg"
                        width = {200}
                        height = {200}
                        className = "w-1/2"
                        >

                        </Image>
                        <Link className="inline-block bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-900 transition-colors" href = "/fundraiserform">
                            Start a Fundraiser
                        </Link>
                    
                </div>
            </div>
            <div className="text-center mt-8 text-gray-500">
                &copy; {new Date().getFullYear()} FundMeKGP. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
