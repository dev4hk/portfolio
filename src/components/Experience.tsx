import Works from "./Works"
import Connect from "./Connect.tsx";

const Experience = () => {
    return (
        <section
            className={"w-full max-w-7xl bg-transparent mx-auto my-16 h-screen flex flex-col items-center justify-center text-center text-white"}>
            <Works/>
            <Connect/>
        </section>
    )
}
export default Experience
