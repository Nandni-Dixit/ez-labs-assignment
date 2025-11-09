import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import paperNote from '../../assets/paper-note.png';
import clip from '../../assets/clip.png';
import gate from '../../assets/Gate.png';
import people from '../../assets/people.png';
import arrow1 from '../../assets/arrow-gate.svg';
import arrow2 from '../../assets/arrow-film.svg';
import arrow3 from '../../assets/arrow-art.svg';

import './TheirStories.css'; 

function TheirStories() {
  return (
    <Container fluid className="stories-section">
      <Row className="align-items-center">

        {/* --- LEFT COLUMN --- */}
        <Col md={5}>
         
          <div className="paper-note-wrapper">
            <img src={clip} alt="Clip" className="clip-img" />
            <img src={paperNote} alt="Story Note" className="paper-note-img" />
            
            <div className="paper-note-text">
              <p>
                Some craft films. Some build brands. Some curate art. We bring it all together - a
                collective of storytellers driven by one belief: every project deserves to be more
                than just a message; it should become a masterpiece.
              </p>
              <p>
                From first spark to final frame, from raw ideas to timeless visuals - we shape stories
                that stay with you.
              </p>
            </div>

          </div>

          <div className="gate-wrapper">
            <img src={gate} alt="Gate" className="gate-img" />
            <img src={arrow1} alt="Arrow" className="arrow-gate" />
            <span className="label-gate">Branding Experts</span>
          </div>
        </Col>

        {/* --- RIGHT COLUMN --- */}
        <Col md={7}>
        
          <div className="people-wrapper">
            <img src={people} alt="People" className="people-img" />
            <img src={arrow2} alt="Arrow" className="arrow-film" />
            <span className="label-film">Film Makers</span>
            <img src={arrow3} alt="Arrow" className="arrow-art" />
            <span className="label-art">Art Curators</span>
          </div>

          <div className="text-center stories-footer">
            <h2>Take a closer look at the stories V bring to life.</h2>
            <Button variant="danger" className="portfolio-btn">View Portfolio</Button>
          </div>
          

        </Col>
      </Row>

      
    </Container>
  );
}

export default TheirStories;