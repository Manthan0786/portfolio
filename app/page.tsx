"use client";

import Navbar from "../src/Navbar";
import HomeImage from "../public/homeImage";
import Introduction from "../src/introduction";
import Skills from "../src/skills";
import Projects from "../src/projects";
import Typewriter from "../src/typewriter";
import Starbackground from "../src/canvas";

export default function Home() {
  return (
      <>
        <header id="main-header">
          <Navbar />
        </header>
        <main className="flex flex-col items-center justify-between p-16">
          <section id="home">
            <div className="flex flex-row gap-10 justify-between">
              <div className="p-8 flex flex-col gap-12">
                <p className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-5xl">
                  Hi! I am Manthan Bhardwaj
                </p>
                <Typewriter />
              </div>
              <div className="-mt-20">
                <HomeImage />
              </div>
              <div id="stars">
                <Starbackground />
              </div>
            </div>
          </section>
          <section id="about">
            <Introduction />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>
        </main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>Designed by Manthan Bhardwaj &copy; 2023</p>
        </footer>
      </>
  );
}
