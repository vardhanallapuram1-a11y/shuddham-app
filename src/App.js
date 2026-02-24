import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import SpecialHighlights from './components/SpecialHighlights';
import Gallery from './components/Gallery';
import Locations from './components/Locations';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <SpecialHighlights />
      <Gallery />
      <Locations />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
