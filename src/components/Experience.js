import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Experience = () => (
  <section id="experience" className="py-5 bg-light">
    <Container>
      <h2 className="text-center">Experience & Achievements</h2>
      <Row className="mt-4">
        <Col md={6}>
          <Card body>
            <h5>Frontend Developer Intern</h5>
            <p>Tech Elcon (May 2025 – June 2025)</p>
            <p>Developed food website using React.js and Bootstrap</p>
          </Card>
        </Col>
        <Col md={6}>
          <Card body>
            <h5>Achievements</h5>
            <ul>
              <li>Certificate for Prague 2024</li>
              <li>NPTEL Cloud Computing</li>
              <li>Volunteer Work</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Experience;