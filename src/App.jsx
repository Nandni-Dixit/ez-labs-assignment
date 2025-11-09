import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import TheirStories from './components/Stories/TheirStories.jsx';
import OurStories from './components/Stories/OurStories.jsx';
import Services from './components/Services/Services.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import ContactForm from './components/Contact/ContactForm.jsx';
import FilmProduction from './components/FilmProduction/FilmProduction.jsx'; 
import Branding from './components/Branding/Branding.jsx';
import ArtCuration from './components/ArtCuration/ArtCuration.jsx';
import './App.css';


function HomePage() {
  return (
    <>
      <Hero />
      <section id="stories">
        <TheirStories />
      </section>
      <section id="our-story">
        <OurStories />
        </section>
      <section id="services">
        <Services />
      </section>
      <section id="varnan">
        <Portfolio /> 
      </section>
      
      <section id="contact">
        <ContactForm />
      </section>
    </>
  );
}

function App() {
  return (
    <div className="app-container">
      
      <Header /> 
      
 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/film-production" element={<FilmProduction />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/art-curation" element={<ArtCuration />} />
      </Routes>
    </div>
  );
}

export default App;