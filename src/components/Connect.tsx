import {ColourfulText} from "./ui/colourful-text.tsx";

const Connect = () => {
    return (
        <div
            className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full flex flex-col justify-center items-center text-center">
            <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
                "Let's <ColourfulText text={"Connect"} startColor={"#0be881"} endColor={"#00d8d6"}/>"
            </h1>
            <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
                Whether it’s a project, a new opportunity, or just a chat about tech and ideas — my inbox is always
                open. Don’t hesitate to reach out 🙂
            </p>
        </div>
    )
}
export default Connect
