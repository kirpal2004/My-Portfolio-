// components/Projects.js
import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

const projectData = [
  {
    title: "Expense Manager App",
    description: "React.js + Firebase tracker with Google login and dark mode.",
    link: "https://github.com/kirpal2004/Expense-App",
  },
  {
    title: "Vrinda Store Analysis",
    description: "Excel dashboards for customer insights and sales visualization.",
    link: "https://github.com/kirpal2004/Store-Analysis-project-/tree/main",
  },
  {
    title: "Food Website Landing Page",
    description: "Built using React.js + Bootstrap during internship.",
    link: "https://github.com/kirpal2004/Food-website-landing-page-internship-",
  },
];

const Projects = () => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
  >
    <Container id="projects" style={{ padding: '60px 20px', maxWidth: '1100px' }}>
      <h2 style={{ color: '#00BCD4', marginBottom: '30px' }}>Projects</h2>
      <Row>
        {projectData.map((project, index) => (
          <Col key={index} xs={12} md={6} lg={4} style={{ marginBottom: '20px' }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              style={{ height: '100%' }}
            >
              <Card style={{
                height: '100%',
                backgroundColor: 'ffff',
                color: '',
                border: '1px solid #263238',
                borderRadius: '12px',
                boxShadow: '0 10px 20px rgba(234, 224, 224, 0.5)',
              }}>
                <Card.Body>
                  <Card.Title style={{ color: '#00ACC1' }}>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: '' }}>
                    View Project
                  </a>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  </motion.div>
);

export default Projects;