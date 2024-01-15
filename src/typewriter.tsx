import { useState, useEffect } from "react";

// interface TypewriterProps {
//   words: string[];
//   loop?: boolean;
//   delay?: number;
//   onFinish?: () => void;
// }

const words = [
  "Software Developer ",
  "MERN Stack Developer",
  "React Developer",
];
const loop = true;
const onFinish = () => console.log("Typewriter effect finished");

const Typewriter = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currWord, setCurrWord] = useState("");

  useEffect(() => {
    const delay = 100;
    const typewriter = setTimeout(() => {
      if (charIndex < words[wordIndex].length) {
        setCurrWord(currWord + words[wordIndex][charIndex]);
        setCharIndex(charIndex + 1);
      } else if (wordIndex < words.length - 1) {
        setCurrWord(currWord+"\n");
        setWordIndex(wordIndex + 1);
        setCharIndex(0);
      } else if (loop) {
        const pause = setTimeout(() => {
          setCurrWord("");
          setWordIndex(0);
          setCharIndex(0);
        }, 2000);
        return () => clearTimeout(pause);
      } else {
        onFinish();
      }
    }, delay);

    return () => clearTimeout(typewriter);
  }, [wordIndex, charIndex, words, loop, currWord, onFinish]);

  return (
    <>
      <pre className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-3xl">
        {currWord + "|"}
      </pre>
    </>
  );
};

export default Typewriter;
