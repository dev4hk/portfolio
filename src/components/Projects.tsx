import {HeroParallax} from "./ui/hero-parallax.tsx";
import {projects} from "../data/data.ts";
import ProjectDetails from "./ProjectDetails.tsx";

const Projects = () => {
    return (
        <section className={"w-full bg-transparent max-w-[2560px] mx-auto my-16"}>
            <HeroParallax projects={projects}/>
            <ProjectDetails/>
        </section>
    )
}
export default Projects
