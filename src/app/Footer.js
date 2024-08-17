const Footer = ()=>{
    return(
        <div className="footer mt-4 shadow-lg flex justify-center items-center">
            <div className="navs w-1/4 h-1/5">
                <h1 className="mb-2 text-center">FundMeKGP</h1>
                <ul className = "flex flex-col justify-center items-center">
                    <li className = "text-blue-700">Home</li>
                    <li className = "text-blue-700">Schemes</li>
                    <li className = "text-blue-700">About Us</li>
                    <li className = "text-blue-700">Donate</li>
                </ul>
            </div>

            <div className="add w-1/4">
                <div className="addr">
                    <h1 className="mb-2 text-left">Address</h1>
                    <p className="text-left">IIT Kharagpur, West Bengal, India</p>
                </div>

                <div className="logos mt-2">
                    <h1 className="mb-2 text-left">Follow Us</h1>
                    <div className="flex justify-left items-center mb-2">
                        <img src="https://img.icons8.com/color/48/000000/facebook.png" alt="facebook" className="w-8 h-8"/>
                        <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="twitter" className="w-8 h-8"/>
                        <img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="instagram" className="w-8 h-8"/>
                        <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedin" className="w-8 h-8"/>
                    </div>
                </div>
            </div>

            <div className="fund w-1/4">
                <div className="supported">
                    <h1 className="mb-2 text-left">Supported By</h1>
                    <div className="flex justify-left items-center">
                    <img src="https://img.icons8.com/color/48/000000/visa.png" alt="visa" className="w-8 h-8"/>
                    <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="mastercard" className="w-8 h-8"/>
                    <img src="https://img.icons8.com/color/48/000000/amex.png" alt="amex" className="w-8 h-8"/>
                    <img src="https://img.icons8.com/color/48/000000/paytm.png" alt="paytm" className="w-8 h-8"/>
                    </div>

                    <button className="bg-blue-700 text-white px-4 py-2 rounded-xl hover:bg-blue-900 mt-4 mb-2">Start a Fundraiser</button>
                </div>
            </div>

            <div className="share">

            </div>
        </div>
    )
}

export default Footer;