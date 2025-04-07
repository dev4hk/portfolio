import {motion} from "motion/react";
import {useEffect, useRef, useState} from "react";

function interpolateColor(startColor: string, endColor: string, factor: number): string {
    const hexToRgb = (hex: string) =>
        hex.replace(/^#/, "").match(/.{1,2}/g)!.map((x) => parseInt(x, 16));

    const rgbToHex = (rgb: number[]) =>
        `#${rgb.map((x) => x.toString(16).padStart(2, "0")).join("")}`;

    const start = hexToRgb(startColor);
    const end = hexToRgb(endColor);
    const result = start.map((s, i) => Math.round(s + factor * (end[i] - s)));

    return rgbToHex(result);
}

export function ColourfulText({
                                  text,
                                  startColor,
                                  endColor,
                              }: {
    text: string;
    startColor: string;
    endColor: string;
}) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0.5, // Adjust this if needed
            }
        );

        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    const colors = Array.from({length: text.length}, (_, i) => {
        const factor = i / (text.length - 1);
        return interpolateColor(startColor, endColor, factor);
    });

    return (
        <div ref={ref} className={"inline-block"}>
            {text.split("").map((char, index) => (
                <motion.span
                    key={`${char}-${index}`}
                    animate={isVisible ? {
                        color: colors[index],
                        y: [0, -3, 0],
                        scale: [1, 1.01, 1],
                        filter: ["blur(0px)", `blur(5px)`, "blur(0px)"],
                        opacity: [1, 0.8, 1],
                    } : undefined}
                    transition={{
                        duration: 0.5,
                        delay: index * 0.05,
                    }}
                    className="inline-block whitespace-pre font-sans tracking-tight"
                >
                    {char}
                </motion.span>
            ))}
        </div>
    );
}
