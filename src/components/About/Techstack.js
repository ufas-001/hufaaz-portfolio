import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiDocker,
  DiLinux,
  DiPython,
  DiGit,
  DiAws,
  DiJenkins,
  DiMongodb,
} from "react-icons/di";
import {
  SiAnsible,
  SiGithubactions,
  SiAmazonaws,
  SiAwscloudformation,
  SiTerraform,
} from "react-icons/si";

import { FaWrench } from "react-icons/fa"; // Placeholder icon for Terraform

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJenkins />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnsible />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithubactions />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTerraform />
      </Col>
    </Row>
  );
}

export default Techstack;
