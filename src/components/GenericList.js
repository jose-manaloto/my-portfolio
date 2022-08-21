// src/components/Interests.js

import React from "react";
import HeroIcon from "./HeroIcon";
import ListItemIcon from "./ListItemIcon";
import { sectionInfo } from "../data";

export default function GenericList(props) {
    const {header, listItems, iconName, listIconName, sectionName} = props;
    const displayLink = sectionName == 'socials';

    return (
        <section id={sectionName}>
        <div className="container mx-auto px-10 py-32 md:flex-row flex-col items-center h-screen">
            <div className="text-center mb-20">
            <HeroIcon icon={iconName} />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                {header}
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                {sectionInfo[sectionName]}
            </p>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {listItems.map((listItem) => (
                <div key={listItem.name} className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex flex-row p-4 h-full items-center">
                    <ListItemIcon icon={listIconName} />
                    {displayLink ? <a href={listItem.url}>{listItem.name}</a> : <span className="title-font font-medium text-white">{listItem.name}</span>}
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
}