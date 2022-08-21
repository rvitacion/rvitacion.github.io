import React from "react";

const Education = () => (
  <section className="resume-section" id="education">
    <div className="resume-section-content" data-aos="fade-left">
      <h2 className="section-header mb-5">Education</h2>
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">California State University, Northridge</h3>
          <div className="subheading mb-3">Software Engineering, M.S.</div>
          <p>Cumulative GPA: 3.93 / 4.0</p>
          <p>Primary Coursework:</p>
          <ul className="fa-ul">
            <li>
              <span className="fa-li">
                <i className="fas fa-check" />
              </span>
              Advanced Web Engineering
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check" />
              </span>
              Software Architecture
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check" />
              </span>
              Data Structures and Algorithm Design
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check" />
              </span>
              Requirements Engineering
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check" />
              </span>
              Graphical User Interfaces
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check" />
              </span>
              Advanced Computer Graphics
            </li>
          </ul>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">August 2015 - December 2018</span>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-between">
        <div className="flex-grow-1">
          <h3 className="mb-0">University of California, Santa Barbara</h3>
          <div className="subheading mb-3">Mathematics/Economics, B.A.</div>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">September 2008 - March 2012</span>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
