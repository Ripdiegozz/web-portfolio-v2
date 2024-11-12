import { db, JobExperience } from "astro:db";
import { title } from "framer-motion/client";

export default async function () {
  console.info("Seeding the database...");
  // Seed the database
  await db.insert(JobExperience).values([
    {
      id: 1,
      title: "Full-stack Developer",
      company: "Tres Pi Medios / Stanley Black & Decker",
      startDate: new Date("2024-07-18"),
      endDate: null,
      shortDescription:
        "This is my current job, here in Tres Pi Medios I work as a full-stack developer for internal projects of Stanley Black & Decker. Also, I work on integrations for the Zendesk platform of Stanley Black & Decker.",
      description:
        "Currently, I am working as a full-stack developer at Tres Pi Medios, a digital agency that provides marketing, advertising & software solutions to clients around the world. Here, I work on projects for Stanley Black & Decker, a global provider of tools and storage, commercial electronic security, and engineered fastening. As part of the development team, I am responsible for the design, development and implementation of web applications and services for both internal use of the company and for the Zendesk platform of Stanley Black & Decker. I also work on the optimization and performance improvement of existing applications and services. I use various technologies and cloud providers such as Node.js, Express.js, React, PostgreSQL, TypeScript, Azure, Docker, MongoDB and Git",
      highlights: [
        {
          title:
            "Built an application for managing tool loans and repairs for Stanley Black & Decker in Italy, cutting task time by 50%",
        },
        {
          title:
            "Developed an Azure Cloud Function to automate integration of a generative AI model, enabling automated response generation for Stanley Black & Decker's customers on the Zendesk platform in the U.S.",
        },
        {
          title:
            "Developed features for chatbots to assist customers in the U.S. and Canada",
        },
        {
          title:
            "Implemented features for a service delivering real-time data to a Power BI dashboard, enhancing monitoring and reporting capabilities.",
        },
        {
          title:
            "Integrated internationalization for Stanley Black & Decker’s web applications in Italy and the Middle East, supporting both Italian and English. This involved implementing i18n and i18next libraries across the back-end and front-end to ensure seamless multilingual support.",
        },
      ],
      image: "/stanley.svg",
      technologies: [
        {
          name: "Node.js",
          icon: "nodejs",
        },
        {
          name: "Express.js",
          icon: "express",
        },
        {
          name: "React",
          icon: "react",
        },
        {
          name: "PostgreSQL",
          icon: "postgresql",
        },
        {
          name: "TypeScript",
          icon: "typescript",
        },
        {
          name: "Azure",
          icon: "azure",
        },
        {
          name: "Docker",
          icon: "docker",
        },
        {
          name: "Vite",
          icon: "vite",
        },
        {
          name: "Material-UI",
          icon: "mui",
        },
        {
          name: "MongoDB",
          icon: "mongodb",
        },
        {
          name: "Git",
          icon: "git",
        },
        {
          name: "GitHub",
          icon: "github",
        },
      ],
    },
    {
      id: 2,
      title: "Full-stack Developer Intern",
      company: "SuperGIROS",
      startDate: new Date("2023-08-18"),
      endDate: new Date("2024-07-17"),
      shortDescription:
        "This was my first job as a full-stack developer intern. There I worked on projects that involved developing and maintaining web applications for internal use of the company in the areas of operations and customer service enhancement.",
      description:
        "I worked as a full-stack developer at SuperGIROS, a financial services company that provides banking and payment solutions to customers in Colombia. Here, I worked on projects that involved developing and maintaining web applications for internal use of the company in the areas of operations and customer services. As part of the development team, I was responsible for the design, development, and implementation of new features and functionalities. I also worked on the optimization and performance improvement of existing applications and services. I used various technologies such as Node.js, Angular, Java, Spring, Hibernate, Docker, and Linux servers.",
      highlights: [
        {
          title:
            "Developed a chatbot with Node.js to assist sales personnel reducing helpdesk calls by 60%",
        },
        {
          title:
            "Improved the performance of the company's main web application by 40% through code refactoring, optimization, and upgrading to the latest version of Angular applying best practices",
        },
        {
          title:
            "Created from zero a web application to manage the company's inventory and purchases. This application helped the company to reduce the time spent on these tasks by 50%",
        },
        {
          title:
            "Created RESTful APIs to integrate new functionalities in the company's Intranet and web applications using Java, Spring, and Hibernate with remote OracleSQL databases",
        },
        {
          title:
            "Implemented various RESTful APIs in the company's microservices environment using Docker and Linux servers",
        },
        {
          title:
            "Developed a Java desktop service to manage the company's matrix printers, optimizing the printing process using WebSocket communication for real-time updates",
        },
      ],
      image: "/supergiros.png",
      technologies: [
        {
          name: "Node.js",
          icon: "nodejs",
        },
        {
          name: "Express.js",
          icon: "express",
        },
        {
          name: "Angular",
          icon: "angular",
        },
        {
          name: "MySQL",
          icon: "mysql",
        },
        {
          name: "TypeScript",
          icon: "typescript",
        },
        {
          name: "Java",
          icon: "java",
        },
        {
          name: "Spring",
          icon: "spring",
        },
        {
          name: "Hibernate",
          icon: "hibernate",
        },
        {
          name: "Maven",
          icon: "maven",
        },
        {
          name: "Git",
          icon: "git",
        },
        {
          name: "GitLab",
          icon: "gitlab",
        },
        {
          name: "Docker",
          icon: "docker",
        },
        {
          name: "Linux",
          icon: "ubuntu",
        },
      ],
    },
    {
      id: 3,
      title: "Full-stack Developer",
      company: "Fundación Literaria León Bienvenido Weffer",
      startDate: new Date("2021-01-01"),
      endDate: new Date("2021-12-31"),
      shortDescription:
        "As a full-stack developer, I led the development of web applications to digitally transform the library's inventory system and streamline the management of library services",
      description:
        "I worked as a full-stack developer at Fundaleon, a non-profit organization that provides financial support to entrepreneurs and small businesses in Colombia.",
      highlights: [
        {
          title:
            "Developed a web application to manage the library's inventory and services, reducing the time spent on these tasks by 40%",
        },
        {
          title:
            "Implemented a RESTful API to integrate the library's inventory system with the website, enabling real-time updates and notifications",
        },
      ],
      image: "/logo_fundaleon.png",
      technologies: [
        {
          name: "Python",
          icon: "python",
        },
        {
          name: "FastAPI",
          icon: "fastapi",
        },
        {
          name: "React",
          icon: "react",
        },
        {
          name: "PostgreSQL",
          icon: "postgresql",
        },
        {
          name: "TypeScript",
          icon: "typescript",
        },
        {
          name: "Docker",
          icon: "docker",
        },
        {
          name: "Git",
          icon: "git",
        },
        {
          name: "GitHub",
          icon: "github",
        },
      ],
    },
  ]);

  console.info("Database seeded!");
}
