"use client";

import Link from "next/link";

const NavBar = () => {
  return (
    <header className="py-[20px] font-medium text-[1.2rem]">
      <nav className="nav flex justify-between items-center px-[1rem] md:px-[5rem]">
        <Link href="/" className="">
          <img src="/vercel.svg" alt="logo" className="max-h-[50px] w-auto" />
        </Link>
        <div className="space-x-10">
          {/* <Link href="/services">Services</Link> */}
          {/* <Link href="/about">About Us</Link> */}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
