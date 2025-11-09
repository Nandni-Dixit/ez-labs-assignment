import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';


import blueLine from '../../assets/bluee-line.png';
import backBtn from '../../assets/back-button.png';
import mainImg from '../../assets/art-curation-main.jpg'; 
import exploreArrow from '../../assets/Arrow.svg';
import icon1 from '../../assets/art-icon1.svg';
import icon2 from '../../assets/art-icon2.svg';
import icon3 from '../../assets/art-icon3.svg';

import './ArtCuration.css';

function ArtCuration() {
  return (
    <Container fluid className="art-page-section">
     
      <img src={icon1} alt="icon" className="deco-img icon1" />
      <img src={icon2} alt="icon" className="deco-img icon2" />
      <img src={icon3} alt="icon" className="deco-img icon3" />
      
    
      <Link to="/#services" className="back-button-link">
        <img src={backBtn} alt="Back" className="back-button" />
      </Link>
      

      <Row className="justify-content-center">
        <Col md={8} className="text-center quote-wrapper">
          <h2>"V take art where it belongs, to the people." – Vernita Verma</h2>
          <img src={blueLine} alt="underline" className="title-underline" />
        </Col>
      </Row>


      <Row className="justify-content-center align-items-center content-row">
        
        <Col md={4}>
          <div className="art-card">
            <Image src={mainImg} fluid />
            <div className="art-caption">
              <h3>Art Curation</h3>
            </div>
          </div>
        </Col>

        
        <Col md={5} className="art-text">
          <p>
            Art isn't meant to sit on distant walls - it's
            meant to breathe, to travel, to belong.
            Through every festival, every performance,
            and every gathering, we help stories find
            their stage and their people.
            V curates:
          </p>
          <ul>
            <li>Art Festivals</li>
            <li>Live Performances</li>
            <li>Community Events</li>
            <li>Cultural Storytelling</li>
          </ul>

          <div className="explore-now">
            <span>Explore Now</span>
            <img src={exploreArrow} alt="explore" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ArtCuration;