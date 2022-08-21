import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Skills = () => (
  <section className="resume-section" id="skills">
    <div className="resume-section-content" data-aos="fade-left">
      <h2 className="section-header mb-5">Skills</h2>
      <h3 className="mb-3">Workflow</h3>
      <ul className="fa-ul mb-0" id="skills-bullets">
        <li>
          <span className="fa-li">
            <i className="fas fa-check" />
          </span>
          Experienced in full-stack web development using React.js, Node.js,
          Express, and MongoDB. (MERN Stack)
        </li>
        <li>
          <span className="fa-li">
            <i className="fas fa-check" />
          </span>
          Familiar with modern architectures and design patterns leveraging
          Docker containers, Kubernetes, and CI/CD.
        </li>
        <li>
          <span className="fa-li">
            <i className="fas fa-check" />
          </span>
          Well-versed in agile development methodologies, concepts, and tools
          including Git, Scrum and JIRA.
        </li>
      </ul>
      <h3 className="mb-3">Programming Languages & Tools</h3>
      <Container fluid id="skills-grid" className="d-none d-lg-block">
        <Row className="mb-2">
          <Col>React.js</Col>
          <Col>Node.js</Col>
          <Col>Express</Col>
          <Col>MongoDB</Col>
          <Col>JavaScript</Col>
          <Col>HTML</Col>
        </Row>
        <Row className="mb-2">
          <Col>CSS</Col>
          <Col>Git</Col>
          <Col>Docker</Col>
          <Col>Kubernetes</Col>
          <Col>Helm</Col>
          <Col>Rancher</Col>
        </Row>
        <Row className="mb-2">
          <Col>GitLab</Col>
          <Col>Kibana</Col>
          <Col>Postman</Col>
          <Col>Studio 3T</Col>
          <Col>Unix Shell</Col>
          <Col>CI/CD</Col>
        </Row>
        <Row>
          <Col>.NET</Col>
          <Col>C#</Col>
          <Col>SQL</Col>
          <Col>Visual Studio</Col>
          <Col>Jira</Col>
          <Col>Scrum</Col>
        </Row>
      </Container>
      <Container fluid id="skills-grid" className="d-block d-lg-none">
        <Row>
          <Col>React.js</Col>
          <Col>Node.js</Col>
        </Row>
        <Row>
          <Col>Express</Col>
          <Col>MongoDB</Col>
        </Row>
        <Row>
          <Col>JavaScript</Col>
          <Col>HTML</Col>
        </Row>
        <Row>
          <Col>CSS</Col>
          <Col>Git</Col>
        </Row>
        <Row>
          <Col>Docker</Col>
          <Col>Kubernetes</Col>
        </Row>
        <Row>
          <Col>Helm</Col>
          <Col>Rancher</Col>
        </Row>
        <Row>
          <Col>GitLab</Col>
          <Col>Kibana</Col>
        </Row>
        <Row>
          <Col>Postman</Col>
          <Col>Studio 3T</Col>
        </Row>
        <Row>
          <Col>Unix Shell</Col>
          <Col>CI/CD</Col>
        </Row>
        <Row>
          <Col>.NET</Col>
          <Col>C#</Col>
        </Row>
        <Row>
          <Col>SQL</Col>
          <Col>Visual Studio</Col>
        </Row>
        <Row>
          <Col>Jira</Col>
          <Col>Scrum</Col>
        </Row>
      </Container>
      <ul className="list-inline dev-icons">
        <li className="list-inline-item">
          <i className="fab fa-react" />
        </li>
        <li className="list-inline-item">
          <i className="fab fa-node-js" />
        </li>
        <li className="list-inline-item">
          <i className="fab fa-npm" />
        </li>
        <li className="list-inline-item">
          <i className="fab fa-docker" />
        </li>
        <li className="list-inline-item">
          <i className="fab fa-js-square" />
        </li>
        <li className="list-inline-item">
          <i className="fab fa-html5" />
        </li>
        <li className="list-inline-item">
          <i className="fab fa-css3-alt" />
        </li>
        <li className="list-inline-item">
          <i className="fab fa-sass" />
        </li>
        <li className="list-inline-item">
          <i className="fab fa-gitlab" />
        </li>
        <li className="list-inline-item">
          <i className="fab fa-github" />
        </li>
        <li className="list-inline-item">
          <i className="fab fa-jira" />
        </li>
      </ul>
    </div>
  </section>
);

export default Skills;
