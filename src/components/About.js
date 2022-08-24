// src/components/About.js

import React, {useState} from "react";

export default function About() {
  const [showMessage, setShowMessage] = useState(false);
  return (
    <section id="about">
      <div className="container flex flex-col items-center px-10 py-20 mx-auto md:h-screen md:flex-row text-black">
        <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <h1 className="mb-4 text-3xl font-medium title-font sm:text-4xl text-neutral-200">
            Hi, I'm Jose.
            <br className="hidden lg:inline-block" /> Nice to meet you!
          </h1>
          <p className="mb-8 leading-relaxed text-neutral-200">
            Eccentric millionaire, entrepeneur, deep sea diver... {showMessage && <span>Everything I am not.</span>}
            <br/> 
            {!showMessage && <a href="#" onClick={() => setShowMessage(true)}><b>Read More</b></a>}
          </p>
          {showMessage && 
          <div>
          <p className="mb-8 leading-relaxed text-neutral-200">So click on one of the options below or <a href="#socials"><b>Get in touch</b></a></p>
          <div className="flex grid grid-cols-3 gap-2">
            <a
              href="#intro"
              className="inline-flex px-6 py-2 text-lg text-black bg-amber-100 border-0 rounded focus:outline-none hover:bg-gray-700 hover:text-white">
              About Me
            </a>
            <a
              href="#skills"
              className="inline-flex px-6 py-2 text-lg text-black bg-amber-100 border-0 rounded focus:outline-none hover:bg-gray-700 hover:text-white">
              Tech
            </a>
            <a
              href="#work-experience"
              className="inline-flex px-6 py-2 text-lg text-black bg-amber-100 border-0 rounded focus:outline-none hover:bg-gray-700 hover:text-white">
              Work Experience
            </a>
          </div> 
          </div>}
        </div>
        <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
          <img
            className="object-cover object-center rounded-full"
            alt="hero"
            src={require("../IMG_1390.jpeg")}
          />
        </div>
      </div>
    </section>
  );
}