import Hero from "./components/Hero.tsx";
import Projects from "./components/Projects.tsx";
import Skills from "./components/Skills.tsx";
import Experience from "./components/Experience.tsx";
import {FloatingNav} from "./components/ui/floating-navbar.tsx";
import {navItems} from "./data/data.ts";
import Connect from "./components/Connect.tsx";

function App() {
    return (
        <main className={"relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto"}>
            <FloatingNav navItems={navItems}/>
            <Hero/>
            <Skills/>
            <Projects/>
            <Experience/>
            <Connect/>
        </main>
    )
}

export default App
