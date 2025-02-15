import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
} from "react-icons/di";
import {
  SiRedux,
  SiNextdotjs,
  SiBootstrap,
  SiTailwindcss,
  SiPostcss,
  SiHtml5,
  SiWordpress
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiPostcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiWordpress />
      </Col>
    </Row>
  );
}

export default Techstack;
