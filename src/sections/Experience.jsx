// const Experience = () => {
//   return <div>Experience Section</div>;
// };

// export default Experience;

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Infotact Solution",
    role: "Full Stack Developer",
    duration: "1+ Year",
    description:
      "Worked on scalable web applications using React.js, Node.js, MongoDB, JWT Authentication, Razorpay Integration, and Google Maps API.",
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "JWT",
      "Razorpay",
      "Google Maps API",
    ],
  },

  {
    company: "CodeSpeedy",
    role: "Python Developer Intern",
    duration: "6+ Months",
    description:
      "Developed Python applications, optimized scripts, improved debugging efficiency, and collaborated on software development projects.",
    technologies: [
      "Python",
      "OOP",
      "SQL",
      "Automation",
      "Debugging",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience
          </h2>

          <div className="w-24 h-1 bg-sky-500 mx-auto rounded-full"></div>

          <p className="text-slate-400 mt-6">
            My professional journey and hands-on industry experience.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l-2 border-sky-500 ml-4">

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12 ml-8"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[11px] w-5 h-5 bg-sky-500 rounded-full"></div>

              {/* Card */}
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-lg">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-2xl font-semibold text-sky-400">
                    {exp.role}
                  </h3>

                  <span className="text-slate-400">
                    {exp.duration}
                  </span>
                </div>

                <h4 className="text-lg text-white mb-4">
                  {exp.company}
                </h4>

                <p className="text-slate-300 leading-relaxed mb-5">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3 py-1
                        bg-slate-700
                        text-slate-300
                        rounded-full
                        border border-slate-600
                        hover:border-sky-500
                        hover:text-sky-400
                        transition
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;