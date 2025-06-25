import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => (
  <section id="contact" className="py-5">
    <Container>
      <h2 className="text-center">Get In Touch</h2>
      <Row className="mt-4">
        <Col md={6}>
          <p><FaEnvelope /> kirpalsolanki2004@gmail.com</p>
          <p><FaPhone /> 9327693533</p>
          <p><FaMapMarkerAlt /> VV Nagar, Gujarat, India</p>
        </Col>
        <Col md={6}>
          <Form>
            <Form.Group className="mb-2">
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control type="text" placeholder="Subject" />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control as="textarea" rows={3} placeholder="Message" />
            </Form.Group>
            <Button type="submit">Send Message</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Contact;