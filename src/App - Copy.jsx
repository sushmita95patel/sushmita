import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Navbar, Hero, Tech, Education, Work, StarsCanvas } from './components'; 

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Education />
        <Tech />
        <Work />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
