// src/components/Interests.js

import React from "react";
import HeroIcon from "./HeroIcon";
import ListItemIcon from "./ListItemIcon";
import { sectionInfo } from "../data";

export default function GenericList(props) {
    const {header, listItems, iconName, listIconName, sectionName} = props;
    const displayLink = sectionName === 'socials';

    return (
        <section id={sectionName}>
        <div className="container top-0 flex-col items-center px-10 py-16 mx-auto md:h-screen md:py-32 md:flex-row">
            <div className="mb-20 text-center">
            <HeroIcon icon={iconName} />
            <h1 className="mb-4 text-3xl font-medium text-white sm:text-4xl title-font">
                {header}
            </h1>
            <p className="mx-auto text-base leading-relaxed xl:w-2/4 lg:w-3/4">
                {sectionInfo[sectionName]}
            </p>
            </div>
            <div className="flex flex-wrap -mx-2 overflow-y-auto lg:w-4/5 sm:mx-auto sm:mb-2">
            {listItems.map((listItem) => (
                <div key={listItem.name} className="w-full p-2 sm:w-1/2">
                <div className="flex flex-row items-center h-full p-4 bg-gray-800 rounded">
                    {listItem.iconName ? <ListItemIcon icon={listItem.iconName} /> : <ListItemIcon icon={listIconName} />}
                    {displayLink ? <a href={listItem.url}>{listItem.name}</a> : <span className="font-medium text-white title-font">{listItem.name}</span>}
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
}