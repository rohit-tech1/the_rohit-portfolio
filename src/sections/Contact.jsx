// const Contact = () => {
//   return <div>Contact Section</div>;
// };

// export default Contact;
import { motion } from "framer-motion";

const contactInfo = [
  {
    label: "Email",
    value: "rohitmondal.officiall@gmail.com",
    href: "mail:rohitmondal.officiall@gmail.com",
    icon: "📧",
  },
  {
    label: "Location",
    value: "Bengaluru, India",
    href: null,
    icon: "📍",
  },
  {
  label: "Availability",
  value:
    "Open to Software Engineer and Full Stack Developer opportunities across Bengaluru, Hyderabad, Pune, Chennai, Gurgaon NCR, Mumbai, Kolkata, and Noida NCR.",
  href: null,
  icon: "🚀",
  },
//   {
//     label: "GitHub",
//     value: "https://github.com/rohit...",
//     href: "https://github.com/rohit...",
//     icon: "💻",
//   },
//   {
//     label: "LinkedIn",
//     value: "https://linkedin.com/in/rohit...",
//     href: "https://linkedin.com/in/rohit...",
//     icon: "💼",
//   },
//   {
//     label: "Availability",
//     value: "Open to Software Engineer and Full Stack Developer opportunities",
//     href: null,
//     icon: "🚀",
//   },
];

const Contact = () => {
  return (
    <section id="contact" className="bg-slate-900 text-white py-24 px-6">
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
            Contact Me
          </h2>
          <div className="w-24 h-1 bg-sky-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Let’s discuss opportunities, projects, or collaborations. I’m always open to connecting about software engineering, full-stack development, and meaningful work.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-950 border border-slate-800 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold text-sky-400 mb-6">
              Get In Touch
            </h3>

            <p className="text-slate-400 leading-relaxed mb-8">
              I’m open to discussing software engineering opportunities, full-stack development roles, AI-driven projects, and collaborations. Feel free to reach out through email, LinkedIn, GitHub, or the contact form.
            </p>

            <div className="space-y-5">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-900 border border-slate-800 rounded-xl p-4 hover:border-sky-500 transition"
                >
                  <p className="text-sky-400 font-medium mb-1">
                    {item.icon} {item.label}
                  </p>

                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-sky-400 break-all transition"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-slate-300">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-950 border border-slate-800 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold text-sky-400 mb-6">
              Send a Message
            </h3>

            <form className="space-y-5">
              <div>
                <label className="block text-slate-300 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-2">Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white outline-none focus:border-sky-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;