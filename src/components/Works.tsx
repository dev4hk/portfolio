import {ColourfulText} from "./ui/colourful-text.tsx";
import {workExperience} from "../data/data.ts";
import {Button} from "./ui/moving-border.tsx";

const Works = () => {
    return (
        <div
            className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full flex flex-col justify-center items-center text-center">
            <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
                Where I've Left <ColourfulText text={"My Mark"} startColor={"#D56AC6"} endColor={"#6A4C9C"}/>
            </h1>
            <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
                Continuous growth through real-world challenges, collaboration, and innovation.
            </p>
            <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
                {workExperience.map((card) => (
                    <Button
                        key={card.id}
                        borderRadius="1.75rem"
                        className="flex-1 text-white border-neutral-200 dark:border-slate-800 px-4 cursor-"
                        duration={Math.floor(Math.random() * 10000) + 10000}
                    >
                        <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                            <img
                                src={card.thumbnail}
                                alt={card.thumbnail}
                                className="lg:w-32 md:w-20 w-16"
                            />
                            <div className="lg:ms-5">
                                <h1 className="text-start text-xl md:text-2xl font-bold">
                                    {card.title}
                                </h1>
                                <p className="text-start text-white-100 mt-3 font-semibold">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>

        </div>
    )
}
export default Works
