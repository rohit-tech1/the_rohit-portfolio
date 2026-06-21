// const Navbar = () => {
//   return <div>Navbar</div>;
// };

// export default Navbar;

import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Certifications",
    "Contact",
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-white"
        >
          The_Rohit<span className="text-sky-400"></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-slate-300 hover:text-sky-400 transition duration-300"
            >
              {link}
            </a>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 px-6 pb-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-2 text-slate-300 hover:text-sky-400"
            >
              {link}
            </a>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="block mt-2 bg-sky-500 text-center text-white py-2 rounded-lg"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;