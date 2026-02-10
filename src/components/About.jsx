import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Floating + slight rotate animation
const floatVariant = {
  animate: {
    y: [0, -12, 0],
    rotate: [0, 1.5, 0], // 👈 subtle rotate
  },
};

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24"
    >
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10">

        {/* Heading */}
        <div className="about-item mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white">
            About <span className="text-emerald-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left Content */}
          <div className="about-item space-y-6 text-slate-400 leading-relaxed">
            <p>
              I’m a{" "}
              <span className="text-emerald-400 font-semibold">
                Full-Stack Developer
              </span>{" "}
              passionate about building clean, scalable, and user-friendly web
              applications.
            </p>

            <p>
              As a fresher, I focus on strong fundamentals, modern UI/UX,
              and writing maintainable code using the MERN stack.
            </p>

            <p>
              I enjoy learning new technologies and turning ideas into
              real-world products with performance and usability in mind.
            </p>
          </div>

          {/* Right Highlights (FLOAT + ROTATE + PULSE) */}
          <div className="about-item grid grid-cols-2 gap-6">
            {[
              {
                title: "Fresher",
                desc: "Strong fundamentals & real-world practice",
              },
              {
                title: "MERN",
                desc: "MongoDB, Express, React, Node",
              },
              {
                title: "UI/UX",
                desc: "Clean layouts & smooth interactions",
              },
              {
                title: "Growth",
                desc: "Always learning & improving",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={floatVariant}
                animate="animate"
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
                whileHover={{
                  y: -18,
                  scale: 1.05, // 👈 pulse effect
                  boxShadow: "0 0 40px rgba(16,185,129,0.45)",
                }}
                className="p-6 rounded-2xl bg-white/5
                border border-white/10 backdrop-blur
                hover:border-emerald-400/50
                transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-emerald-400">
                  {item.title}
                </h3>
                <p className="text-slate-400 mt-2 text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[600px] h-[600px] bg-emerald-400/5 blur-[120px] rounded-full"></div>
      </div>
    </section>
  );
};

export default About;
