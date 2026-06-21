// const Footer = () => {
//   return <div>Footer</div>;
// };

// export default Footer;


const Footer = () => {
  const navLinks = [
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Certifications",
    "Contact",
  ];

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Footer */}
        <div className="grid md:grid-cols-3 gap-8 items-start mb-8">
          {/* Left */}
          <div>
            <h3 className="text-2xl font-bold text-white">
              Rohit<span className="text-sky-400">.</span>
            </h3>
            <p className="text-slate-400 mt-3 max-w-sm">
              Software Engineer | Full Stack Developer
            </p>
            <p className="text-slate-500 mt-2 text-sm">
              Building scalable web applications, backend systems, and modern digital experiences.
            </p>
          </div>

          {/* Center - Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-sky-400 mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-slate-400 hover:text-sky-400 transition"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Right - Contact / Social */}
          <div>
            <h4 className="text-lg font-semibold text-sky-400 mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:rohitmondal.officiall@gmail.com"
                className="text-slate-400 hover:text-sky-400 transition"
              >
                Email
              </a>
              <a
                href="https://github.com/rohit-tech1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-sky-400 transition"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rohit-mondal-6910ab201/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-sky-400 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© 2026 The_Rohit. All rights reserved.</p>
          <p>Built with React, Tailwind CSS, and Framer Motion.</p>
        </div>
      </div>
        {/* Scroll To Top Button */}
      <a
        href="#home"
        className="fixed bottom-6 right-6 z-50 bg-sky-500 hover:bg-sky-600 text-white p-4 rounded-full shadow-lg transition duration-300"
      >
        ↑
      </a>
    </footer>
  );
};

export default Footer;
