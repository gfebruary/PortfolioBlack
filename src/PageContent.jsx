import Experience from "./Experience";
import About from "./About";
import Footer from "./Footer";

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
        <div id="projects" className="section section-heading">
          Projects
          <p className="section-text">
            Aut sed, itaque temporibus deleniti placeat nihil sequi dolorum
            incidunt! Fuga quidem illum adipisci nulla id reiciendis tempore
            commodi sed distinctio ipsam!
          </p>
        </div>
        <div id="contact" className="section section-heading">
          Contact
          <p className="section-text">
            Aut sed, itaque temporibus deleniti placeat nihil sequi dolorum
            incidunt! Fuga quidem illum adipisci nulla id reiciendis tempore
            commodi sed distinctio ipsam!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PageContent;
