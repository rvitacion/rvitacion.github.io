import React, { useEffect } from "react";
import AOS from "aos";
import NavbarResponsive from "../components/Navbar";
import Home from "../sections/Home";
import Experience from "../sections/Experience";
import Education from "../sections/Education";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Awards from "../sections/Awards";
import "../scss/styles.scss";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <NavbarResponsive />

      <div className="container-fluid p-0">
        <Home />
        <hr className="m-0" />

        <Experience />
        <hr className="m-0" />

        <Skills />
        <hr className="m-0" />

        <Education />
        <hr className="m-0" />

        <Projects />
        <hr className="m-0" />

        <Awards />
      </div>
    </div>
  );
};

export default App;
