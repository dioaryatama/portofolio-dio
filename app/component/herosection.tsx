"use client";

import TypingAnimation from "./typinganimation";
import Image from "next/image";
import Link from "next/link";
import Progressnumber from "./progressnumber";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const textArray = [
    "Hello, welcome to Dio's portfolio website.",
    "I'm a frontend web developer.",
    "Based in Medan, Indonesia.",
  ];
  return (
    <>
      <div className=" h-[60vh] md:h-screen flex flex-col py-8 font-extrabold">
        <TypingAnimation text={textArray} />
      </div>
      <div
        className=" h-auto md:h-screen gap-8 p-4 grid grid-cols-1 md:grid-cols-3"
        data-aos="fade-up"
      >
        <div className="w-full flex flex-col justify-around px-8 gap-8">
          <div className="flex flex-col gap-4" data-aos="fade-right">
            <label className=" uppercase text-gray-500 text-sm font-normal">
              Biography
            </label>
            <p className=" text-lg font-medium">
              talented Front-End Developer from Medan, Indonesia, creating
              stunning and user-friendly interfaces.
            </p>
          </div>
          <div className="flex flex-col gap-4" data-aos="fade-right">
            <label className=" uppercase text-gray-500 text-sm font-normal">
              Contact
            </label>
            <p className=" text-lg font-medium">
              <span>Medan, Indonesia.</span>
              <br />
              <Link
                href=""
                className="hover:text-gray-400 transition-colors duration-150"
              >
                dioaryatama1106@gmail.com
              </Link>
              <br />
              <Link
                href=""
                className="hover:text-gray-400 transition-colors duration-150"
              >
                +62 896-1408-8230
              </Link>
            </p>
          </div>
          <div className="flex flex-col gap-4" data-aos="fade-right">
            <label className=" uppercase text-gray-500 text-sm font-normal">
              Biography
            </label>
            <p className=" text-lg font-medium">
              Being a frontend developer, I'm always pumped to work, learn new
              things, make some money, and make the people around me smile.
            </p>
          </div>
        </div>
        <div
          className="w-full h-[60vh] md:h-auto flex justify-center py-8  relative"
          data-aos="fade-up"
        >
          <Image
            src="/assets/hero.png"
            alt="Deskripsi gambar"
            fill
            className="rounded-full border-4 object-cover object-top absolute border-[#C5A880] border-dashed p-4"
          />
        </div>
        <div className="w-full flex flex-col justify-around items-center md:items-end gap-8 text-right px-8 ">
          <div className="flex flex-col gap-4" data-aos="fade-left">
            <label className=" uppercase text-gray-500 text-sm font-normal">
              Years of Experience
            </label>
            <Progressnumber endValue={2} duration={2000} />
          </div>
          <div className="flex flex-col gap-4" data-aos="fade-left">
            <label className=" uppercase text-gray-500 text-sm font-normal">
              Satisfaction Clients
            </label>
            <Progressnumber endValue={100} duration={2000} suffix="%" />
          </div>
          <div className="flex flex-col gap-4" data-aos="fade-left">
            <label className=" uppercase text-gray-500 text-sm font-normal">
              CLIENTS ON WORLDWIDE
            </label>
            <Progressnumber endValue={10} duration={2000} suffix="+" />
          </div>
          <div className="flex flex-col gap-4" data-aos="fade-left">
            <label className=" uppercase text-gray-500 text-sm font-normal">
              PROJECTS DONE
            </label>
            <Progressnumber endValue={10} duration={2000} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
