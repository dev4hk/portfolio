import {useState} from "react";
import {
    motion,
    useTransform,
    AnimatePresence,
    useMotionValue,
    useSpring,
} from "motion/react";

export const AnimatedTooltip = ({
                                    items,
                                }: {
    items: {
        id: number;
        name: string;
        image: string;
    }[];
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const springConfig = {stiffness: 100, damping: 5};
    const x = useMotionValue(0); // going to set this value on mouse move
    // rotate the tooltip
    const rotate = useSpring(
        useTransform(x, [-100, 100], [-45, 45]),
        springConfig,
    );
    // translate the tooltip
    const translateX = useSpring(
        useTransform(x, [-100, 100], [-50, 50]),
        springConfig,
    );
    const handleMouseMove = (event: any) => {
        const halfWidth = event.target.offsetWidth / 2;
        x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
    };

    return (
        <>
            {items.map((item) => (
                <div
                    className="group relative -mr-2.5"
                    key={item.name}
                    onMouseEnter={() => setHoveredIndex(item.id)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence mode="popLayout">
                        {hoveredIndex === item.id && (
                            <motion.div
                                initial={{opacity: 0, y: 20, scale: 0.6}}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 10,
                                    },
                                }}
                                exit={{opacity: 0, y: 20, scale: 0.6}}
                                style={{
                                    translateX: translateX,
                                    rotate: rotate,
                                    whiteSpace: "nowrap",
                                }}
                                className="absolute -top-14 -left-5 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
                            >

                                <div className="relative z-30 text-base font-bold text-white">
                                    {item.name}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <img
                        onMouseMove={handleMouseMove}
                        height={100}
                        width={100}
                        src={item.image}
                        alt={item.name}
                        className="relative !m-0 h-8 w-8 rounded-full border-2 border-transparent object-cover object-top !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105 bg-black"
                    />
                </div>
            ))}
        </>
    );
};
