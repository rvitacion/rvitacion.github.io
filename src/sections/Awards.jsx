import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ModalCard from "../components/ModalCard";
import scholarshipPic from "../../public/img/scholarship.jpg";
import graduationPic from "../../public/img/graduation.jpg";

const Awards = () => (
  <section className="resume-section" id="awards">
    <div className="resume-section-content" data-aos="fade-left">
      <h2 className="section-header mb-0">Awards</h2>
      <Container fluid className="d-none d-lg-block">
        <div className="warning-italics">
          <em>Click on each award for more information.</em>
        </div>
        <Row className="mb-0">
          <Col>
            <ModalCard
              title={
                <span>
                  <i className="fas fa-trophy text-warning" /> CSUN CECS Class
                  of 2019 Outstanding Graduate in Software Engineering
                </span>
              }
              picture={graduationPic}
            >
              <div className="award-description">
                <strong>May 17, 2019</strong>
                <br />
                Awarded by the CSUN College of Engineering and Computer Science
                to a single graduate who demonstrated outstanding academic
                performance within their major degree program.
              </div>
            </ModalCard>
          </Col>
          <Col>
            <ModalCard
              title={
                <span>
                  <i className="fas fa-trophy text-warning" /> 2016-2017 Bolan
                  Family Endowed Scholarship for Computer Science
                </span>
              }
              picture={scholarshipPic}
            >
              <div className="award-description">
                <strong>May 2016</strong>
                <br />
                Awarded by the CSUN College of Engineering and Computer Science
                to students who show great potential in the fields of
                Engineering and Computer Science.
              </div>
            </ModalCard>
          </Col>
        </Row>
      </Container>
      <Container fluid id="skills-grid" className="d-block d-lg-none">
        <Row className="mb-4">
          <Col>
            <ModalCard
              title={
                <span>
                  <i className="fas fa-trophy text-warning" /> CSUN CECS Class
                  of 2019 Outstanding Graduate in Software Engineering
                </span>
              }
              picture={graduationPic}
            >
              Awarded by the CSUN College of Engineering and Computer Science to
              a single graduate who demonstrated outstanding academic
              performance within their major degree program.
            </ModalCard>
          </Col>
        </Row>
        <Row className="mb-0">
          <Col>
            <ModalCard
              title={
                <span>
                  <i className="fas fa-trophy text-warning" /> 2016-2017 Bolan
                  Family Endowed Scholarship for Computer Science
                </span>
              }
              picture={scholarshipPic}
            >
              Awarded by the CSUN College of Engineering and Computer Science to
              students who show great potential in the fields of Engineering and
              Computer Science.
            </ModalCard>
          </Col>
        </Row>
      </Container>
    </div>
  </section>
);

export default Awards;
