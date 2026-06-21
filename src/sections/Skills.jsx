// const Skills = () => {
//   return <div>Skills Section</div>;
// };

// export default Skills;


import { motion } from "framer-motion";

const skills = {
  Frontend: [
    "React.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
  ],

  Backend: [
    "Python",
    "FastAPI",
    "Node.js",
    "Express.js",
    "REST APIs",
  ],

  Database: [
    "MongoDB",
    "PostgreSQL",
    "MySQL",
  ],

  "Cloud & DevOps": [
    "Docker",
    "AWS",
    "Git",
    "GitHub",
    "CI/CD",
  ],

  "AI & Tools": [
    "NLP",
    "RAG",
    "Machine Learning",
    "Postman",
    "VS Code",
  ],
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-slate-950 text-white py-24 px-6"
    >
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
            Skills & Technologies
          </h2>

          <div className="w-24 h-1 bg-sky-500 mx-auto rounded-full"></div>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Technologies and tools I use to design, develop,
            deploy, and maintain scalable applications.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8">

          {Object.entries(skills).map(([category, techs], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
            >
              <h3 className="text-2xl font-semibold text-sky-400 mb-5">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {techs.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-4 py-2
                      bg-slate-800
                      border border-slate-700
                      rounded-full
                      text-slate-300
                      hover:border-sky-500
                      hover:text-sky-400
                      transition-all
                      duration-300
                      cursor-default
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;