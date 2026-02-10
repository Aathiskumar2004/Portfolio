import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
    <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              background: "#020b16",
              color: "#10b981", // emerald text
              border: "1px solid rgba(16,185,129,0.5)",
              boxShadow:
                "0 0 20px rgba(16,185,129,0.6), 0 0 40px rgba(16,185,129,0.3)",
            },
            iconTheme: {
              primary: "#10b981",
              secondary: "#020b16",
            },
          },
          error: {
            style: {
              background: "#020b16",
              color: "#ef4444",
              border: "1px solid rgba(239,68,68,0.5)",
            },
          },
        }}
      />

      {
        <div className="bg-base-100 text-base-content  bg-gradient-to-br from-[#071b2f] via-[#06283d] to-[#020b16]">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      }
    </>
  );
}

export default App;
