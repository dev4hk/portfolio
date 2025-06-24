export const heroFlipWords = [
    "interfaces",
    "microservices",
    "APIs",
    "tools",
    "frameworks"
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
        id: "order-management",
        title: "Event-driven Order Management",
        description: "Event-driven order management system using Spring Boot & Axon using CQRS, Materialized View, Saga patterns.",
        link: "https://github.com/dev4hk/event-driven-order-management",
        thumbnail:
            "assets/images/order-management.png",
        tech: [
            "Spring Boot", "Axon", "PostgreSQL", "Maven"],
        icons: [
            "assets/logos/SpringBoot.svg",
            "assets/logos/Axon.svg",
            "assets/logos/PostgreSQL.svg",
            "assets/logos/Maven.svg",
        ]
    },
    {
        id: "chatbot",
        title: "AI Chatbot",
        description: "Simple AI chatbot application built using Spring Boot, Spring AI, Next.js, TailwindCSS, and Ollama.",
        link: "https://github.com/dev4hk/SpringAI-Chatbot",
        thumbnail:
            "assets/images/ai-chatbot.png",
        tech: [
            "Spring Boot", "Spring AI", "Maven", "Next.js", "Tailwind CSS", "TypeScript", "Ollama"],
        icons: [
            "assets/logos/SpringBoot.svg",
            "assets/logos/SpringAI.png",
            "assets/logos/Maven.svg",
            "assets/logos/Next.svg",
            "assets/logos/TailwindCSS.svg",
            "assets/logos/TypeScript.svg",
            "assets/logos/Ollama.svg",
        ]
    },
    {
        id: "mvc-framework",
        title: "Spring Web MVC Framework Clone",
        description: "Lightweight MVC framework inspired by Spring Web MVC, using the Front Controller pattern for request handling.",
        link: "https://github.com/dev4hk/java-my-own-MVC-framework",
        thumbnail:
            "assets/images/mvc-framework.png",
        tech: [
            "Java",
            "Gradle",
            "Tomcat"
        ],
        icons: [
            "assets/logos/Java.svg",
            "assets/logos/Gradle.svg",
            "assets/logos/Tomcat.svg",
        ]
    },
    {
        id: "zentry",
        title: "Zentry Clone",
        description: "Dynamic Zentry clone with scroll-triggered animations & geometric transitions for immersion.",
        link: "https://github.com/dev4hk/zentry-clone",
        demo: "https://dev4hk.github.io/zentry-clone/",
        thumbnail:
            "assets/images/zentry.png",
        tech: [
            "ReactJS",
            "Tailwind CSS",
            "JavaScript",
            "Vite"
        ],
        icons: [
            "assets/logos/React.svg",
            "assets/logos/TailwindCSS.svg",
            "assets/logos/JavaScript.svg",
            "assets/logos/Vite.svg"
        ]
    },

    {
        id: "loan",
        title: "Loan Application",
        description: "Spring Boot & Angular application to simulate loan process using microservice architecture",
        link: "https://github.com/dev4hk/loan-springboot-microservices",
        thumbnail:
            "assets/images/loan-application.png",
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
            "assets/logos/SpringBoot.svg",
            "assets/logos/SpringCloud.png",
            "assets/logos/Maven.svg",
            "assets/logos/Grafana.svg",
            "assets/logos/Swagger.svg",
            "assets/logos/JUnit.svg",
            "assets/logos/keycloak.png",
            "assets/logos/RabbitMQ.svg",
            "assets/logos/Kafka.svg",
            "assets/logos/Docker.svg",
            "assets/logos/Angular.svg",
            "assets/logos/TypeScript.svg",
            "assets/logos/Bootstrap.svg"
        ]
    },
    {
        id: "loan-testing",
        title: "Loan Application Testing Framework",
        description: "Test Framework to test loan service with behavior driven testing using Cucumber, Selenium and TestNG",
        link: "https://github.com/dev4hk/loan-springboot-microservices-test",
        thumbnail:
            "assets/images/testing.png",
        tech: [
            "Selenium",
            "Cucumber",
            "Java",
            "Maven"
        ],
        icons: [
            "assets/logos/Selenium.svg",
            "assets/logos/Cucumber.svg",
            "assets/logos/Java.svg",
            "assets/logos/Maven.svg"
        ]
    },
    {
        id: "file-compressor",
        title: "File Compressor",
        description: "Java application to compress & decompress large text files by implementing Huffman Coding Algorithm",
        link: "https://github.com/dev4hk/file-compressor",
        thumbnail:
            "assets/images/file-compressor.jpg",
        tech: [
            "Java"
        ],
        icons: [
            "assets/logos/Java.svg"
        ]
    },
    {
        id: "path-finder",
        title: "Path Finder",
        description: "Angular Application to find an optimal path from a start node to end node using A* Search Algorithm",
        link: "https://github.com/dev4hk/Waypoint-Wizard",
        demo: "https://dev4hk.github.io/Waypoint-Wizard/",
        thumbnail:
            "assets/images/path-finder.png",
        tech: [
            "Angular",
            "TypeScript",
            "Tailwind CSS"
        ],
        icons: [
            "assets/logos/Angular.svg",
            "assets/logos/TypeScript.svg",
            "assets/logos/TailwindCSS.svg"
        ]
    },
]

export interface ISkill {
    title: string,
    icons: string[]
}

export const skills = [
    {
        title: "Programming and Scripting",
        icons: ["assets/logos/Java.svg", "assets/logos/JavaScript.svg", "assets/logos/TypeScript.svg", "assets/logos/Python.svg"],
    },
    {
        title: "Backend Development",
        icons: ["assets/logos/SpringBoot.svg", "assets/logos/MySQL.svg", "assets/logos/Docker.svg", "assets/logos/Maven.svg"],
    },
    {
        title: "Frontend Development",
        icons: ["assets/logos/HTML5.svg", "assets/logos/CSS3.svg", "assets/logos/TailwindCSS.svg", "assets/logos/React.svg", "assets/logos/Angular.svg"]
    },
    {
        title: "Testing and Tools",
        icons: ["assets/logos/Selenium.svg", "assets/logos/Cucumber.svg", "assets/logos/JUnit.svg", "assets/logos/UNIX.svg", "assets/logos/Git.svg"],
    }
]

export const workExperience = [
    {
        id: 1,
        title: "Software Engineering Consultant",
        desc: "Tested applications in the financial sector and built fullstack web solutions to improve frontend and backend performance.",
        className: "md:col-span-2",
        thumbnail: "assets/images/exp1.svg",
    },
    {
        id: 2,
        title: "3D CAD Technician",
        desc: "Designed and created 3D models of interior components using CAD tools, optimizing designs for functionality and manufacturability.",
        className: "md:col-span-2",
        thumbnail: "assets/images/exp2.svg",
    },
]

export const navItems = [
    {name: 'Home', link: "#home"},
    {name: "Skills", link: "#skills"},
    {name: "Intro", link: "#intro"},
    {name: "Projects", link: "#projects"},
    {name: "Work", link: "#work"},
    {name: "Connect", link: "#connect"}
]