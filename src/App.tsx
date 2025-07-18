import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import NursingCollege from './components/NursingCollege';
import PrincipalsMessage from './components/PrincipalsMessage';
import Donation from './components/Donation';
import Footer from './components/Footer';
import AdmissionPopup from './components/AdmissionPopup';
import AdminDashboard from './components/AdminDashboard';
import { ArrowUp } from 'lucide-react';
import EventCalendar from './components/EventCalendar';
import MapSection from './components/MapSection';

function App() {
  const [showAdmin, setShowAdmin] = useState(false);
  const [showBackToTop, setShowBackToTop] = React.useState(false);

  // Check if admin route is accessed
  useEffect(() => {
    const checkAdminRoute = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      
      console.log('Current path:', path);
      console.log('Current hash:', hash);
      
      if (path === '/admin' || hash === '#admin' || path.includes('/admin')) {
        console.log('Admin route detected, showing admin dashboard');
        setShowAdmin(true);
      } else {
        console.log('Regular route, showing main site');
        setShowAdmin(false);
      }
    };

    // Check on initial load
    checkAdminRoute();

    // Listen for hash changes
    const handleHashChange = () => {
      console.log('Hash changed');
      checkAdminRoute();
    };

    // Listen for popstate (back/forward button)
    const handlePopState = () => {
      console.log('Pop state changed');
      checkAdminRoute();
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Debug: Log current state
  console.log('showAdmin:', showAdmin);
  console.log('window.location:', window.location);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (showAdmin) {
    return <AdminDashboard />;
  }

  return (
    <div className="min-h-screen">
      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-[1000] p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:scale-110 transition-all duration-200 focus:outline-none"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
      <Header />
      <Hero />
      <About />
      <Services />
      <NursingCollege />
      <PrincipalsMessage />
      <EventCalendar />
      <Donation />
      <MapSection />
      <Footer />
      <AdmissionPopup />
    </div>
  );
}

export default App;