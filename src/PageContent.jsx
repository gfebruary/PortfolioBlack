import Experience from "./Experience";
import About from "./About";
import Footer from "./Footer";
import Projects from "./Projects";
import Contact from "./Contact";

function PageContent() {
  return (
    <div id="home" className="main-content-container">
      <p className="main-content-1">Gary February</p>
      <p className="main-content-2">Full Stack Web & App Developer</p>
      <p className="main-content-3">Digital Media Designer</p>

      <div id="about" className="section section-heading">
        About
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default PageContent;
