import Hero from "./components/Hero.tsx";
import Projects from "./components/projects.tsx";

function App() {
    return (
        <main className={"relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto"}>
            <Hero/>
            <Projects/>
        </main>
    )
}

export default App
