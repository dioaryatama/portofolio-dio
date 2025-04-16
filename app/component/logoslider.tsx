import React from "react";
import Image from "next/image";

const logoFiles = [
  "1.svg",
  "2.svg",
  "3.svg",
  "4.svg",
  "5.svg",
  "6.svg",
  "7.svg",
  "8.svg",
  "9.svg",
  "1.svg",
  "2.svg",
  "3.svg",
  "4.svg",
  "5.svg",
  "6.svg",
  "7.svg",
  "8.svg",
  "9.svg",
];

const LogoSlider: React.FC = () => {
  return (
    <div className="flex flex-nowrap overflow-hidden my-16">
      <div className="flex gap-16 animate-infinite-scroll">
        {logoFiles.concat(logoFiles).map((file, index) => (
          <Image
            width={100}
            height={100}
            key={`Logo-${index}`}
            src={`/assets/logos/${file}`}
            alt={`Logo ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
