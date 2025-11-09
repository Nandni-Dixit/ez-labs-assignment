import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

import blueLine from '../../assets/blue-line.svg';
import tape from '../../assets/tape.png';
import mandala from '../../assets/mandala-border.png'; 
import imgFilm from '../../assets/film-production.png';
import imgBrand from '../../assets/branding.png';
import imgArt from '../../assets/art-curation.png';

import './Services.css'; 

function Services() {
  return (
    <Container fluid className="services-section">
  
      <Row>
        <Col className="text-center title-wrapper">
          <h2>The storyboard reveals the breadth of our craft.</h2>
          <img src={blueLine} alt="underline" className="title-underline" />
        </Col>
      </Row>

      
      <Row className="justify-content-center card-row">

        
        <Col md={4} className="d-flex justify-content-center">
          
          <Link to="/film-production" className="service-card-link">
            <div className="service-card card-1">
              <img src={tape} alt="tape" className="tape-img" />
              <img src={imgFilm} alt="Film Production" className="service-img" />
              <div className="service-caption">
                <h3>Film Production</h3>
              </div>
            </div>
          </Link>
        </Col>

    
        <Col md={4} className="d-flex justify-content-center">
   
          <Link to="/branding" className="service-card-link">
            <div className="service-card card-2">
              <img src={tape} alt="tape" className="tape-img" />
              <img src={imgBrand} alt="Branding" className="service-img" />
              <div className="service-caption">
                <h3>Branding</h3>
              </div>
            </div>
          </Link>
        </Col>

        <Col md={4} className="d-flex justify-content-center">
        
          <Link to="/art-curation" className="service-card-link">
            <div className="service-card card-3">
              <img src={tape} alt="tape" className="tape-img" />
              <img src={imgArt} alt="Art Curation" className="service-img" />
              <div className="service-caption">
                <h3>Art Curation</h3>
              </div>
            </div>
          </Link>
        </Col>
      </Row>


      <div 
        className="mandala-border" 
        style={{ backgroundImage: `url(${mandala})` }}
      ></div>
    </Container>
  );
}

export default Services;