import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import NursingCollege from './components/NursingCollege';
import PrincipalsMessage from './components/PrincipalsMessage';
import Contact from './components/Contact';
import Donation from './components/Donation';
import Footer from './components/Footer';
import AdmissionPopup from './components/AdmissionPopup';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <NursingCollege />
      <PrincipalsMessage />
      <Contact />
      <Donation />
      <Footer />
      <AdmissionPopup />
    </div>
  );
}

export default App;