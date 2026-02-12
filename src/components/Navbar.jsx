const Navbar = () => {
  return (
    <div className="navbar fixed top-0 z-50 bg-base-100 px-6 shadow">
      <div className="flex-1">
        <span className="text-xl font-bold">Aathis</span>
      </div>

      <div className="hidden md:flex gap-2">
        <a href="#about" className="btn btn-ghost btn-sm">About</a>
        <a href="#skills" className="btn btn-ghost btn-sm">Skills</a>
        <a href="#projects" className="btn btn-ghost btn-sm">Projects</a>
        <a href="#contact" className="btn btn-ghost btn-sm">Contact</a>
        <a
          href="/public/resume.pdf"
          target="_blank"
          className="btn btn-primary btn-sm"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
