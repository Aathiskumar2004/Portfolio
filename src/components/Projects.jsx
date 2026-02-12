import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import ecommerce from "../assets/img/ecommerce.png";
import portfolioImg from "../assets/img/portfolio.png";
import taskImg from "../assets/img/taskmanagemant.png";
import wordle from "../assets/img/wordle.png"
import pexels from "../assets/img/pexels.png"
import extension from "../assets/img/extension.png"
import portfolio from "../assets/img/portfolio.png"

// Float + rotate animation
const floatVariant = {
  animate: {
    y: [0, -10, 0],
    rotate: [0, 1.2, 0],
  },
};

const projects = [
  {
    title: "E-Commerce Web App",
    desc: "Full-stack MERN e-commerce app with authentication, cart, and payments.",
    tech: ["React", "Node.js", "MongoDB"],
    image: ecommerce,
    live: "#",
    github: "#",
  },
  {
    title: "Wordle Game",
    desc: "A word guessing game where users get six attempts to find the correct word, built using React, Tailwind CSS, and GSAP.",
    tech: ["React", "Tailwind", "GSAP"],
    image: wordle,
    live: "#",
    github: "#",
  },
  {
    title: "Task Management App",
    desc: "Task manager with CRUD, authentication, and role-based access.",
    tech: ["React", "Express", "MongoDB"],
    image: taskImg,
    live: "#",
    github: "#",
  },
  {
    title: "Pexels Photo Search",
desc: "An image search application that displays photos from the Pexels API with search and load more functionality.",
    tech: ["Javascript", "CSS", "HTML","Api"],
    image: pexels,
    live: "#",
    github: "https://github.com/Aathiskumar2004/photo-fetch",
  },
  {
    title: "Portfolio Website",
    desc: "Modern developer portfolio with animations and responsive design.",
    tech: ["React", "Tailwind", "GSAP"],
    image: portfolio,
    live: "#",
    github: "",
  },
  {
    title: "crome extension",
desc: "A Save Tab Chrome extension developed using JavaScript that helps users store and access important browser tabs easily.",
    tech: ["Javascript", "Local storage", "HTML","CSS"],
    image: extension,
    live: "#",
    github: "https://github.com/Aathiskumar2004/Save-Tab-Crome-Exetension",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-20  scroll-mt-24 overflow-hidden"
    >
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10">
        {/* HEADING */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white">
            My <span className="text-emerald-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-400 mt-4 mx-auto rounded-full"></div>
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={floatVariant}
              animate="animate"
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.25,
              }}
              whileHover={{ y: -20, scale: 1.04 }}
              className="group rounded-2xl bg-white/5
              border border-white/10 backdrop-blur
              hover:border-emerald-400/50
              transition-all duration-300 overflow-hidden"
            >
              {/* IMAGE */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover
                  group-hover:scale-110 transition-transform duration-700"
                />

                {/* HOVER OVERLAY */}
                <div
                  className="absolute inset-0 bg-black/70 opacity-0
                  group-hover:opacity-100 transition-opacity duration-500
                  flex items-center justify-center gap-6"
                >
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full bg-emerald-400 text-black"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full bg-white text-black"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm mb-4">{project.desc}</p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full
                      bg-emerald-400/10 text-emerald-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[700px] h-[700px] bg-emerald-400/5 blur-[140px] rounded-full"></div>
      </div>
    </section>
  );
};

export default Projects;
