"use client";
import { useEffect } from "react";
import "./textReveal.css";
import Image from "next/image";

const TextReveal = () => {
  useEffect(() => {
    // Hanya jalankan IntersectionObserver jika layar mobile
    if (window.innerWidth < 768) {
      const spans = document.querySelectorAll(".test span");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
            }
          });
        },
        { threshold: 0.5 }
      );

      spans.forEach((span) => observer.observe(span));

      return () => observer.disconnect();
    }
  }, []);

  return (
    <>
      <div className="test sticky top-0 h-screen w-screen bg-black flex flex-col justify-start items-center pt-20 px-8 md:px-20">
        <h1 className="text-center font-extrabold text-4xl md:text-7xl pb-8">
          <span>The Art of Making Websites Click.</span>
        </h1>
        <p className="text-center font-bold text-2xl md:text-5xl leading-[1.5]">
          <span>
            I work in tech as a frontend developer. That means I spend a lot of
            time writing code to build the user interface – you know, all the
            buttons, layouts, and visuals you see and interact with on a
            website. It's kind of like being a digital architect for the user
            experience.
          </span>
        </p>
      </div>

      <div className="sticky top-0 h-screen w-screen"></div>

      <div className="h-auto md:h-screen w-screen bg-black sticky grid grid-cols-1 md:grid-cols-6 gap-8 p-20">
        <div className="relative leftSection md:h-[100%] h-[20vh] w-full bg-white rounded-2xl overflow-hidden md:col-span-2">
          <Image
            className="  object-cover"
            fill
            alt=""
            src="/assets/content.jpg"
          />
        </div>
        <div className="rightSection w-full h-full flex flex-col gap-8 md:col-span-3">
          <p className="text-gray-400 text-sm md:text-2xl font-normal leading-[2] ">
            Computers used to be{" "}
            <span className="text-white font-semibold">
              huge and complicated
            </span>
            . Now we've got the internet, smart phones, AI! The digital world is
            getting{" "}
            <span className="text-white font-semibold">
              cooler and changing super fast.
            </span>
          </p>
          <p className="text-gray-400 text-sm md:text-2xl font-normal leading-[2]">
            So, I'm a{" "}
            <span className="text-white font-semibold">
              frontend developer!
            </span>{" "}
            My job is to make websites and apps look{" "}
            <span className="text-white font-semibold">awesome</span> and{" "}
            <span className="text-white font-semibold">easy</span> to use. I use
            HTML, CSS, and JavaScript to{" "}
            <span className="text-white font-semibold">build</span> everything
            you see and click on. Gotta make sure the website's{" "}
            <span className="text-white font-semibold">
              fun and not confusing!
            </span>
          </p>
          <div className="border-t-2 border-gray-500"></div>
          <p className="text-md md:text-2xl font-semibold text-white leading-[2]">
            Your Future Frontend Developer Here! <br />
            Based in Medan, Indonesia. <br />
            Dio Aryatama.
          </p>
        </div>
      </div>

      <div className="sticky top-0 h-screen w-screen bg-black"></div>
    </>
  );
};

export default TextReveal;
