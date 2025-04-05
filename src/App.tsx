import Hero from "./components/Hero.tsx";

function App() {
    return (
        <main
            className={"relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto"}>
            <div className={"w-full"}>
                <Hero/>
            </div>
        </main>
    )
}

export default App
