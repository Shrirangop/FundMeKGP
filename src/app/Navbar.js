"use client"
import { useSession } from "next-auth/react";
import { MdOutlineAccountCircle } from "react-icons/md";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();

  const signin = <button className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-900">
  Sign in
</button>;

  const account = <MdOutlineAccountCircle color = {"blue"} size = {35}  className = "cursor-pointer"/>

  console.log(session);
  return (
    <nav className="bg-white flex justify-between items-center px-4 py-2 shadow-lg">
      <div className="logo w-1/10">
        <img src="/path/to/milaap-logo.png" alt="Milaap Logo" className="h-8" />
      </div>
      <ul className="flex space-x-4 w-2/5">
        <li><a href="/" className="bg-blue-700 text-white cursor-pointer h-full w-auto p-2">Home</a></li>
        <li><a href="/schemes" className="cursor-pointer">Schemes</a></li>
        <li><a href="/about-us" className="cursor-pointer">About Us</a></li>
        <li className="relative">
          <button className="cursor-pointer">Donate</button>
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
