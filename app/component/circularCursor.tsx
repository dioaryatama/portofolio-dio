"use client";

import { useState, useEffect } from "react";

// Option 1: Use export default directly with the function
export default function CircularCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", updatePosition);
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.body.style.cursor = "auto";
    };
  }, [isVisible]);

  return (
    <div
      className="fixed w-8 h-8 rounded-full backdrop-invert  pointer-events-none z-50"
      style={{
        transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
        display: isVisible ? "block" : "none",
      }}
    />
  );
}
