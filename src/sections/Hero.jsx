// const Hero = () => {
//   return <div>Hero Section</div>;
// };

// export default Hero;


// import { motion } from "framer-motion";
// import profile from "../assets/images/profile.png";
// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="min-h-screen bg-slate-950 text-white flex items-center"
//     >
//       <div className="max-w-7xl mx-auto px-6 py-20 w-full">
//         <div className="grid md:grid-cols-2 gap-12 items-center">

//           {/* Left Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -60 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <p className="text-sky-400 text-lg mb-3">
//               Hi, I'm
//             </p>

//             <h1 className="text-5xl md:text-6xl font-bold mb-4">
//               Rohit{" "}
//               <span className="bg-gradient-to-r from-sky-400 to-violet-500 bg-clip-text text-transparent">
//                 Mondal
//               </span>
//             </h1>

//             <h2 className="text-2xl md:text-3xl text-slate-300 mb-6">
//               Software Engineer | Full Stack Developer
//             </h2>

//             <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-8">
//               Passionate about building scalable web applications using
//               React.js, Node.js, Python, MongoDB, and modern cloud technologies.
//               I enjoy creating clean, efficient, and user-friendly solutions
//               that solve real-world problems.
//             </p>

//             <div className="flex flex-wrap gap-4">
//               <a
//                 href="#projects"
//                 className="px-6 py-3 bg-sky-500 hover:bg-sky-600 rounded-lg font-medium transition"
//               >
//                 View Projects
//               </a>

//               <a
//                 href="/resume.pdf"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="px-6 py-3 border border-slate-600 hover:border-sky-400 rounded-lg font-medium transition"
//               >
//                 Download Resume
//               </a>
//             </div>
//           </motion.div>

//           {/* Right Content */}
//           <motion.div
//             initial={{ opacity: 0, x: 60 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="flex justify-center"
//           >
//             <div className="relative">
//               <div className="absolute inset-0 bg-sky-500/20 blur-3xl rounded-full"></div>

//               <img
//                 src={profile}
//                 alt="Rohit Mondal"
//                 className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-sky-500 shadow-2xl"
//               />
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import { motion } from "framer-motion";
import profile from "../assets/images/profile.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const techStack = [
"React.js",
"Node.js",
"Python",
"FastAPI",
"PostgreSQL",
"Docker",
"AWS",
];

// const workflow = [
// "Planning",
// "UI Design (Figma)",
// "HTML + CSS + JavaScript",
// "React Frontend",
// "FastAPI Backend",
// "PostgreSQL Database",
// "Authentication",
// "Testing",
// "Docker",
// "GitHub",
// "CI/CD",
// "AWS Deployment",
// "Monitoring & Maintenance",
// ];

const Hero = () => {
return ( <section
   id="home"
   className="min-h-[85vh] bg-slate-950 text-white flex items-center">
    <div className="max-w-7xl mx-auto px-6 py-20 w-full">

    {/* Hero Content */}
    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sky-400 text-lg mb-3">
            Hi, I'm
        </p>

        <h1 className="text-6xl md:text-8xl font-bold mb-4">
          Rohit{" "}
          <span className="bg-gradient-to-r from-sky-400 to-violet-500 bg-clip-text text-transparent">
            Mondal
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-slate-300 mb-6">
          Software Engineer | Full Stack Developer
        </h2>

        <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-8">
          Turning ideas into practical software solutions through thoughtful design, development, and continuous improvement.
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mb-8">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-slate-800 border border-slate-700 rounded-full text-sky-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-sky-500 hover:bg-sky-600 rounded-lg font-medium transition"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border border-slate-600 hover:border-sky-400 rounded-lg font-medium transition"
          >
            Download Resume
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mt-8 text-2xl">
          <a
            href="https://github.com/rohit-tech1"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-sky-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/rohit-mondal-6910ab201/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-sky-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:rohitmondal.officiall@gmail.com"
            className="text-slate-400 hover:text-sky-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </motion.div>

      {/* Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-sky-500/20 blur-3xl rounded-full"></div>

          <img
            src={profile}
            alt="Rohit Mondal"
            className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-sky-500 shadow-2xl"
          />
        </div>
      </motion.div>

    </div>


    {/* Workflow Section */}
 
    {/* <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="mt-24"
    >
      <h3 className="text-3xl font-bold text-center mb-10">
        My Development Workflow
      </h3>

      <div className="flex flex-wrap justify-center gap-4">
        {workflow.map((step) => (
          <div
            key={step}
            className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300"
          >
            {step}
          </div>
        ))}
      </div>
    </motion.div> */}




  </div>
</section> 

);
}; 

export default Hero;
