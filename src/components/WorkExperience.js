// src/components/WorkExperience.js

import { BriefcaseIcon, ServerIcon } from "@heroicons/react/solid";
import React, { useState }  from "react";
import WorkModal from "./WorkModal";
import { workExperience } from "../data";

export default function WorkExperience() {
  const [show, setShow] = useState({show: false, data: null})

  const handleClose = () => {
    setShow({ show: false, data: null });
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="work-experience">
        <div className="container top-0 flex-col items-center px-10 py-16 mx-auto md:h-screen md:py-32 md:flex-row">
        <div className="mb-20 text-center">
          <BriefcaseIcon className="inline-block w-10 mb-4" />
          <h1 className="mb-4 text-3xl font-medium text-oat-dark dark:text-white sm:text-4xl title-font">
            Work Experience
          </h1>
          <p className="mx-auto text-base leading-relaxed xl:w-2/4 lg:w-3/4">
            Here are the companies I have previously worked for. Click on the company to find out more about my responsiblities there.
          </p>
        </div>
        <div className="flex flex-wrap -mx-2 lg:w-4/5 sm:mx-auto sm:mb-2">
          {workExperience.map((we) => (
            <div key={we.company} className="w-full p-2 hover:cursor-pointer sm:w-1/2" onClick={() => setShow({show: true, data: we})}>
              <div className="grid items-center h-full grid-cols-10 p-4 rounded bg-oat-dark dark:bg-gray-800">
                <ServerIcon className="flex-shrink-0 w-6 h-6 mr-4 text-oat-icon dark:text-green-400" />
                <div className="col-span-4 font-medium dark:text-white title-font">                
                    <h2>{we.name}</h2>
                </div>

                <div className="col-span-4 col-end-11 text-right dark:text-white font-extralight">                
                    {we.data}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {show.show && show.data && <WorkModal closeModal={handleClose} data={show.data} />}
    </section>
  );
}