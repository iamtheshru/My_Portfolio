import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Age from "../../Assets/Projects/age.png";
import Sq from "../../Assets/Projects/sq.png";
import Ticket from "../../Assets/Projects/ticket-system.png";
import Game from "../../Assets/Projects/game.png";
import Ems from "../../Assets/Projects/react.png"
import happymart from "../../Assets/Projects/happymart.png"
import brunchfood from "../../Assets/Projects/brunch-food.png"
function Projects() {
  const [activeBtn, setActiveBtn] = useState("all");

  const handleBtn = (btnName) => {
    console.log("hello");
    setActiveBtn(btnName);

  };

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
        <div className="d-flex flex-wrap gap-3" style={{justifyContent:'center'}}>

        <Button variant="primary" onClick={() => handleBtn("all")} >All</Button>
        <Button variant="primary" onClick={() => handleBtn("react")} >React JS</Button>
        <Button variant="primary" onClick={() => handleBtn("js")} >JavaScript</Button>
        <Button variant="primary" onClick={() => handleBtn("wd")} >Web Desing</Button>

        </div>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {(activeBtn === "all" || activeBtn === "react") && (
            <>
              < Col md={4} className="project-card">
                <ProjectCard
                  imgPath={Ems}
                  isBlog={false}
                  title="EMS Project"
                  description=""
                  ghLink="https://github.com/iamtheshru/Ems_Project"
                  demoLink="https://ems-project-five.vercel.app/"
                />
              </Col>
              < Col md={4} className="project-card">
                <ProjectCard
                  imgPath={Ticket}
                  isBlog={false}
                  title="Ticket management"
                  description=""
                  ghLink="https://github.com/iamtheshru/Ticket_Management"
                  demoLink="https://ticket-management-amber.vercel.app/"
                />
              </Col>
            </>
          )
          }
          {(activeBtn === "all" || activeBtn === "js") && (
            <>
              < Col md={4} className="project-card">
                <ProjectCard
                  imgPath={Sq}
                  isBlog={false}
                  title="Quize App"
                  description=""
                  ghLink="https://github.com/iamtheshru/QuizeApp"
                  demoLink="https://quize-app-ivory.vercel.app/"
                />
              </Col>
              < Col md={4} className="project-card">
                <ProjectCard
                  imgPath={Game}
                  isBlog={false}
                  title="Bubble Game"
                  description=""
                  ghLink="https://github.com/iamtheshru/Bubble_Game"
                  demoLink="https://bubble-game-psi-lime.vercel.app/"
                />
              </Col>
              < Col md={4} className="project-card">
                <ProjectCard
                  imgPath={Age}
                  isBlog={false}
                  title="Age Calculator"
                  description=""
                  ghLink="https://github.com/iamtheshru/AgeCalculator"
                  demoLink="https://age-calculator-sooty-rho.vercel.app/"
                />
              </Col>
            </>
          )
          }
          {(activeBtn === "all" || activeBtn === "wd") && (
            <>            < Col md={4} className="project-card">
              <ProjectCard
                imgPath={happymart}
                isBlog={false}
                title="Happy Mart"
                description=""
                ghLink="https://github.com/iamtheshru/HappyMart"
                demoLink="https://iamtheshru.github.io/HappyMart/index.html"
              />
            </Col>
              < Col md={4} className="project-card">
                <ProjectCard
                  imgPath={brunchfood}
                  isBlog={false}
                  title="Brunch Food"
                  description=""
                  ghLink="https://github.com/iamtheshru/Brunch-Food"
                  demoLink="https://iamtheshru.github.io/Brunch-Food/"
                />
              </Col>
            </>)
          }
        </Row>
      </Container>
    </Container >
  );
}

export default Projects;
