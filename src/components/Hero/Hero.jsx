

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import mandala from '../../assets/Hero Mandala.png';
import vlogo from '../../assets/VFilms Logo.png';
import './Hero.css'; 

function Hero() {
  return (
    <Container fluid className="hero-section d-flex align-items-center">
    
      <Row className="w-100">

        <Col md={6} className="d-flex justify-content-center align-items-center mb-5 mb-md-0">
          <div className="logo-stack">
            <img 
              src={mandala} 
              alt="Mandala Art" 
              className="logo-background" 
            />
            <img 
              src={vlogo} 
              alt="V Films Logo" 
              className="logo-foreground" 
            />
          </div>
        </Col>

        <Col md={6} className="d-flex flex-column justify-content-center hero-text-column">
          <h1 className="hero-headline">
            Varnan is where stories find
            their voice and form.
          </h1>
          <h3 className="hero-sublinks">
            Films . Brands . Art
          </h3>
          <p className="hero-paragraph">
            Since 2009, V’ve been telling stories - stories of people, their journeys, and the places that shape them.
            Some begin in polished boardrooms, others in humble village squares. But every story starts the same way - by listening with intention. V believes it takes trust, patience, and an eye for the unseen to capture what truly matters.
            V doesn’t just tell stories - V honors them.
          </p>
        </Col>

      </Row>
    </Container>
  );
}

export default Hero;