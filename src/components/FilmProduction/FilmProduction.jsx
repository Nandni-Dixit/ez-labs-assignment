import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import {HashLink as Link } from 'react-router-hash-link';


import blueLine from '../../assets/bluee-line.png';
import backBtn from '../../assets/back-button.png';
import mainImg from '../../assets/green-light.png';
import exploreArrow from '../../assets/Arrow.svg';
import iconCam1 from '../../assets/Camera 01.svg';
import iconCam2 from '../../assets/Camera 02.svg';
import iconCam3 from '../../assets/Camera 03.svg';
import iconTripod from '../../assets/Camera 04.svg';

import './FilmProduction.css'; 

function FilmProduction() {
 

  return (
    <Container fluid className="film-page-section">

      <img src={iconCam1} alt="icon" className="deco-img cam1" />
      <img src={iconCam2} alt="icon" className="deco-img cam2" />
      <img src={iconCam3} alt="icon" className="deco-img cam3" />
      <img src={iconTripod} alt="icon" className="deco-img tripod" />
      
      
      <Link to="/#services" className="back-button-link">
        <img src={backBtn} alt="Back" className="back-button" />
      </Link>
      

      <Row className="justify-content-center">
        <Col md={8} className="text-center quote-wrapper">
          <h2>"Filmmaking is a chance to live many lifetimes." – Robert Altman</h2>
          <img src={blueLine} alt="underline" className="title-underline" />
        </Col>
      </Row>

   
      <Row className="justify-content-center align-items-center content-row">

        <Col md={4}>
          <div className="film-card">
            <Image src={mainImg} fluid />
            <div className="film-caption">
              <h3>Film Production</h3>
            </div>
          </div>
        </Col>


        <Col md={5} className="film-text">
          <p>Who says films are just an escape?
          We see them as a way to live many lives – to
          feel, to explore, and to tell stories that stay.
          And with each film, we carry new memories
          and new reasons to keep creating.
          V' crafts:
          </p>
          <ul>
            <li>Documentaries</li>
            <li>Corporate Videos</li>
            <li>2D Animation Videos</li>
            <li>3D Animation Videos</li>
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

export default FilmProduction;