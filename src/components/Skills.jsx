import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Database,
  Server,
  GitBranch,
  Boxes,
} from "lucide-react";

// Floating + slight rotate animation
const floatVariant = {
  animate: {
    y: [0, -12, 0],
    rotate: [0, 1.5, 0], // subtle rotate
  },
};

const skills = [
  {
    title: "Frontend",
    icon: <Palette size={28} />,
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: <Server size={28} />,
    items: ["Node.js", "Express.js"],
  },
  {
    title: "Database",
    icon: <Database size={28} />,
    items: ["MongoDB"],
  },
  {
    title: "Tools",
    icon: <GitBranch size={28} />,
    items: ["Git", "GitHub", "Postman"],
  },
  {
    title: "Concepts",
    icon: <Boxes size={28} />,
    items: ["REST APIs", "MVC", "Authentication"],
  },
  {
    title: "Programming",
    icon: <Code2 size={28} />,
    items: ["JavaScript (ES6+)"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-24 scroll-mt-24 overflow-hidden"
    >
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10">

        {/* HEADING */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white">
            My <span className="text-emerald-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-400 mt-4 mx-auto rounded-full"></div>
        </div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={floatVariant}
              animate="animate"
              transition={{
                duration: 3,          // fast & smooth
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,   // natural stagger
              }}
              whileHover={{
                y: -18,
                scale: 1.05,          // pulse
                boxShadow: "0 0 50px rgba(16,185,129,0.45)",
              }}
              className="p-6 rounded-2xl bg-white/5
              border border-white/10 backdrop-blur
              hover:border-emerald-400/50
              transition-all duration-300"
            >
              {/* ICON */}
              <div
                className="w-12 h-12 flex items-center justify-center
                rounded-xl bg-emerald-400/10 text-emerald-400 mb-4"
              >
                {skill.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-bold text-white mb-3">
                {skill.title}
              </h3>

              {/* LIST */}
              <ul className="text-slate-400 text-sm space-y-1">
                {skill.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
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

export default Skills;
