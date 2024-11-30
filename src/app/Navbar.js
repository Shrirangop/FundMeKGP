"use client";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState("");

  // Set active path on mount
  useEffect(() => {
    setActivePath(window.location.pathname);
  }, [activePath]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const signin = (
    <Link
      className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-900"
      href="/signin"
      aria-label="Sign in"
    >
      Sign in
    </Link>
  );

  const account = (
    <Link href="/profile" aria-label="Profile">
      <MdOutlineAccountCircle className="text-blue-700 cursor-pointer" size={35} />
    </Link>
  );

  const navLinkClass = "cursor-pointer rounded-md transition-all duration-200 px-2 py-1";
  const activeLinkClass = "bg-blue-700 text-white";

  // Function to determine if link is active
  const getLinkClass = (path) => (activePath === path ? activeLinkClass : "");

  return (
    <nav className="bg-white flex justify-between items-center px-4 py-2 shadow-lg ">
      {/* Logo */}
      <div className="logo">
        <Image src="/logo_3.png" alt="Milaap Logo" width={60} height={60} />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-4 w-2/5">
        <li>
          <Link href="/" className={`${navLinkClass} ${getLinkClass("/")}`} aria-label="Home">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={`${navLinkClass} ${getLinkClass("/about")}`} aria-label="About Us">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/donate" className={`${navLinkClass} ${getLinkClass("/donate")}`} aria-label="Donate">
            Donate
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} aria-label="Toggle menu" className="text-blue-700">
          {isMenuOpen ? <HiOutlineX size={30} /> : <HiOutlineMenu size={30} />}
        </button>
      </div>

      {/* Right-side Buttons */}
      <div className="hidden md:flex space-x-4 w-2/5 justify-end items-center">
        <Link
          className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-900"
          href="/fundraiserform"
          aria-label="Start a Fundraiser"
        >
          Start a Fundraiser
        </Link>
        {session ? account : signin}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="absolute top-14 left-0 w-full bg-white flex flex-col items-center space-y-4 py-4 shadow-lg md:hidden">
            <li>{session ? account : signin}</li>
          <li>
            <Link href="/" className={`${navLinkClass} ${getLinkClass("/")}`} onClick={() => setIsMenuOpen(false)} aria-label="Home">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={`${navLinkClass} ${getLinkClass("/about")}`} onClick={() => setIsMenuOpen(false)} aria-label="About Us">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/donate" className={`${navLinkClass} ${getLinkClass("/donate")}`} onClick={() => setIsMenuOpen(false)} aria-label="Donate">
              Donate
            </Link>
          </li>
          <li>
            <Link className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-900" href="/fundraiserform" aria-label="Start a Fundraiser">
              Start a Fundraiser
            </Link>
          </li>
        
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
