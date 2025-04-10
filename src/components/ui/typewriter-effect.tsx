import {motion, stagger, useAnimate} from "motion/react";
import {useEffect, useRef, useState} from "react";
import {cn} from "../../../lib/utils.ts";

export const TypewriterEffect = ({
                                     words,
                                     className,
                                     cursorClassName,
                                 }: {
    words: {
        text: string;
        className?: string;
    }[];
    className?: string;
    cursorClassName?: string;
}) => {
    const wordsArray = words.map((word) => ({
        ...word,
        text: word.text.split(""),
    }));

    const [scope, animate] = useAnimate();
    const containerRef = useRef(null);
    const [isInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Re-trigger animation every time it comes into view
                    animate(
                        "span",
                        {
                            display: "inline-block",
                            opacity: 1,
                            width: "fit-content",
                        },
                        {
                            duration: 0.3,
                            delay: stagger(0.1),
                            ease: "easeInOut",
                        }
                    );
                } else {
                    // Reset visibility when out of view (optional for re-animating)
                    animate(
                        "span",
                        {
                            opacity: 0,
                        },
                        {duration: 0}
                    );
                }
            },
            {
                threshold: 0.5,
            }
        );

        if (containerRef.current) observer.observe(containerRef.current);
        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current);
        };
    }, []);

    useEffect(() => {
        if (isInView) {
            animate(
                "span",
                {
                    display: "inline-block",
                    opacity: 1,
                    width: "fit-content",
                },
                {
                    duration: 0.3,
                    delay: stagger(0.1),
                    ease: "easeInOut",
                }
            );
        }
    }, [isInView]);

    const renderWords = () => (
        <motion.div ref={scope} className="inline">
            {wordsArray.map((word, idx) => (
                <div key={`word-${idx}`} className="inline-block">
                    {word.text.map((char, index) => (
                        <motion.span
                            initial={{}}
                            key={`char-${index}`}
                            className={cn(
                                `dark:text-white text-black opacity-0 hidden`,
                                word.className
                            )}
                        >
                            {char}
                        </motion.span>
                    ))}
                    &nbsp;
                </div>
            ))}
        </motion.div>
    );

    return (
        <div
            ref={containerRef}
            className={cn(
                "text-base text-2xl md:text-7xl font-bold text-center",
                className
            )}
        >
            {renderWords()}
            <motion.span
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className={cn(
                    "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-[#A05BB1]",
                    cursorClassName
                )}
            ></motion.span>
        </div>
    );
};


export const TypewriterEffectSmooth = ({
                                           words,
                                           className,
                                           cursorClassName,
                                       }: {
    words: {
        text: string;
        className?: string;
    }[];
    className?: string;
    cursorClassName?: string;
}) => {
    const wordsArray = words.map((word) => ({
        ...word,
        text: word.text.split(""),
    }));

    const containerRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            {
                threshold: 0.5,
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    const renderWords = () => (
        <div>
            {wordsArray.map((word, idx) => (
                <div key={`word-${idx}`} className="inline-block">
                    {word.text.map((char, index) => (
                        <span
                            key={`char-${index}`}
                            className={cn(
                                `dark:text-white text-black`,
                                word.className
                            )}
                        >
                            {char}
                        </span>
                    ))}
                    &nbsp;
                </div>
            ))}
        </div>
    );

    return (
        <div
            ref={containerRef}
            className={cn("flex space-x-1 my-6", className)}
        >
            <motion.div
                className="overflow-hidden pb-2"
                initial={{width: "0%"}}
                animate={isInView ? {width: "fit-content"} : {}}
                transition={{
                    duration: 2,
                    ease: "linear",
                    delay: 1,
                }}
            >
                <div
                    className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold"
                    style={{whiteSpace: "nowrap"}}
                >
                    {renderWords()}
                </div>
            </motion.div>
            <motion.span
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className={cn(
                    "block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-[#A05BB1]",
                    cursorClassName
                )}
            ></motion.span>
        </div>
    );
};

