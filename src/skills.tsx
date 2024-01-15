import c from "../public/skill images/c++.png";
import javascript from "../public/skill images/javascript.png";
import html from "../public/skill images/html.png";
import sass from "../public/skill images/sass.png";
import mongodb from "../public/skill images/mongodb.png";
import mysql from "../public/skill images/mysql.png";
import node from "../public/skill images/nodejs.png";
import postgresql from "../public/skill images/postgresql.png";
import react from "../public/skill images/react.png";
import redux from "../public/skill images/redux.png";
import typescript from "../public/skill images/typescript.png";
import Image from "next/image";

export default function Skills() {
  const icons = [
    c,
    javascript,
    html,
    sass,
    mongodb,
    mysql,
    node,
    postgresql,
    react,
    redux,
    typescript,
  ];
  return (
    <>
      <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-5xl">
        Skills
      </h1>
      <div className="skills_icons_container">
        {icons.map((i, index) => {
          if (i == react) {
            return (
              <Image
                key={index}
                src={react}
                alt="react logo"
                width="100"
                height="300"
                className="react_logo"
              />
            );
          } else {
            return (
              <Image
                key={index}
                src={i}
                alt={`${i} logo `}
                width="100"
                height="300"
                className="skills_icons"
              />
            );
          }
        })}
      </div>
    </>
  );
}
