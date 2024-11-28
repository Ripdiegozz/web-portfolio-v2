import type { Project } from "../../types/project";
import thumbFilmPassport from "../../assets/projects_thumbs/film-passport/1.webp";
import thumbNotewave from "../../assets/projects_thumbs/notewave/1.webp";
import thumbEden from "../../assets/projects_thumbs/Eden/1.png";

const projects: {
  data: {
    [key: string]: Project;
  };
} = {
  data: {
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
    eden: {
      title: "Eden",
      thumb: thumbEden,
      description:
        "Eden is a community-driven chat application built to bring conversations to life in a vibrant virtual space. Connect with friends, share ideas, and explore a new realm of online communication. Join the EDEN experience today!",
      repository: "https://github.com/Ripdiegozz/Eden",
      live: "https://eden-coral.vercel.app/",
      tech: "react,nextjs,tailwindcss,js,ts,planetscale,mysql,prisma,css,html",
      why: {
        title: "Why I built this project?",
        data: "Eden was conceived with the goal of creating a dynamic and engaging community chat platform. I wanted to provide users with a vibrant virtual space for meaningful conversations and idea sharing. This project aimed to explore advanced technologies for real-time communication.",
      },
      learned: {
        title: "What I learned: ",
        data: "Developing Eden provided me with insights into real-time chat functionality, database management with MySQL and Prisma, and the intricacies of building a community-driven application. I gained experience in optimizing data flow, implementing secure authentication, and fostering user engagement in virtual communities.",
      },
    },
  },
};

function FeaturedProjects() {
  return (
    <div className='px-8 py-6'>
      <h2 className='text-2xl font-bold text-center'>
        Featured <span className='text-[#FFD700]'>Projects</span>
      </h2>
      <div>
        {Object.keys(projects.data).map((key) => {
          const project = projects.data[key];
          return (
            <div key={key} className='card bg-white shadow-sm p-4'>
              <h3
                className='text-2xl font-semibold mt-4 mb-2'
                id={project.title.toLowerCase().replace(" ", "-")}
              >
                {project.title}
              </h3>
              <img
                src={project.thumb.src}
                alt={project.title}
                className='w-full h-48 sm:h-64 md:h-96 object-contain md:object-cover rounded-md'
              />
              <p>{project.description}</p>
              <div className='flex flex-wrap justify-center md:justify-start gap-4 my-6'>
                <a
                  href={project.live}
                  target='_blank'
                  rel='noreferrer'
                  className='btn btn-outline'
                >
                  <i className='fa-solid fa-external-link'></i> Live
                </a>
                <a
                  href={project.repository}
                  target='_blank'
                  rel='noreferrer'
                  className='btn btn-ghost'
                >
                  <i className='fa-brands fa-github'></i> Repository
                </a>
              </div>
              <div className='w-full mx-auto'>
                <h3 className='text-lg font-semibold'>Tech Stack:</h3>
                <div className='flex flex-wrap justify-start gap-2 py-4'>
                  {project.tech.split(",").map((tech) => (
                    <div
                      className='p-0 transition-transform hover:scale-105 tooltip'
                      data-tip={tech}
                    >
                      <img
                        src={`https://skillicons.dev/icons?i=${tech}`}
                        alt={tech}
                        className='h-6 w-6'
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className='flex flex-col gap-4'>
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
