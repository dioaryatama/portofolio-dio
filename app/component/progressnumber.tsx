"use client";
import { useEffect, useState } from "react";

interface ProgressNumberProps {
  endValue: number;
  duration: number;
  suffix?: string;
}

const Progressnumber: React.FC<ProgressNumberProps> = ({
  endValue,
  duration,
  suffix = "",
}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = endValue / (duration / 100);
    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setValue(endValue);
        clearInterval(timer);
      } else {
        setValue(start);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [endValue, duration]);

  return (
    <div className="flex flex-col ">
      <span className="text-4xl font-bold text-center md:text-right">
        {Math.round(value)}
        {suffix}
      </span>
    </div>
  );
};

export default Progressnumber;
