import Grid from "./Grid.tsx";
import {TypewriterEffect} from "./ui/typewriter-effect.tsx";

const words = [
    {
        text: "From",
    },
    {
        text: "Idea",
        className: "text-blue-500 dark:text-[#A05BB1]",
    },
    {
        text: "to",

    },
    {
        text: "Interface",
        className: "text-blue-500 dark:text-[#A05BB1]",
    },

];

const ProjectDetails = () => {
    return (

        <div id={"projects"} className="w-full h-full flex items-center justify-center flex-col px-4 sm:px-10">
            <div
                className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full flex flex-col justify-center items-center text-center">
                <TypewriterEffect words={words}/>
                <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
                    The journey of each project — from inspiration to polished execution.
                </p>
            </div>
            <Grid/>
        </div>

    )
}
export default ProjectDetails
