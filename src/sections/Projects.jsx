import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ModalCard from "../components/ModalCard";
import thesisPic from "../../public/img/thesis.png";

const Projects = () => (
  <section className="resume-section" id="projects">
    <div className="resume-section-content" data-aos="fade-left">
      <h2 className="section-header mb-0">Projects</h2>
      <Container fluid>
        <div className="warning-italics">
          <em>Click on each project for more information.</em>
        </div>
        <Row className="mb-0">
          <Col>
            <ModalCard
              title="PlanetGenVR: Procedural Generation of Planetary-Scale Terrains in Virtual Reality"
              picture={thesisPic}
            >
              <ul>
                <li>
                  Developed a benchmarking application and VR rendering
                  prototype in C# and Unity3D for exploring the feasibility of
                  applying procedural generation algorithms to the simulation of
                  3D planets to scale in virtual reality.
                </li>
                <li>
                  Published in the 2019 IEEE International Conference on Space
                  Mission Challenges for Information Technology
                </li>
              </ul>
            </ModalCard>
          </Col>
        </Row>
      </Container>
    </div>
  </section>
);

export default Projects;
