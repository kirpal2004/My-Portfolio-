import React from 'react';
import { Container } from 'react-bootstrap';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => (
  <div className="text-center p-5 bg-light" style={{ minHeight: '60vh' }}>
    <Container>
      <h1><strong>Kirpalsinh <span className="text-primary">Solanki</span></strong></h1>
      <h5>Web Developer | Data Analyst</h5>
      <p className="text-muted">Passionate about creating innovative web solutions and analyzing data.</p>
      <div className="d-flex justify-content-center gap-3 mt-3">
        <a
          href="mailto:kirpalsolanki2004@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope size={24} />
        </a>
        <a
          href="https://github.com/kirpal2004"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/kirpalsinh-solanki-403a00258/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </Container>
  </div>
);

export default Hero;
