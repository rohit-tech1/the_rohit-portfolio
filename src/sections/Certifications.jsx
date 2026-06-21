// const Certifications = () => {
//   return <div>Certifications Section</div>;
// };

// export default Certifications;

// import { motion } from "framer-motion";
// import certifications from "../data/certifications";

// const Certifications = () => {
//   return (
//     <section id="certifications" className="bg-slate-950 text-white py-24 px-6">
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
//             Certifications
//           </h2>
//           <div className="w-24 h-1 bg-sky-500 mx-auto rounded-full"></div>
//           <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
//             Certifications that showcase my fascination with full-stack development and my curiosity to explore the endless possibilities of building modern software solutions.
//           </p>
//         </motion.div>

//         {/* Cards */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {certifications.map((cert, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4 + index * 0.1 }}
//               viewport={{ once: true }}
//               className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-sky-500 transition-all duration-300 shadow-lg"
//             >
//               <h3 className="text-xl font-semibold text-sky-400 mb-3">
//                 {cert.title}
//               </h3>

//               <p className="text-slate-300 mb-2">
//                 {cert.issuer}
//               </p>

//               <p className="text-slate-500 text-sm">
//                 {cert.year}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Certifications;


import { motion } from "framer-motion";
import certifications from "../data/certifications";

const Certifications = () => {
  return (
    <section id="certifications" className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-sky-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Certifications and learning milestones that strengthened my skills in
            full-stack development, frontend engineering, Python, and practical software development.
          </p>
        </motion.div>

        {/* Certification Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-sky-500 transition-all duration-300 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-sky-400 mb-2">
                {cert.title}
              </h3>

              <p className="text-slate-300 mb-1">
                {cert.issuer}
              </p>

              <p className="text-slate-500 text-sm mb-4">
                {cert.year}
              </p>

              <p className="text-slate-400 leading-relaxed mb-6">
                {cert.description}
              </p>

              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition"
              >
                View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;