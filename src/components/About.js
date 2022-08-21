// src/components/About.js

import React, {useState} from "react";

export default function About() {
  const [showMessage, setShowMessage] = useState(false);
  return (
    <section id="about">
      <div className="container flex flex-col items-center px-10 py-20 mx-auto md:h-screen md:flex-row">
        <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <h1 className="mb-4 text-3xl font-medium text-white title-font sm:text-4xl">
            Hi, I'm Jose.
            <br className="hidden lg:inline-block" /> Nice to meet you!
          </h1>
          <p className="mb-8 leading-relaxed">
            Eccentric millionaire, entrepeneur, deep sea diver... {showMessage && <span>Everything I am not.</span>}
            <br/> 
            {!showMessage && <a href="#" onClick={() => setShowMessage(true)}>Read More</a>}
          </p>
          {showMessage && 
          <div>
          <p className="mb-8 leading-relaxed">So click on Get to Know me to truly see who I am or Get In touch.</p>
          <div className="flex justify-center">
            <a
              href="#socials"
              className="inline-flex px-6 py-2 text-lg text-white bg-green-500 border-0 rounded focus:outline-none hover:bg-green-600">
              Get in touch
            </a>
            <a
              href="#intro"
              className="inline-flex px-6 py-2 ml-4 text-lg text-gray-400 bg-gray-800 border-0 rounded focus:outline-none hover:bg-gray-700 hover:text-white">
              Get to know me
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