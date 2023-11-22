import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/password.png";
import bitsOfCode from "../../Assets/Projects/notestaking.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Notes Taking Application"
              description="Simple Notes Taking Application build with React.js, Bootstrap, Nodejs and MongoDB."
              ghLink="https://github.com/abarnaasuren/Notes-Taking-Application-Frontend"
              demoLink="https://notes-taker-apps.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="PasswordReset"
              description="Simple Password-Reaset Application build with React.js, Bootstrap, Nodejs and MongoDB."
              ghLink="https://github.com/abarnaasuren/password-reset"
              demoLink="https://abarnaa-password-reset.netlify.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
