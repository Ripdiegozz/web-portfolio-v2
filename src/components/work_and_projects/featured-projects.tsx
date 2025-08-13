import type { Project } from "../../types/project";
import thumbFilmPassport from "../../assets/projects_thumbs/film-passport/1.webp";
import thumbNotewave from "../../assets/projects_thumbs/notewave/1.webp";
import thumbNatGPT from "../../assets/projects_thumbs/natgpt/1.webp";
import convexLogo from "../../assets/tech-logos/convex.webp";
import openaiLogo from "../../assets/tech-logos/open-ai.webp";
import clerkLogo from "../../assets/tech-logos/clerk.webp";

const projects: {
  data: {
    [key: string]: Project;
  };
} = {
  data: {
    natgpt: {
      title: "NatGPT",
      thumb: thumbNatGPT,
      description:
        "NatGPT is an AI-powered chat platform designed for seamless conversations with both text and voice. Enjoy real-time messaging, voice recording with transcription, and AI-generated responses in a modern, user-friendly interface. Experience the next level of online communication with NatGPT!",
      repository: "https://github.com/Ripdiegozz/nat-gpt",
      live: "https://nat-gpt.vercel.app/",
      tech: "react,nextjs,tailwindcss,typescript,convex,openai,clerk",
      why: {
        title: "Why I built this project?",
        data: "NatGPT was created to explore advanced AI chat experiences, combining real-time text and voice with multilingual support. The goal was to deliver a fast, accessible, and interactive platform for users to connect and communicate naturally.",
      },
      learned: {
        title: "What I learned:",
        data: "Building NatGPT deepened my expertise in AI integration, audio processing, real-time data sync, and scalable app architecture. I gained hands-on experience with authentication, i18n, and delivering a polished UX across devices.",
      },
    },
    notewave: {
      title: "Notewave",
      thumb: thumbNotewave,
      description:
        "Notewave is your go-to digital hub for capturing and sharing ideas effortlessly. Whether you're a creative thinker or meticulous planner, Notewave adapts to your unique style. It's a blend of organization and creativity designed to simplify your digital life, putting your ideas in the spotlight for the world to see.",
      repository: "https://github.com/Ripdiegozz/Notewave",
      live: "https://notewave-lake.vercel.app/",
      tech: "react,nextjs,tailwindcss,ts,js,css,html",
      why: {
        title: "Why I built this project?",
        data: "Notewave was born out of a personal need for a versatile note-taking application. I wanted to create a platform that seamlessly combines organization and creativity. This project aimed to simplify digital note-taking and idea sharing.",
      },
      learned: {
        title: "What I learned: ",
        data: "Building Notewave honed my skills in creating feature-rich applications. I learned to implement rich text editing, task management features, and responsive design. This project improved my abilities in optimizing user workflows and creating a seamless user experience.",
      },
    },
    filmpassport: {
      title: "Film Passport",
      thumb: thumbFilmPassport,
      description:
        "Film Passport is a web application that allows users to browse popular movies, search for movies, and add movies to their favorites list. Each movie has its own dedicated page with a description, trailer, and recommended similar movies.",
      live: "https://film-passport.netlify.app/",
      repository: "https://github.com/Ripdiegozz/FilmPassport",
      tech: "react,nextjs,tailwindcss,js,css,html",
      why: {
        title: "Why I built this project?",
        data: "I developed Film Passport to enhance my skills in web development and to create a platform where users can discover and bookmark their favorite movies. This project allowed me to apply my knowledge of React, Next.js, and Tailwind CSS in a practical setting.",
      },
      learned: {
        title: "What I learned: ",
        data: "Developing Film Passport improved my abilities in creating responsive user interfaces, managing state in React, and optimizing data flow. I gained experience in implementing search functionality, fetching data from an API, and creating a seamless user experience.",
      },
    },
  },
};

// Custom tech logos mapping
const customTechLogos: { [key: string]: string } = {
  convex: convexLogo.src,
  openai: openaiLogo.src,
  clerk: clerkLogo.src,
};

function FeaturedProjects() {
  return (
    <div className="px-8 py-6" id="projects">
      <h2 className="text-2xl font-bold text-center">
        Featured <span className="text-[#FFC107]">Projects</span>
      </h2>
      <div>
        {Object.keys(projects.data).map((key, index) => {
          const project = projects.data[key];
          return (
            <div
              key={project.repository + index + project.live}
              className="card bg-white shadow-sm p-4"
            >
              <h3
                className="text-2xl font-semibold mt-4 mb-2"
                id={project.title.toLowerCase().replace(" ", "-")}
              >
                {project.title}
              </h3>
              <img
                src={project.thumb.src}
                alt={project.title}
                className="w-full h-48 sm:h-64 md:h-96 object-contain md:object-cover rounded-md"
              />
              <p className="pt-6">{project.description}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 my-6">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  <i className="fa-solid fa-external-link"></i> Live
                </a>
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                >
                  <i className="fa-brands fa-github"></i> Repository
                </a>
              </div>
              <div className="w-full mx-auto">
                <h3 className="text-lg font-semibold">Tech Stack:</h3>
                <div className="flex flex-wrap justify-start gap-2 py-4">
                  {project.tech.split(",").map((tech) => (
                    <div
                      key={tech}
                      className="p-0 transition-transform hover:scale-105 tooltip"
                      data-tip={tech}
                    >
                      <img
                        src={
                          customTechLogos[tech] ||
                          `https://skillicons.dev/icons?i=${tech}`
                        }
                        alt={tech}
                        className="h-6 w-6"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p>
                  <strong>{project.why.title}</strong> {project.why.data}
                </p>
                <p>
                  <strong>{project.learned.title}</strong>{" "}
                  {project.learned.data}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FeaturedProjects;
