"use client"
import { useSession } from "next-auth/react";
import { MdOutlineAccountCircle } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const { data: session } = useSession();

  const signin = <Link className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-900" href = "/signin">
  Sign in
</Link>;

  const account = <Link href = "/profile"><MdOutlineAccountCircle color = {"blue"} size = {35}  className = "cursor-pointer"/></Link>

  console.log(session);
  return (
    <nav className="bg-white flex justify-between items-center px-4 py-2 shadow-lg">
      <div className="logo w-1/10">
        <Image src="/FundMEKGP.png" alt="Milaap Logo" className="h-8" width = {50} height = {50}/>
      </div>
      <ul className="flex space-x-4 w-2/5">
        <li><Link href="/" className="bg-blue-700 text-white cursor-pointer h-full w-auto p-2">Home</Link></li>
        {/* <li><a href="/schemes" className="cursor-pointer">Schemes</a></li> */}
        <li><Link href="/about" className="cursor-pointer">About Us</Link></li>
        <li>
        <Link href="/donate" className="cursor-pointer">Donate</Link>
        </li>
      </ul>
      <div className="flex space-x-4 w-2/5 justify-end items-center">
        <Link className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-900" href="/fundraiserform">Start a Fundraiser</Link>
        {session?account:signin}
      </div>
    </nav>
  );
};

export default Navbar;
