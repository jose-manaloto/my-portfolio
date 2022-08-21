// src/components/About.js

import React, {useState} from "react";

export default function About() {
  const [showMessage, setShowMessage] = useState(false);
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center h-screen">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Jose.
            <br className="hidden lg:inline-block" /> Nice to meet you!
          </h1>
          <p className="mb-8 leading-relaxed">
            Eccentric millionaire, entrepeneur, deep sea diver... {showMessage && <span>Everything I am not.</span>}
            <br/> 
            {!showMessage && <a onClick={() => setShowMessage(true)}>Read More</a>}
          </p>
          {showMessage && 
          <div>
          <p className="mb-8 leading-relaxed">So click on Get to Know me to truly see who I am or Get In touch.</p>
          <div className="flex justify-center">
            <a
              href="#socials"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Get in touch
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Get to know me
            </a>
          </div> 
          </div>}
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
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