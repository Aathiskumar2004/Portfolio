import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import {
  Mail,
  MapPin,
  User,
  MessageSquare,
  Send,
  Github,
  Linkedin,
  Loader2,
  Phone,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [loading, setLoading] = useState(false);

 const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);

  emailjs
    .sendForm(
      "service_bqu5szg",
      "template_xubzkim",
      e.target,
      "boioB7Pv6nHDtgdFJ"
    )
    .then(
      () => {
        setLoading(false);
        toast.success("Message sent successfully ", {
  style: {
    background: "#32b910",
    color: "#ffffff",
    border: "1px solid rgba(16,185,129,0.5)",
    boxShadow:
      "0 0 20px rgba(19, 28, 25, 0.6), 0 0 40px rgba(16,185,129,0.3)",
  },
});

        e.target.reset();
      },
      (error) => {
        setLoading(false);
        toast.error("Failed to send message ❌");
        console.error(error);
      }
    );
};


  return (
    <section
      id="contact"
      className="relative py-28 scroll-mt-24 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="space-y-8">
            <p className="uppercase tracking-widest text-emerald-400 text-sm">
              Let’s Connect
            </p>

            <h2 className="text-4xl md:text-5xl font-black text-white">
              Get In <span className="text-emerald-400">Touch</span>
            </h2>

            <p className="text-slate-400 max-w-md">
              Building the future of the web, one interaction at a time.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-emerald-400/10 text-emerald-400">
                  <Mail size={18} />
                </div>
                <span className="text-slate-300">
                  aathiskumar@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-emerald-400/10 text-emerald-400">
                  <MapPin size={18} />
                </div>
                <span className="text-slate-300">
                  Coimbatore, India
                </span>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10
                text-slate-300 hover:text-emerald-400 transition-all"
              >
                <Github size={20} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10
                text-slate-300 hover:text-emerald-400 transition-all"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-2xl bg-white/5
            border border-white/10 backdrop-blur"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="from_name"
                required
                placeholder="Your Name"
                className="bg-black/30 p-3 rounded-xl
                text-white outline-none border border-white/10"
              />

              <input
                type="email"
                name="from_email"
                required
                placeholder="Email Address"
                className="bg-black/30 p-3 rounded-xl
                text-white outline-none border border-white/10"
              />
            </div>

            {/* PHONE */}
            <div className="flex items-center gap-3 mb-6
            bg-black/30 p-3 rounded-xl border border-white/10">
              <Phone size={16} className="text-emerald-400" />
              <input
                type="tel"
                name="phone"
                required
                placeholder="Phone Number"
                className="bg-transparent w-full outline-none text-white"
              />
            </div>

            {/* MESSAGE */}
            <div className="flex gap-3 mb-6
            bg-black/30 p-3 rounded-xl border border-white/10">
              <MessageSquare size={16} className="text-emerald-400 mt-1" />
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Your Message"
                className="bg-transparent w-full outline-none
                text-white resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2
              py-3 rounded-xl bg-emerald-400 text-black font-bold
              hover:bg-emerald-300 disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  Sending...
                </>
              ) : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
