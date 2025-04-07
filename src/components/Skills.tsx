import {HoverEffect} from "./ui/card-hover-effect"
import {skills} from "../data/data.ts";
import {ColourfulText} from "./ui/colourful-text.tsx";
import React from "react";

const Skills = () => {
    return (
        <section
            className={"w-full max-w-7xl bg-transparent mx-auto my-16 h-screen flex flex-col items-center justify-center text-center"}>
            <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
                What's in My <ColourfulText text={"Toolbox"} startColor={"#ffaf40"} endColor={"#ff4d4d"}/>
            </h1>
            <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
                From pixels to pipelines—here’s what I build with.
            </p>
            <HoverEffect items={skills}/>
        </section>
    )
}
export default Skills;
