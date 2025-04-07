import React from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    MotionValue,
} from "motion/react";
import {ColourfulText} from "./colourful-text.tsx";
import {IProject} from "../../data/data.ts";

export const HeroParallax = ({
                                 projects,
                             }: {
    projects: IProject[];
}) => {
    const firstRow = projects.slice(0, 4);
    const secondRow = projects.slice(4, 8).reverse();
    const ref = React.useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = {stiffness: 300, damping: 30, bounce: 100};

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1000]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
        springConfig
    );

    return (
        <div
            ref={ref}
            className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
        >
            <Header/>
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
            >
                <motion.div className="hidden xl:block">
                    <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
                        {firstRow.map((product) => (
                            <ProductCard
                                project={product}
                                translate={translateX}
                                key={product.title}
                            />
                        ))}
                    </motion.div>
                    <motion.div className="flex flex-row mb-20 space-x-20">
                        {secondRow.map((product) => (
                            <ProductCard
                                project={product}
                                translate={translateXReverse}
                                key={product.title}
                            />
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div className="block xl:hidden space-y-10">
                    {Array.from({length: 4}).map((_, rowIndex) => {
                        const start = rowIndex * 2;
                        const rowProducts = projects.slice(start, start + 2);
                        return (
                            <motion.div
                                key={rowIndex}
                                className="flex flex-row justify-center space-x-6"
                            >
                                {rowProducts.map((product) => (
                                    <ProductCard
                                        project={product}
                                        translate={
                                            rowIndex % 2 === 0
                                                ? translateX
                                                : translateXReverse
                                        }
                                        key={product.title}
                                    />
                                ))}
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </div>
    );
};

export const Header = () => {
    return (
        <div
            className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full flex flex-col justify-center items-center text-center">
            <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
                Crafted with <ColourfulText text={"Passion"} startColor={"#D56AC6"} endColor={"#6A4C9C"}/>
            </h1>
            <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
                Personal experiments where I play with modern tech and design ideas to push the boundaries of digital
                creation.
            </p>
        </div>
    );
};

export const ProductCard = ({
                                project,
                                translate,
                            }: {
    project: IProject;
    translate: MotionValue<number>;
}) => {
    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            key={project.id}
            className="group/product h-96 w-[30rem] relative shrink-0"
        >
            <a
                href={`#${project.id}`}
                className="block group-hover/product:shadow-2xl"
                rel="noopener noreferrer"
            >
                <img
                    src={project.thumbnail}
                    height={600}
                    width={600}
                    className="object-cover absolute h-full w-full inset-0 object-center"
                    alt={project.title}
                />
            </a>
            <div
                className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
            <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
                {project.title}
            </h2>
        </motion.div>
    );
};
