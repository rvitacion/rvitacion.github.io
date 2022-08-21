import React, { useEffect } from "react";
import Typed from "typed.js";

const Home = () => {
  useEffect(() => {
    (() =>
      new Typed("#typer", {
        strings: [
          "Software Engineer",
          "Frontend Developer",
          "Backend Engineer",
          "Full-Stack Developer",
          "DevOps Engineer",
          "Automation Engineer"
        ],
        typeSpeed: 80,
        backSpeed: 20,
        backDelay: 2000,
        loop: true
      }))();
  }, []);

  return (
    <div id="background">
      <section className="resume-section" id="home">
        <div className="resume-section-content" data-aos="fade-left">
          <div id="nameplate">
            <h1 className="mb-0">
              <span className="text-primary">Ryan</span> Vitacion
            </h1>
            <div className="subheading mb-4">
              <span id="typer" />
            </div>
            <p className="lead mb-0">
              <a href="mailto:ryanvitacion@gmail.com">ryanvitacion@gmail.com</a>
              <br />
              Los Angeles, CA
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
