import {HeroParallax} from "./ui/hero-parallax.tsx";

export const products = [
    {
        title: "SpringAI - Chat Bot",
        link: "https://github.com/dev4hk/SpringAI-Chatbot",
        thumbnail:
            "src/assets/images/ai-chatbot.png",
    },
    {
        title: "React - iPhone 3D Clone",
        link: "https://github.com/dev4hk/react-iphone-3d",
        thumbnail:
            "src/assets/images/iphone.png",
    },
    {
        title: "React - Zentry Clone",
        link: "https://github.com/dev4hk/zentry-clone",
        thumbnail:
            "src/assets/images/zentry.png",
    },

    {
        title: "Spring Boot & Angular - Loan Application",
        link: "https://github.com/dev4hk/loan-springboot-microservices",
        thumbnail:
            "src/assets/images/loan-application.png",
    },
    {
        title: "Selenium, TestNG & Cucumber - Loan Application Testing",
        link: "https://github.com/dev4hk/loan-springboot-microservices-test",
        thumbnail:
            "src/assets/images/testing.png",
    },
    {
        title: "Core Java - File Compressor",
        link: "https://github.com/dev4hk/file-compressor",
        thumbnail:
            "src/assets/images/file-compressor.png",
    },
    {
        title: "Angular - Path Finder",
        link: "https://github.com/dev4hk/Waypoint-Wizard",
        thumbnail:
            "src/assets/images/path-finder.png",
    },
    {
        title: "React - Restaurant App",
        link: "https://github.com/dev4hk/Restaurant-App",
        thumbnail:
            "src/assets/images/little-lemon.png",
    },


]

const Projects = () => {
    return (
        <section className={"w-full bg-transparent max-w-[2560px] mx-auto"}>
            <HeroParallax products={products}/>
        </section>
    )
}
export default Projects
