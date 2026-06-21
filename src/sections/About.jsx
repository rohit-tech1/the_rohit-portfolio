// const About = () => {
//   return <div>About Section</div>;
// };

// export default About;


import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About Me
          </h2>

          <div className="w-24 h-1 bg-sky-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <p className="text-slate-300 text-lg leading-relaxed">
            I am a <span className="text-sky-400 font-semibold">Software Engineer</span> and
            <span className="text-sky-400 font-semibold"> Full Stack Developer</span> based in
            Bengaluru, India. I graduated with a B.Tech in Computer Science &
            Engineering from Government College of Engineering, Keonjhar
            (2020–2024).
          </p>

          <p className="text-slate-400 text-lg leading-relaxed mt-6">
            My journey began with Python development and evolved into
            full-stack engineering, where I build scalable web applications,
            backend systems, and AI-powered solutions. Through my internship at
            CodeSpeedy and professional experience at Infotact Solution, I have
            worked with modern technologies and development practices.
          </p>

          <p className="text-slate-400 text-lg leading-relaxed mt-6">
            Currently, I am focused on growing as a Software Engineer,
            contributing to impactful products, strengthening system design
            skills, and building innovative solutions that solve real-world
            problems.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-slate-800 p-6 rounded-2xl border border-slate-700"
          >
            <h3 className="text-xl font-semibold text-sky-400 mb-4">
              🎓 Education
            </h3>

            <p className="text-white font-medium">
              B.Tech in Computer Science & Engineering
            </p>

            <p className="text-slate-400 mt-2">
              Government College of Engineering, Keonjhar
            </p>

            <p className="text-slate-500 mt-2">
              2020 – 2024
            </p>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-800 p-6 rounded-2xl border border-slate-700"
          >
            <h3 className="text-xl font-semibold text-sky-400 mb-4">
              💼 Experience
            </h3>

            <p className="text-white">
              CodeSpeedy
            </p>

            <p className="text-slate-400">
              Python Developer Intern
            </p>

            <p className="text-slate-500 mb-4">
              6+ Months
            </p>

            <p className="text-white">
              Infotact Solution
            </p>

            <p className="text-slate-400">
              Full Stack Developer
            </p>

            <p className="text-slate-500">
              1+ Year
            </p>
          </motion.div>

          {/* Current Focus */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-slate-800 p-6 rounded-2xl border border-slate-700"
          >
            <h3 className="text-xl font-semibold text-sky-400 mb-4">
              🚀 Current Focus
            </h3>

            <ul className="space-y-2 text-slate-300">
              <li>• Full Stack Development</li>
              <li>• AI & RAG Applications</li>
              <li>• Backend Engineering</li>
              <li>• Cloud & DevOps</li>
              <li>• System Design</li>
            </ul>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-slate-800 rounded-xl p-6 text-center border border-slate-700">
            <h3 className="text-3xl font-bold text-sky-400">
              1.5+
            </h3>
            <p className="text-slate-400 mt-2">
              Years Experience
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 text-center border border-slate-700">
            <h3 className="text-3xl font-bold text-sky-400">
              2
            </h3>
            <p className="text-slate-400 mt-2">
              Featured Projects
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 text-center border border-slate-700">
            <h3 className="text-3xl font-bold text-sky-400">
              React + FastAPI
            </h3>
            <p className="text-slate-400 mt-2">
              Full Stack
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 text-center border border-slate-700">
            <h3 className="text-3xl font-bold text-sky-400">
              Python
            </h3>
            <p className="text-slate-400 mt-2">
              Backend Development
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;