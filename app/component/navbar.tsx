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
      <div className=" p-8 flex justify-between w-full h-[20vh]">
        <div className="flex justify-start gap-8 items-center w-1/3">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/">Contact Us</Link>
        </div>
        <div className="w-1/3 flex justify-center">
          <Image
            src="/assets/logo.svg"
            alt="Deskripsi gambar"
            width={300}
            height={100}
          />
        </div>
        <div className="w-1/3 flex justify-end items-center gap-8">
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
