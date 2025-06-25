import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => (
  <section id="about" className="py-5">
    <Container>
      <h2 className="text-center">About Me</h2>
      <Row className="mt-4">
        <Col md={8}>
          <p>Hello! I'm Kirpalsinh Solanki, a passionate web developer and data analyst...</p>
        </Col>
        <Col md={4}>
          <Row>
            <Col><Card body>9.02 GPA</Card></Col>
            <Col><Card body>3+ Projects</Card></Col>
          </Row>
          <Row className="mt-2">
            <Col><Card body>10+ Technologies</Card></Col>
            <Col><Card body>1 Internship</Card></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </section>
);

export default About;