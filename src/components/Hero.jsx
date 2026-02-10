import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ChevronRight, Download } from "lucide-react";
import profile from "../assets/img/Profile.jpg";

const Hero = ({ resumeFormat }) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current.children, {
        y: 80,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        ease: "power4.out",
        delay: 0.4,
        clearProps: "all",
      });

      // Subtitle
      gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 1.2,
        ease: "power3.out",
      });

      // CTA
      gsap.from(".hero-cta", {
        opacity: 0,
        scale: 0.85,
        duration: 0.8,
        delay: 1.5,
        ease: "back.out(1.7)",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden
"
    >
      {/* CONTENT */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div className="space-y-6">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full
              bg-emerald-400/10 border border-emerald-400/20 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="text-xs font-semibold tracking-widest uppercase text-emerald-400">
                Available for Projects
              </span>
            </motion.div>

            {/* TITLE */}
            <h1
              ref={titleRef}
              className="flex flex-col text-5xl md:text-7xl font-black leading-[0.95]"
            >
              <span className="text-white">Full-Stack</span>

              {/* Emerald glow */}
              <span className="relative inline-block text-emerald-400 mt-1">
                <span className="absolute inset-0 bg-emerald-400 blur-2xl opacity-40 rounded-full"></span>
                <span className="relative drop-shadow-[0_0_18px_rgba(16,185,129,0.9)]">
                  Developer
                </span>
              </span>
            </h1>

            {/* SUBTITLE */}
            <p className="hero-subtitle text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
              Crafting premium digital experiences with focus on
              <span className="text-emerald-400 font-semibold"> UI/UX</span> and
              <span className="text-emerald-400 font-semibold">
                {" "}
                scalable architecture
              </span>
              .
            </p>

            {/* CTA */}
            <div className="hero-cta flex flex-wrap gap-6 pt-4">
              <a href="#projects" className="btn btn-emerald group">
                View Projects
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={
                  resumeFormat === "ats" ? "/resume-ats.pdf" : "/resume.pdf"
                }
                download
                className="btn btn-outline border-emerald-400 text-emerald-400 hover:bg-emerald-400/10
                group flex items-center gap-2"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative hidden lg:flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
              transition={{
                opacity: { duration: 1, delay: 0.6 },
                scale: { duration: 1, delay: 0.6 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              }}
              className="relative"
            >
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-emerald-400/30 blur-3xl"></div>

              {/* Image */}
              <div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden
                border-2 border-emerald-400/40
                shadow-[0_0_50px_rgba(16,185,129,0.4)]"
              >
                <img
                  src={profile}
                  alt="Aathis Kumar"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>

              {/* Badge */}
              <div
                className="absolute -bottom-3 right-6 px-4 py-2 rounded-xl
              bg-white/10 backdrop-blur border border-white/20"
              >
                <p className="text-[10px] font-bold tracking-widest uppercase text-emerald-400">
                  MERN Stack
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-emerald-400/5 rounded-full blur-[120px]" />
      </div>
    </section>
  );
};

export default Hero;
