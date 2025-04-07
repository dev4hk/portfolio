import Hero from "./components/Hero.tsx";
import Projects from "./components/Projects.tsx";
import Skills from "./components/Skills.tsx";

function App() {
    return (
        <main className={"relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto"}>
            <Hero/>
            <Skills/>
            <Projects/>
        </main>
    )
}

export default App
