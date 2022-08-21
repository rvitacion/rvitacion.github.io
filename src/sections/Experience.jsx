import React from "react";

const Experience = () => (
  <section className="resume-section" id="experience">
    <div className="resume-section-content" data-aos="fade-left">
      <h2 className="section-header mb-5">Experience</h2>
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">Application Software Engineer</h3>
          <div className="subheading mb-3">Centene Corporation</div>
          <ul className="fa-ul mb-0" id="experience-bullets">
            <li>
              <span className="fa-li">
                <i className="fas fa-check" />
              </span>
              Containerized team project architecture by writing Dockerfiles for
              a frontend Nginx web server hosting a React single- page
              application and a backend Node.js/Express API.
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check" />
              </span>
              Built fully automated Gitlab CI/CD pipelines for building frontend
              and backend docker containers and deploying custom Helm charts to
              Centene's on-premises Kubernetes platform.
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check" />
              </span>
              Implemented a custom backend email notification system in
              Node.js/Express which interfaces directly with the company's
              enterprise SMTP server, sending thousands of notifications on a
              daily basis.
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check" />
              </span>
              Designed RESTful backend CRUD APIs and auxiliary endpoints in
              Node.js/Express for manipulating data resources hosted on
              Centene's on-premises MongoDB database servers.
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check" />
              </span>
              Created and maintained frontend React views leveraging functional
              components and hooks, as well as additional frontend Node.js
              libraries and packages as needed.
            </li>
          </ul>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">September 2019 - Present</span>
          <br />
          Woodland Hills, CA
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
