"use client";

import RatingStar from "./ratingstar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Biography: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="p-8 h-auto md:h-screen w-full">
      <h1
        className=" text-5xl font-bold mb-16 text-center hidden md:block"
        data-aos="fade-up"
      >
        Education - Skills - Experience
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="w-full h-full flex flex-col gap-8">
          <h1
            className=" py-2 text-center border-b w-auto border-black font-bold uppercase text-3xl mb-4 md:hidden"
            data-aos="fade-up"
          >
            Educations
          </h1>
          <div data-aos="fade-up">
            <h1 className=" font-semibold text-2xl mb-4">
              Bachelor Degree of Information Systems
            </h1>
            <p className=" font-extralight text-md">
              STMIK Triguna Dharma, Medan
            </p>
          </div>
        </div>
        <div className="w-full h-full flex flex-col gap-8">
          <h1
            className=" py-2 text-center border-b w-auto border-black font-bold uppercase text-3xl mb-4 md:hidden"
            data-aos="fade-up"
          >
            Skills
          </h1>

          <div data-aos="fade-up">
            <h1 className=" font-semibold text-2xl mb-4">HTML5</h1>
            <RatingStar rating={5} maxRating={5} />
          </div>
          <div data-aos="fade-up">
            <h1 className=" font-semibold text-2xl mb-4">CSS3</h1>
            <RatingStar rating={5} maxRating={5} />
          </div>
          <div data-aos="fade-up">
            <h1 className=" font-semibold text-2xl mb-4">JS</h1>
            <RatingStar rating={5} maxRating={5} />
          </div>
          <div data-aos="fade-up">
            <h1 className=" font-semibold text-2xl mb-4">Vue.Js</h1>
            <RatingStar rating={4} maxRating={5} />
          </div>
          <div data-aos="fade-up">
            <h1 className=" font-semibold text-2xl mb-4">React.Js</h1>
            <RatingStar rating={4} maxRating={5} />
          </div>
          <div data-aos="fade-up">
            <h1 className=" font-semibold text-2xl mb-4">Tailwind</h1>
            <RatingStar rating={4} maxRating={5} />
          </div>
        </div>
        <div className="w-full h-full flex flex-col gap-8">
          <h1
            className=" py-2 text-center border-b w-auto border-black font-bold uppercase text-3xl mb-4 md:hidden"
            data-aos="fade-up"
          >
            Experiences
          </h1>
          <div data-aos="fade-up">
            <h1 className=" font-semibold text-2xl mb-4">
              Tamtech International, Yogyakarta
            </h1>
            <p className=" font-extralight text-md">
              (2023 - 2025) Frontend Web Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;
