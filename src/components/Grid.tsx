import {BentoGrid, BentoGridItem} from "./ui/bento-grid.tsx";
import {IProject, projects} from "../data/data.ts";
import {AnimatedTooltip} from "./ui/animated-tooltip.tsx";

const Grid = () => {

    const getIconsNode = (project: IProject) => {

        const getFileName = (path: string) => {
            const fileNameWithExtension = path.split("/").pop();
            return fileNameWithExtension!.split(".")[0];
        }

        const items = project.icons.map((icon, index) => {
            return {
                id: index,
                name: getFileName(icon),
                image: icon
            }
        })

        return (
            <div className="flex flex-row items-center justify-between mb-10 w-full">
                <div className={"flex"}>
                    <AnimatedTooltip items={items}/>
                </div>
                <div className={"flex justify-end gap-3"}>
                    {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <button
                                className="relative inline-flex overflow-hidden rounded-3xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                            >
                                <span
                                    className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"/>
                                <div
                                    className="p-1 bg-black rounded-3xl relative group transition duration-200 text-white hover:bg-transparent flex items-center justify-center">
                                    <img src="./assets/logos/Rocket.svg" alt="Details"
                                         className="w-6 h-6 brightness-0 invert"/>
                                </div>
                            </button>
                        </a>
                    )}

                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-[2px] relative block"
                    >

                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl"/>
                        <div
                            className="px-1 py-1 bg-black rounded-3xl relative group transition duration-200 text-white hover:bg-transparent flex items-center justify-center">
                            <img src="./assets/logos/Github.svg" alt="Details" className="w-6 h-6 brightness-0 invert"/>
                        </div>
                    </a>
                </div>
            </div>
        );
    }

    return (
        <BentoGrid className="max-w-screen w-full mx-auto gap-8">
            {projects.map((item, i) => (
                <BentoGridItem
                    key={i}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    header={<Skeleton image={item.thumbnail} name={item.title}/>}
                    icon={getIconsNode(item)}
                    className={""}
                />
            ))}
        </BentoGrid>
    )
}
export default Grid

const Skeleton = ({image, name}: { image: string; name: string }) => (
    <div
        className="flex flex-1 w-full h-52 justify-center items-center rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 justify-center"
    >
        <img src={image} alt={name} className={"object-cover h-full rounded-xl"}/>
    </div>
);