// src/components/Navbar.js

import ThemeSwitch from './ThemeSwitch'
import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="top-0 z-10 bg-oat-dark dark:bg-gray-800 md:sticky">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <a className="mb-4 font-medium text-white title-font md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Jose Manaloto
          </a>
        </a>
        <nav className="flex flex-wrap items-center justify-center text-base md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700">
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#work-experience" className="mr-5 hover:text-white">
            Work Experience
          </a>
          <a href="#interests" className="mr-5 hover:text-white">
            Interests
          </a>
        </nav>
        <a
          href="#socials"
          className="inline-flex items-center px-3 py-1 mt-4 text-base border-0 rounded dark:bg-gray-800 focus:outline-none hover:text-white md:mt-0">
          Contact Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
        <a>
          <ThemeSwitch />
        </a>
      </div>
    </header>
  );
}