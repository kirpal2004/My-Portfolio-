import React from 'react';
import { Container, Row, Col, ProgressBar, Badge } from 'react-bootstrap';

const Skills = () => (
  <section id="skills" className="py-5 bg-light">
    <Container>
      <h2 className="text-center">Skills & Technologies</h2>
      <Row className="mt-4">
        <Col md={6}>
          {['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Angular', 'MongoDB', 'MySQL', 'XAMPP', 'MS Excel'].map(skill => (
            <div key={skill} className="mb-2">
              <strong>{skill}</strong>
              <ProgressBar now={Math.floor(Math.random() * 30 + 60)} label={`${Math.floor(Math.random() * 30 + 60)}%`} />
            </div>
          ))}
        </Col>
        <Col md={6}>
          <h5>Languages</h5>
          {['English', 'Hindi', 'Gujarati'].map(lang => (
            <Badge key={lang} bg="secondary" className="me-2">{lang}</Badge>
          ))}
          <h5 className="mt-4">Interests</h5>
          {['Driving Car', 'Chess', 'Listening Music'].map(interest => (
            <Badge key={interest} bg="info" className="me-2">{interest}</Badge>
          ))}
        </Col>
      </Row>
    </Container>
  </section>
);

export default Skills;