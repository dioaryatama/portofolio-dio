"use client";
import Link from "next/link";
import Image from "next/image";
import {
  FaInstagramSquare,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className=" p-8 grid grid-cols-1 md:grid-cols-3  w-full h-auto gap-8 ">
        <div className="flex justify-center md:justify-start gap-8 items-center w-full order-2 md:order-1">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/">Contact Us</Link>
        </div>
        <div className=" flex justify-center w-full order-1 md:order-2 ">
          <Image
            src="/assets/logo.svg"
            alt="Deskripsi gambar"
            width={300}
            height={100}
          />
        </div>
        <div className="flex justify-center md:justify-end items-center gap-8 w-full order-3">
          <Link
            target="_blank"
            href="https://www.instagram.com/tukang.ngobrol_/"
          >
            <FaInstagramSquare
              size={40}
              className=" text-[#0f0f0f] hover:text-[#532E1C] hover:-translate-y-2 transition-all duration-300"
            />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/dio-aryatama/"
          >
            <FaLinkedin
              size={40}
              className=" text-[#0f0f0f] hover:text-[#532E1C] hover:-translate-y-2 transition-all duration-300"
            />
          </Link>
          <Link target="_blank" href="https://www.wa.link/swag91">
            <FaWhatsappSquare
              size={40}
              className=" text-[#0f0f0f] hover:text-[#532E1C] hover:-translate-y-2 transition-all duration-300"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
