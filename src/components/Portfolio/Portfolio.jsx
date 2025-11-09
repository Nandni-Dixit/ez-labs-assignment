import React from 'react';
import { Container, Row, Col, Carousel, Image } from 'react-bootstrap';

import { Youtube } from 'react-bootstrap-icons'; 

import vintageCamera from '../../assets/vintage-camera.svg';
import mandalaRight from '../../assets/mandala-right.png'; 
import arrowLeft from '../../assets/arrow-left.png';
import arrowRight from '../../assets/arrow-right.png';
import videoThumb from '../../assets/film-production.png'; 

import './Portfolio.css'; 

function Portfolio() {
  const prevIcon = <img src={arrowLeft} alt="Previous" className="carousel-arrow" />;
  const nextIcon = <img src={arrowRight} alt="Next" className="carousel-arrow" />;

  return (
    <Container fluid className="portfolio-section">
      
      <img src={vintageCamera} alt="Vintage Camera" className="vintage-camera-img" />
      <img src={mandalaRight} alt="Mandala" className="mandala-right-img" />

      <Row>
        <Col className="text-center portfolio-title">
          <h2>The Highlight Reel</h2>
          <p>Watch the magic we've captured.</p>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={7}>
          <div className="film-strip-frame">
            <Carousel 
              indicators={false} 
              prevIcon={prevIcon} 
              nextIcon={nextIcon}
            >
              
              <Carousel.Item>
                <div className="video-item-wrapper">
                  <Image src={videoThumb} fluid />
                  <div className="play-button-overlay">
                   
                    <Youtube size={80} color="#FF0000" />
                  </div>
                </div>
              </Carousel.Item>

              
              <Carousel.Item>
                <div className="video-item-wrapper">
                  <Image src={videoThumb} fluid />
                  <div className="play-button-overlay">
                    
                    <Youtube size={80} color="#FF0000" />
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;