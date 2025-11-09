import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


import paperNoteImg from '../../assets/paper-note-stat.png';
import mountainImg from '../../assets/mountain-graphic.png';

import logoCoke from '../../assets/logo-coke.png';
import logoTed from '../../assets/logo-ted.png';
import logoArton from '../../assets/logo-arton.png';
import logoDesignFro from '../../assets/logo-designfro.png';

import './OurStories.css'; 

function OurStories() {
  return (
    <Container fluid className="our-stories-section">
      <Row>
        <Col md={6} className="story-left-col d-flex flex-column align-items-center">
          <div className="story-intro">
            <h2>A montage of familiar faces and names.</h2>
            <p>
              Some stories come from the biggest names.
              Others begin with bold, rising voices.
              We've been fortunate to walk alongside both -
              listening, creating, and building stories that
              matter.
            </p>
          </div>

          <div className="stats-container">
            {/* Stat 1 */}
            <div className="stat-item stat-1">
              <img src={paperNoteImg} alt="Projects" />
              <div className="stat-text">
                <h3>85+</h3>
                <p>Projects</p>
              </div>
            </div>
            {/* Stat 2 */}
            <div className="stat-item stat-2">
              <img src={paperNoteImg} alt="Happy Clients" />
              <div className="stat-text">
                <h3>50+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
            {/* Stat 3 */}
            <div className="stat-item stat-3">
              <img src={paperNoteImg} alt="Experts Team" />
              <div className="stat-text">
                <h3>10+</h3>
                <p>Experts Team</p>
              </div>
            </div>
          </div>
        </Col>

        {/* --- RIGHT COLUMN --- */}
        <Col md={6} className="story-right-col">
          <h1 className="story-headline">
            Every project is more than just a brief -
            it's a new chapter waiting to be written.
            Together, we're crafted tales that inspire,
            connect, and endure.
          </h1>

          <div className="graphic-wrapper">
            <img src={mountainImg} alt="Mountain graphic" className="mountain-img" />
            
            <img src={logoCoke} alt="Coca-Cola" className="float-logo logo-coke" />
            <img src={logoTed} alt="TED" className="float-logo logo-ted" />
            <img src={logoArton} alt="Arion" className="float-logo logo-arton" />
            <img src={logoDesignFro} alt="DesignFro" className="float-logo logo-designfro" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default OurStories;