import Navbar from "../components/common/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Certifications from "../sections/Certifications";
import Contact from "../sections/Contact";
import Footer from "../components/common/Footer";
import Workflow from "../sections/Workflow";

// const Home = () => {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <About />
//       <Skills />
//       <Projects />
//       <Experience />
//       <Certifications />
//       <Contact />
//       <Footer />
//     </>
//   );
// };

// export default Home;


const Home = () => {
  return (
    <>
      <Navbar />

      <Hero />

      <Workflow />

      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />

      <Footer />
    </>
  );
};

export default Home;