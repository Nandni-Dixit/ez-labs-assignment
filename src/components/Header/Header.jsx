import React, { useState } from 'react';
import { Container, Nav, Button } from 'react-bootstrap';

import vLogo from '../../assets/VFilms Logo.png';
  import menuIcon from '../../assets/menuIcon-open.svg'; 
  import closeIcon from '../../assets/menuIcon-close.svg'; 
  import mail from '../../assets/mail.svg';

import './Header.css'; 

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <Container fluid className="top-bar-container">
      
      <img src={vLogo} alt="Varnan Logo" className="top-bar-logo" />
      
      {isMenuOpen ? (
        
        <div className="open-menu-wrapper">
          <Nav className="align-items-center">
            <Nav.Link href="#services" className="nav-link-custom">Services</Nav.Link>
            <Nav.Link href="#stories" className="nav-link-custom">Their Stories</Nav.Link>
            <Nav.Link href="#our-story" className="nav-link-custom">Our Story</Nav.Link>
            <Nav.Link href="#varnan" className="nav-link-custom">Varnan</Nav.Link>
          </Nav>
          
          <Button variant="danger" href="#contact" className="lets-talk-btn mx-3">
            Let's Talk
            <img src={mail} alt="mail" className="mail-icon" />
          </Button>
          
          <Button onClick={toggleMenu} className="close-button">
            <img src={closeIcon} alt="Close" />
          </Button>
        </div>

      ) : (
        
        <Button onClick={toggleMenu} className="menu-button">
          <img src={menuIcon} alt="Menu" />
        </Button>

      )}
    </Container>
  );
}

export default Header;




















// // Apne sabhi assets import karo
// import vLogo from '../../assets/VFilms Logo.png'; // Logo from Screenshot 1
//   import menuIcon from '../../assets/menuIcon-open.svg'; // Hamburger icon from Screenshot 1
//   import closeIcon from '../../assets/menuIcon-close.svg'; // 'X' icon from Screenshot 2