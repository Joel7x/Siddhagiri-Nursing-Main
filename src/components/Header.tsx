import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Sparkles, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const getCurrentDate = () => {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const getFormattedDate = () => {
  const d = new Date();
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};

const DateClockBadge = () => {
  const [time, setTime] = React.useState(() => {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour12: true });
  });
  const [date] = React.useState(getFormattedDate());

  React.useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: true }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center sm:ml-2 ml-4 min-w-[110px]">
      <span className="text-xs font-semibold">{date}</span>
      <span className="text-base sm:text-lg text-blue-700 font-mono font-bold mt-0.5 leading-tight">{time}</span>
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navItems.map(item => item.id);
    const handleScrollSpy = () => {
      let found = false;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120) { // header height offset
            setActiveSection(sectionIds[i]);
            found = true;
            break;
          }
        }
      }
      if (!found) setActiveSection('home');
    };
    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠', color: 'from-blue-500 to-cyan-600' },
    { id: 'about', label: 'About', icon: '🏥', color: 'from-green-500 to-emerald-600' },
    { id: 'services', label: 'Services', icon: '⚕️', color: 'from-purple-500 to-pink-600' },
    { id: 'nursing-college', label: 'Nursing College', icon: '🎓', color: 'from-orange-500 to-red-600' },
    { id: 'principals-message', label: "Principal's Message", icon: '👩‍🎓', color: 'from-indigo-500 to-purple-600' },
  ];
  const dateTab = { id: 'date-badge', label: getCurrentDate(), isBadge: true };

  const handleAdminClick = () => {
    window.location.hash = '#admin';
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-[999]">
        <div
          className="h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 transition-all duration-200"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      {/* Main Header */}
      <motion.header 
        className={`fixed top-12 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-100' 
            : 'bg-white/90 backdrop-blur-lg shadow-xl'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Institute Name */}
            <motion.div 
              className="flex flex-row items-center gap-1 py-2 px-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* Heart + Cross + EKG Logo */}
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md">
                <svg width="38" height="38" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M44 8v10h10v8h-10v10h-8V26H26v-8h10V8h8z" stroke="#2196f3" strokeWidth="2.5" fill="none"/>
                  <path d="M32 56s-14-10.36-14-20A10 10 0 0132 26a10 10 0 0114 10c0 9.64-14 20-14 20z" fill="url(#heartGradient)"/>
                  <defs>
                    <linearGradient id="heartGradient" x1="18" y1="26" x2="46" y2="56" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#f44336"/>
                      <stop offset="1" stop-color="#e53935"/>
                    </linearGradient>
                  </defs>
                  <polyline points="22,40 28,36 32,44 36,32 42,40" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"/>
                </svg>
              </span>
              <span className="text-lg sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent leading-snug text-center">
                Siddhagiri Institute
              </span>
            </motion.div>

            {/* Ultra Enhanced Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {[...navItems].map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group relative px-4 py-3 transition-all duration-500 font-semibold rounded-2xl overflow-hidden
                    ${activeSection === item.id ? 'text-blue-600 font-extrabold underline underline-offset-8 shadow-lg bg-blue-50' : 'text-gray-700 hover:text-white'}`}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Animated Background */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl`}
                    initial={{ scale: 0, rotate: 180 }}
                    whileHover={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Sparkle Effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <Sparkles className="absolute top-1 right-1 h-3 w-3 text-white/80" />
                    <Star className="absolute bottom-1 left-1 h-2 w-2 text-white/60" />
                  </motion.div>

                  {/* Icon and Text */}
                  <div className="relative z-10 flex items-center space-x-2">
                    <motion.span 
                      className="text-lg"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.icon}
                    </motion.span>
                    <span className="text-sm font-bold">{item.label}</span>
                  </div>

                  {/* Animated Underline */}
                  <motion.div 
                    className={`absolute bottom-0 left-1/2 h-1 bg-white rounded-full group-hover:w-3/4 transition-all duration-500 ${activeSection === item.id ? 'w-3/4' : 'w-0'}`}
                    style={{ x: '-50%' }}
                  />

                  {/* Floating Particles */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-2 h-2 bg-white/60 rounded-full opacity-0 group-hover:opacity-100"
                    animate={{
                      y: [-5, -15, -5],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.button>
              ))}
              
              {/* Admin Button */}
              <motion.button
                onClick={handleAdminClick}
                className="group relative px-4 py-3 text-gray-700 hover:text-white transition-all duration-500 font-semibold rounded-2xl overflow-hidden ml-4 border-2 border-red-300 hover:border-red-500"
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  boxShadow: "0 10px 30px -10px rgba(239, 68, 68, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                {/* Animated Background */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-600 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"
                  initial={{ scale: 0, rotate: 180 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Icon and Text */}
                <div className="relative z-10 flex items-center space-x-2">
                  <motion.span 
                    className="text-lg"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    🔐
                  </motion.span>
                  <span className="text-sm font-bold">Admin</span>
                </div>
              </motion.button>
              <DateClockBadge />
            </nav>

            {/* Mobile Hamburger Menu */}
            <div className="lg:hidden flex items-center">
              <button
                className="p-2 rounded-full bg-white shadow-md border border-gray-200 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Open menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Drawer */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 left-0 w-full h-full z-[9999] bg-white/95 backdrop-blur-xl shadow-2xl flex flex-col items-center pt-24 px-6"
              >
                <nav className="flex flex-col space-y-6 w-full max-w-xs mx-auto">
                  {navItems.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-lg font-semibold py-3 rounded-xl transition-all duration-200 ${activeSection === item.id ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'}`}
                    >
                      {item.icon} <span className="ml-2">{item.label}</span>
                    </button>
                  ))}
                  <button
                    onClick={handleAdminClick}
                    className="w-full text-lg font-semibold py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
                  >
                    Admin Login
                  </button>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
};

export default Header;