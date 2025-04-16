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
      <div className=" flex flex-col h-[80vh] gap-8 pt-28 font-extrabold">
        <TypingAnimation text={textArray} />
      </div>
      <div className=" h-screen flex" data-aos="fade-up">
        <div className="w-1/4 flex flex-col justify-around px-8">
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
              Work for money and design for love! I’m Bruno, an UI/UX
              Interaction Designer based in Poland.
            </p>
          </div>
        </div>
        <div className="w-2/4 flex justify-center py-8">
          <Image
            src="/assets/hero.png"
            alt="Deskripsi gambar"
            width={550}
            height={400}
            className="rounded-full border-4 border-[#C5A880] border-dashed p-4"
          />
        </div>
        <div className="w-1/4 flex flex-col justify-around items-end text-right px-8 ">
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
            <Progressnumber endValue={80} duration={2000} suffix="+" />
          </div>
          <div className="flex flex-col gap-4" data-aos="fade-left">
            <label className=" uppercase text-gray-500 text-sm font-normal">
              PROJECTS DONE
            </label>
            <Progressnumber endValue={675} duration={2000} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
