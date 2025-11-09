import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import {HashLink as  Link } from 'react-router-hash-link';

import blueLine from '../../assets/bluee-line.png';
import backBtn from '../../assets/back-button.png';
import mainImg from '../../assets/branding-main.png';
import exploreArrow from '../../assets/Arrow.svg';
import icon1 from '../../assets/Branding Vector 01.svg';
import icon2 from '../../assets/Branding Vector 02.svg';
import icon3 from '../../assets/Branding Vector 03.svg';
import icon4 from '../../assets/Branding Vector 04.svg';

import './Branding.css';

function Branding() {
  return (
    <Container fluid className="brand-page-section">
      <img src={icon1} alt="icon" className="deco-img icon1" />
      <img src={icon2} alt="icon" className="deco-img icon2" />
      <img src={icon3} alt="icon" className="deco-img icon3" />
      <img src={icon4} alt="icon" className="deco-img icon4" />
      
      <Link to="/#services" className="back-button-link">
        <img src={backBtn} alt="Back" className="back-button" />
      </Link>
      
      <Row className="justify-content-center">
        <Col md={8} className="text-center quote-wrapper">
          <h2>"A brand is a voice, and a product is a souvenir." – Lisa Gansky</h2>
          <img src={blueLine} alt="underline" className="title-underline" />
        </Col>
      </Row>

      <Row className="justify-content-center align-items-center content-row">
        <Col md={4}>
          <div className="brand-card">
            <Image src={mainImg} fluid />
            <div className="brand-caption">
              <h3>Branding</h3>
            </div>
          </div>
        </Col>

        <Col md={5} className="brand-text">
          <p>
            A brand isn't just what you see - it's what
            you remember, what you carry home, and
            what you trust.
            We shape brands that people remember,
            return to, and fall in love with.
            V creates:
          </p>
          <ul>
            <li>Branding & Communication</li>
            <li>Market Mapping</li>
            <li>Content Management</li>
            <li>Social Media Management</li>
            <li>Rebranding</li>
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

export default Branding;