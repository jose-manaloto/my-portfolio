// src/components/WorkExperience.js

import { BriefcaseIcon, ServerIcon } from "@heroicons/react/solid";
import React, { useState }  from "react";
import WorkModal from "./WorkModal";
import { workExperience } from "../data";

export default function WorkExperience() {
  const [show, setShow] = useState({show: false, data: null})

  const handleClose = () => {
    setShow({ show: false, data: null });
  };

  return (
    <section id="work-experience">
        <div className="container mx-auto px-10 py-32 md:flex-row flex-col items-center h-screen">
        <div className="text-center mb-20">
          <BriefcaseIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Work Experience
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Here are the companies I have previously worked for. Click on the company to find out more about my responsiblities there.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {workExperience.map((we) => (
            <div key={we.company} className="hover:cursor-pointer p-2 sm:w-1/2 w-full" onClick={() => setShow({show: true, data: we})}>
              <div className="bg-gray-800 rounded grid grid-cols-10 p-4 h-full items-center">
                <ServerIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <div className="col-span-4 title-font font-medium text-white">                
                    <h2>{we.name}</h2>
                </div>

                <div className="col-end-11 col-span-4 font-extralight text-white text-right">                
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