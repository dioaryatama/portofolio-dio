"use client";
// components/TypingAnimation.tsx
import { useState, useEffect } from "react";

interface TypingAnimationProps {
  text: string[];
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState([""]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < text.length) {
      if (charIndex < text[lineIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prevState) => {
            const newText = [...prevState];
            newText[lineIndex] = newText[lineIndex]
              ? newText[lineIndex] + text[lineIndex][charIndex]
              : text[lineIndex][charIndex];
            return newText;
          });
          setCharIndex(charIndex + 1);
        }, 100); // Kecepatan mengetik (100ms per karakter)
        return () => clearTimeout(timeout);
      } else {
        setLineIndex(lineIndex + 1);
        setCharIndex(0);
        setDisplayedText((prevState) => [...prevState, ""]);
      }
    }
  }, [charIndex, lineIndex, text]);

  return (
    <div className=" text-7xl font-mono text-center px-8">
      {displayedText.map((line, index) => (
        <div key={index}>{line}</div>
      ))}
    </div>
  );
};

export default TypingAnimation;
