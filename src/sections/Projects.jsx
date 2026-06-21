// const Projects = () => {
//   return <div>Projects Section</div>;
// };

// export default Projects;



// import { motion } from "framer-motion";

// const projects = [
//   {
//     title: "AI-Powered Communication Assistant (NLP & RAG)",
//     description:
//       "Developed an AI-powered communication platform capable of generating context-aware responses using Natural Language Processing (NLP) and Retrieval-Augmented Generation (RAG). Built scalable backend services and REST APIs while leveraging MongoDB for efficient data storage and retrieval.",
//     features: [
//       "NLP-Based Response Generation",
//       "Retrieval-Augmented Generation (RAG)",
//       "REST API Development",
//       "MongoDB Integration",
//     ],
//     technologies: [
//       "Node.js",
//       "Express.js",
//       "MongoDB",
//       "NLP",
//       "RAG",
//       "REST APIs",
//     ],
//   },

//   {
//     title: "Threat Detection Using AI",
//     description:
//       "Built a full-stack threat detection platform that analyzes potentially malicious URLs using external threat intelligence APIs. Designed responsive user interfaces with React.js and developed secure backend services for threat analysis and reporting.",
//     features: [
//       "Threat Intelligence API Integration",
//       "Malicious URL Detection",
//       "Secure Backend Services",
//       "Responsive Dashboard",
//     ],
//     technologies: [
//       "React.js",
//       "Node.js",
//       "Express.js",
//       "REST APIs",
//       "Cyber Security",
//     ],
//   },
// ];

// const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="bg-slate-950 text-white py-24 px-6"
//     >
//       <div className="max-w-7xl mx-auto">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             Featured Projects
//           </h2>

//           <div className="w-24 h-1 bg-sky-500 mx-auto rounded-full"></div>

//           <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
//             A selection of projects showcasing my experience in
//             full-stack development, AI-powered applications,
//             backend engineering, and cybersecurity solutions.
//           </p>
//         </motion.div>

//         {/* Project Cards */}
//         <div className="grid md:grid-cols-2 gap-8">

//           {projects.map((project, index) => (
//             <motion.div
//               key={project.title}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 + index * 0.1 }}
//               viewport={{ once: true }}
//               className="
//                 bg-slate-900
//                 border
//                 border-slate-800
//                 rounded-2xl
//                 p-8
//                 hover:border-sky-500
//                 transition-all
//                 duration-300
//               "
//             >
//               {/* Project Title */}
//               <h3 className="text-2xl font-bold text-sky-400 mb-4">
//                 {project.title}
//               </h3>

//               {/* Description */}
//               <p className="text-slate-300 leading-relaxed mb-6">
//                 {project.description}
//               </p>

//               {/* Features */}
//               <div className="mb-6">
//                 <h4 className="text-white font-semibold mb-3">
//                   Key Features
//                 </h4>

//                 <ul className="space-y-2">
//                   {project.features.map((feature) => (
//                     <li
//                       key={feature}
//                       className="text-slate-400 flex items-center gap-2"
//                     >
//                       <span className="text-sky-400">✓</span>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Technologies */}
//               <div className="flex flex-wrap gap-3 mb-8">
//                 {project.technologies.map((tech) => (
//                   <span
//                     key={tech}
//                     className="
//                       px-4 py-2
//                       bg-slate-800
//                       border border-slate-700
//                       rounded-full
//                       text-slate-300
//                       hover:border-sky-500
//                       hover:text-sky-400
//                       transition-all
//                     "
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               {/* Buttons */}
//               <div className="flex gap-4">
//                 <a
//                 href="https://github.com/rohit-tech1/AI-Powered-Communication-Assistant"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="
//                 px-5 py-2
//                 bg-sky-500
//                 hover:bg-sky-600
//                 rounded-lg
//                 font-medium
//                 transition
//                 "
//                 >
//                     View Code
//                 </a>
                
//                 <button
//                 className="
//                 px-5 py-2
//                 border
//                 border-slate-600
//                 text-slate-300
//                 rounded-lg
//                 cursor-not-allowed
//                 "
//                 >
//                     Coming Soon
//                 </button>

//               </div>

//             </motion.div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// };

// export default Projects;



import { motion } from "framer-motion";

const projects = [
  {
    title: "AI-Powered Communication Assistant (NLP & RAG)",
    description:
      "Developed an AI-powered communication platform capable of generating context-aware responses using Natural Language Processing (NLP) and Retrieval-Augmented Generation (RAG). Built scalable backend services and REST APIs while leveraging MongoDB for efficient data storage and retrieval.",
    features: [
      "NLP-Based Response Generation",
      "Retrieval-Augmented Generation (RAG)",
      "REST API Development",
      "MongoDB Integration",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "NLP",
      "RAG",
      "REST APIs",
    ],
    github: "https://github.com/rohit-tech1/AI-Powered-Communication-Assistant",
    demo: null,
  },
  {
    title: "Threat Detection Using AI",
    description:
      "Built a full-stack threat detection platform that analyzes potentially malicious URLs using external threat intelligence APIs. Designed responsive user interfaces with React.js and developed secure backend services for threat analysis and reporting.",
    features: [
      "Threat Intelligence API Integration",
      "Malicious URL Detection",
      "Secure Backend Services",
      "Responsive Dashboard",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Cyber Security",
    ],
    github: "https://github.com/rohit-tech1/Threat_Detection_Using_AI",
    demo: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}plan
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>

          <div className="w-24 h-1 bg-sky-500 mx-auto rounded-full"></div>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            A selection of projects showcasing my experience in full-stack
            development, AI-powered applications, backend engineering, and
            cybersecurity solutions.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-sky-500 transition-all duration-300"
            >
              {/* Project Title */}
              <h3 className="text-2xl font-bold text-sky-400 mb-4">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Key Features</h4>

                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-slate-400 flex items-center gap-2"
                    >
                      <span className="text-sky-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-3 mb-8">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-slate-300 hover:border-sky-500 hover:text-sky-400 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-sky-500 hover:bg-sky-600 rounded-lg font-medium transition"
                >
                  View Code
                </a>

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 border border-slate-600 hover:border-sky-500 hover:text-sky-400 rounded-lg font-medium transition"
                  >
                    Live Demo
                  </a>
                ) : (
                  <span className="px-5 py-2 border border-slate-700 text-slate-400 rounded-lg cursor-not-allowed">
                    Coming Soon
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;