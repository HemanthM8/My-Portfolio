import React from "react";
import crypto from "../assets/project/crypto.png";
import news from "../assets/project/news.png";
import simon from "../assets/project/simon.png";

const Project = (props) => {
  const projects = [
    {
      title: "Crypto Price Tracker",
      image: crypto,
      description:
        "A web application that tracks cryptocurrency prices in real-time.",
      github: "https://github.com/HemanthM8/Crypto-Price",
      view: "#",
    },
    {
      title: "News App",
      image: news,
      description:
        "A news aggregator app that fetches articles from various sources.",
      github: "https://github.com/HemanthM8/News-App",
      view: "#",
    },
    {
      title: "Simon Says Game",
      image: simon,
      description: "A web-based version of the classic Simon Says game.",
      github: "https://github.com/HemanthM8/Simon-Says-Game",
      view: "https://hemanthm8.github.io/Simon-Says-Game/",
    },
  ];

  return (
    <section
      id="Projects"
      className={`py-16 px-6 md:px-12 lg:px-24 ${
        props.mode === "dark"
          ? "bg-gray-900 text-gray-200"
          : "bg-white/60 text-gray-800"
      } transition-colors duration-300`}
    >
      <div className="container mx-auto">
        <h2
          className={`text-4xl font-bold text-center mb-12 ${
            props.mode === "dark" ? "text-amber-400" : "text-amber-800"
          } relative`}
        >
          My Projects
          <span className="block w-20 h-1 bg-amber-500 mt-4 mx-auto rounded-full"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden ${
                props.mode === "dark"
                  ? "bg-gray-800/50 border border-amber-700/40"
                  : "bg-white border border-amber-300"
              } shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="relative overflow-hidden group h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    props.mode === "dark" ? "bg-gray-900/80" : "bg-amber-50/80"
                  }`}
                ></div>
              </div>

              <div className="p-6">
                <h3
                  className={`text-xl font-bold mb-2 ${
                    props.mode === "dark" ? "text-amber-400" : "text-amber-800"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`mb-4 ${
                    props.mode === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>
                <div className="flex justify-between pt-2 border-t border-dashed border-opacity-60 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center ${
                      props.mode === "dark"
                        ? "text-amber-400 hover:text-amber-300"
                        : "text-amber-700 hover:text-amber-800"
                    } transition-colors duration-300`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
                  </a>
                  <a
                    href={project.view}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center ${
                      props.mode === "dark"
                        ? "text-amber-400 hover:text-amber-300"
                        : "text-amber-700 hover:text-amber-800"
                    } transition-colors duration-300`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    View Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
