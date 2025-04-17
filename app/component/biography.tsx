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
    <div className="p-8 h-screen w-full">
      <h1 className=" text-5xl font-bold mb-16 text-center" data-aos="fade-up">
        Education - Skills - Experience
      </h1>
      <div className="flex gap-8">
        <div className="w-1/3 h-full flex flex-col gap-8">
          <div data-aos="fade-up">
            <h1 className=" font-semibold text-2xl mb-4">
              Bachelor Degree of Information Systems
            </h1>
            <p className=" font-extralight text-md">
              STMIK Triguna Dharma, Medan
            </p>
          </div>
        </div>
        <div className="w-1/3 h-full flex flex-col gap-8">
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
        <div className="w-1/3 h-full flex flex-col gap-8">
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
