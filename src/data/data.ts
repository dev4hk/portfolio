export const heroFlipWords = [
    "frontend",
    "backend",
    "testing",
    "scripting",
    "teamwork"
];

export interface IProject {
    id: string;
    title: string;
    description: string;
    link: string;
    demo?: string;
    thumbnail: string;
    tech: string[];
    icons: string[];
}

export const projects: IProject[] = [
    {
        id: "chatbot",
        title: "AI Chatbot",
        description: "Simple AI chatbot application built using Spring Boot, Spring AI, Next.js, TailwindCSS, and Ollama.",
        link: "https://github.com/dev4hk/SpringAI-Chatbot",
        thumbnail:
            "src/assets/images/ai-chatbot.png",
        tech: [
            "Spring Boot", "Spring AI", "Maven", "Next.js", "Tailwind CSS", "TypeScript, Ollama, LLaVA, Gemma3, Deepseek-r1"],
        icons: [
            "src/assets/logos/SpringBoot.svg",
            "src/assets/logos/SpringAI.png",
            "src/assets/logos/Maven.svg",
            "src/assets/logos/Next.svg",
            "src/assets/logos/TailwindCSS.svg",
            "src/assets/logos/TypeScript.svg",
            "src/assets/logos/Ollama.svg",
            "src/assets/logos/Llava.svg",
            "src/assets/logos/Gemma.svg",
            "src/assets/logos/Deepseek.svg"
        ]
    },
    {
        id: "iphone",
        title: "iPhone 3D Clone",
        description: "A responsive and interactive clone of the iPhone 15 Pro product page featuring 3D model rendering, inspired by Apple's iconic design",
        link: "https://github.com/dev4hk/react-iphone-3d",
        demo: "",
        thumbnail:
            "src/assets/images/iphone.png",
        tech: [
            "ReactJS",
            "JavaScript",
            "Tailwind CSS",
            "Vite"
        ],
        icons: [
            "src/assets/logos/React.svg",
            "src/assets/logos/JavaScript.svg",
            "src/assets/logos/TailwindCSS.svg",
            "src/assets/logos/Vite.svg"
        ]
    },
    {
        id: "zentry",
        title: "Zentry Clone",
        description: "A dynamic and interactive Zentry-cloned website combining scroll-triggered animations & geometric transitions to create an immersive user experience",
        link: "https://github.com/dev4hk/zentry-clone",
        demo: "",
        thumbnail:
            "src/assets/images/zentry.png",
        tech: [
            "ReactJS",
            "Tailwind CSS",
            "JavaScript",
            "Vite"
        ],
        icons: [
            "src/assets/logos/React.svg",
            "src/assets/logos/TailwindCSS.svg",
            "src/assets/logos/JavaScript.svg",
            "src/assets/logos/Vite.svg"
        ]
    },

    {
        id: "loan",
        title: "Loan Application",
        description: "Spring Boot & Angular application to simulate loan process using microservice architecture",
        link: "https://github.com/dev4hk/loan-springboot-microservices",
        thumbnail:
            "src/assets/images/loan-application.png",
        tech: [
            "Spring Boot",
            "Spring Cloud",
            "Maven",
            "Grafana",
            "Swagger",
            "JUnit",
            "Keycloak",
            "RabbitMQ",
            "Kafka",
            "Docker",
            "Angular",
            "TypeScript",
            "Bootstrap"
        ],
        icons: [
            "src/assets/logos/SpringBoot.svg",
            "src/assets/logos/SpringCloud.png",
            "src/assets/logos/Maven.svg",
            "src/assets/logos/Grafana.svg",
            "src/assets/logos/Swagger.svg",
            "src/assets/logos/JUnit.svg",
            "src/assets/logos/keycloak.png",
            "src/assets/logos/RabbitMQ.svg",
            "src/assets/logos/Kafka.svg",
            "src/assets/logos/Docker.svg",
            "src/assets/logos/Angular.svg",
            "src/assets/logos/TypeScript.svg",
            "src/assets/logos/Bootstrap.svg"
        ]
    },
    {
        id: "loan-testing",
        title: "Loan Application Testing",
        description: "Test Framework to test loan service with behavior driven testing using Cucumber, Selenium and TestNG",
        link: "https://github.com/dev4hk/loan-springboot-microservices-test",
        thumbnail:
            "src/assets/images/testing.png",
        tech: [
            "Selenium",
            "Cucumber",
            "Java",
            "Maven"
        ],
        icons: [
            "src/assets/logos/Selenium.svg",
            "src/assets/logos/Cucumber.svg",
            "src/assets/logos/Java.svg",
            "src/assets/logos/Maven.svg"
        ]
    },
    {
        id: "file-compressor",
        title: "File Compressor",
        description: "Java application to compress & decompress large text files by implementing Huffman Coding Algorithm",
        link: "https://github.com/dev4hk/file-compressor",
        thumbnail:
            "src/assets/images/file-compressor.jpg",
        tech: [
            "Java"
        ],
        icons: [
            "src/assets/logos/Java.svg"
        ]
    },
    {
        id: "path-finder",
        title: "Path Finder",
        description: "Angular Application to find an optimal path from a start node to end node using A* Search Algorithm",
        link: "https://github.com/dev4hk/Waypoint-Wizard",
        demo: "",
        thumbnail:
            "src/assets/images/path-finder.png",
        tech: [
            "Angular",
            "TypeScript",
            "Tailwind CSS"
        ],
        icons: [
            "src/assets/logos/Angular.svg",
            "src/assets/logos/TypeScript.svg",
            "src/assets/logos/TailwindCSS.svg"
        ]
    },
    {
        id: "restaurant",
        title: "Restaurant App",
        description: "A restaurant app built using ReactJS and Bootstrap as capstone project for Meta Frontend Developer Specialization",
        link: "https://github.com/dev4hk/Restaurant-App",
        thumbnail:
            "src/assets/images/little-lemon.png",
        tech: [
            "ReactJS",
            "Bootstrap"
        ],
        icons: [
            "src/assets/logos/React.svg",
            "src/assets/logos/Bootstrap.svg"
        ]
    },
]