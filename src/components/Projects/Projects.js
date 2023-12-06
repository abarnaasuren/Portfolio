import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import notesTakingImage from "../../Assets/Projects/notestaking.png";
import dogImage from "../../Assets/Projects/dog.png";
import receipeImage from "../../Assets/Projects/receipe.png";
import blogImage from "../../Assets/Projects/blog.png";
import authenticationImage from "../../Assets/Projects/auth.png";

import todoImage from "../../Assets/Projects/todo.png";

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
              imgPath={notesTakingImage}
              isBlog={false}
              title="Notes Taking Application"
              description="Simple Notes Taking Application build with React.js, Bootstrap, Nodejs and MongoDB."
              ghLink="https://github.com/abarnaasuren/Notes-Taking-Application-Frontend"
              demoLink="https://notes-taker-apps.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={authenticationImage}
              isBlog={false}
              title="User-Authentication"
              description="Simple User-Authentication Application build with React.js, Bootstrap, Nodejs and MongoDB."
              ghLink="https://github.com/abarnaasuren/user-authentication-frontend"
              demoLink="https://jolly-tanuki-a587d5.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={receipeImage}
              isBlog={false}
              title="Receipe Finder Application"
              description="Simple Receipe Finder Application with HTML,CSS,JavaScript,Bootstrap,API."
              ghLink="https://github.com/abarnaasuren/Recipe-finder-Day-20.git"
              demoLink="https://teal-mochi-aeeabf.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogImage}
              isBlog={false}
              title="BLOG"
              description="Created a simple web page with routes using react-router-dom."
              ghLink="https://github.com/abarnaasuren/router.git"
              demoLink="https://effervescent-clafoutis-90c035.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todoImage}
              isBlog={false}
              title="ToDo List"
              description="Simple CURD Opertation using HTML,CSS,JavaScript,React"
              ghLink="https://github.com/abarnaasuren/Day-25-ToDo.git"
              demoLink="https://comfy-cocada-a9a463.netlify.app/"
            />
          </Col>

         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dogImage}
              isBlog={false}
              title="API Task"
              description="It is a simple API task built in HTML, CSS, JavaScript"
              ghLink="https://github.com/abarnaasuren/DOG-IMAGE-DAY-20.git"
              demoLink="https://lustrous-faun-55e491.netlify.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
