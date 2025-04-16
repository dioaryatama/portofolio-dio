"use client";
import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
// Carousel

interface ImageData {
  id: string;
  largeImageURL: string;
  tags: string;
  previewWidth: number;
  previewHeight: number;
}

const Carousel: React.FC = () => {
  const [data, setData] = useState<ImageData[] | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://pixabay.com/api/?key=48699979-40d39168afdea165634ce8b4f&q=white&image_type=photo"
        );
        const result = await response.json();
        console.log("🚀 ~ fetchData ~ result:", result);
        setData(result.hits);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    if (data) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? data.length - 1 : prevIndex - 1
      );
    }
  };

  const nextSlide = () => {
    if (data) {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }
  };
  return (
    <>
      <div className="relative w-full h-screen" data-aos="fade-up">
        <div className=" w-full max-w-xl">
          {data
            ? data?.map((arr, index) => (
                <Image
                  key={arr.id}
                  className={`w-screen h-screen object-cover absolute transition-all duration-1000 ${
                    index === currentIndex
                      ? "opacity-100"
                      : "translate-x-[100%] opacity-0"
                  }`}
                  src={arr.largeImageURL}
                  alt={arr.tags}
                />
              ))
            : ""}
        </div>

        <button
          onClick={previousSlide}
          className="absolute top-1/2 left-4 transform translate-y-1/2 bg-white bg-opacity-40 p-2 rounded-full opacity-60 hover:opacity-100 transition-opacity duration-300"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform translate-y-1/2 bg-white bg-opacity-40 p-2 rounded-full opacity-60 hover:opacity-100 transition-opacity duration-300"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </>
  );
};

export default Carousel;
