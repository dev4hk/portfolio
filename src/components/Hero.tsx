import {BackgroundLines} from "./ui/background-lines.tsx";
import {FlipWords} from "./ui/flip-words.tsx";
import {heroFlipWords} from "../data/data.ts";

const Hero = () => {
    return (
        <section className={"w-full h-screen"} id={"home"}>
            <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 h-full">
                <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-3xl lg:text-5xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                    "Hi, I build sleek, performant <FlipWords words={heroFlipWords}/>experiences."
                </h2>
                <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
                    Software engineer with a focus on development & testing, turning ideas into clean,
                    user-first experiences.
                </p>
            </BackgroundLines>
        </section>
    )
}
export default Hero
