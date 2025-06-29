import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Sparkles, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
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
    { id: 'contact', label: 'Contact', icon: '📞', color: 'from-cyan-500 to-blue-600' }
  ];

  // Custom Logo Component
  const InstituteLogoSVG = ({ className = "h-12 w-12" }) => (
    <svg viewBox="0 0 200 200" className={className}>
      {/* Outer Circle */}
      <circle 
        cx="100" 
        cy="100" 
        r="95" 
        fill="none" 
        stroke="url(#blueGradient)" 
        strokeWidth="8"
        className="drop-shadow-lg"
      />
      
      {/* Caring Hands */}
      <path 
        d="M45 120 Q45 100 65 100 Q75 95 85 100 L85 140 Q85 155 70 155 Q55 155 45 140 Z" 
        fill="url(#handGradient)"
        className="drop-shadow-md"
      />
      <path 
        d="M155 120 Q155 100 135 100 Q125 95 115 100 L115 140 Q115 155 130 155 Q145 155 155 140 Z" 
        fill="url(#handGradient)"
        className="drop-shadow-md"
      />
      
      {/* Medical Cross */}
      <rect 
        x="85" 
        y="60" 
        width="30" 
        height="80" 
        rx="8" 
        fill="url(#crossGradient)"
        className="drop-shadow-lg"
      />
      <rect 
        x="70" 
        y="75" 
        width="60" 
        height="30" 
        rx="8" 
        fill="url(#crossGradient)"
        className="drop-shadow-lg"
      />
      
      {/* Stethoscope */}
      <path 
        d="M110 75 Q125 75 125 90 Q125 105 110 105" 
        fill="none" 
        stroke="white" 
        strokeWidth="4" 
        strokeLinecap="round"
        className="drop-shadow-sm"
      />
      <circle 
        cx="125" 
        cy="90" 
        r="8" 
        fill="white"
        className="drop-shadow-sm"
      />
      <circle 
        cx="125" 
        cy="90" 
        r="4" 
        fill="url(#crossGradient)"
      />
      
      {/* Gradients */}
      <defs>
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        <linearGradient id="handGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E40AF" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>
        <linearGradient id="crossGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#84CC16" />
          <stop offset="100%" stopColor="#65A30D" />
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <>
      {/* Enhanced Top Bar with Ultra Attractive Social Icons */}
      <motion.div 
        className="bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-800 text-white py-3 text-sm relative overflow-hidden"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Enhanced Background Animation */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ['-200%', '200%'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-l from-transparent via-cyan-300/20 to-transparent"
            animate={{
              x: ['200%', '-200%'],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
              delay: 2
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium">Emergency: 7447665524</span>
              </motion.div>
              <motion.div 
                className="hidden md:flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@siddhagirinstitute.com</span>
              </motion.div>
            </div>
            
            {/* Ultra Enhanced Social Media Icons */}
            <div className="flex items-center space-x-6">
              {/* Facebook Icon - Ultra Enhanced */}
              <motion.a
                href="https://www.facebook.com/Siddhagiri%20Nursing%20Institute.KaneriMath"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className="relative w-10 h-10 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #1877f2 0%, #42a5f5 50%, #1565c0 100%)'
                  }}
                  whileHover={{ 
                    boxShadow: "0 0 30px rgba(24, 119, 242, 0.8), 0 0 60px rgba(24, 119, 242, 0.4)",
                    rotate: [0, -10, 10, -5, 5, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Multiple Animated Background Layers */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700"
                    animate={{
                      scale: [1, 1.3, 1],
                      rotate: [0, 180, 360],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600"
                    animate={{
                      scale: [1.2, 1, 1.2],
                      rotate: [360, 180, 0],
                      opacity: [0.4, 0.8, 0.4]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                  
                  {/* Facebook Icon */}
                  <motion.svg 
                    className="h-5 w-5 text-white relative z-20 drop-shadow-lg" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </motion.svg>

                  {/* Multiple Sparkle Effects */}
                  <motion.div
                    className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full shadow-lg"
                    animate={{
                      scale: [0, 1.5, 0],
                      opacity: [0, 1, 0],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.5
                    }}
                  />
                  <motion.div
                    className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-cyan-200 rounded-full shadow-lg"
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      rotate: [360, 180, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: 1
                    }}
                  />
                  <motion.div
                    className="absolute top-2 left-2 w-1 h-1 bg-yellow-200 rounded-full shadow-lg"
                    animate={{
                      scale: [0, 1.2, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      delay: 1.5
                    }}
                  />

                  {/* Floating Particles */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-3 h-3 bg-blue-300 rounded-full opacity-60"
                    animate={{
                      y: [-5, -15, -5],
                      x: [0, 5, 0],
                      scale: [0.5, 1, 0.5],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                {/* Enhanced Hover Tooltip */}
                <motion.div
                  className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white text-xs px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-2xl border border-blue-400"
                  initial={{ y: 10, opacity: 0, scale: 0.8 }}
                  whileHover={{ y: 0, opacity: 1, scale: 1 }}
                >
                  <div className="flex items-center space-x-2">
                    <motion.div
                      className="w-2 h-2 bg-white rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                    <span className="font-semibold">Follow us on Facebook</span>
                  </div>
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-700 rotate-45"></div>
                </motion.div>
              </motion.a>

              {/* Instagram Icon - Ultra Enhanced */}
              <motion.a
                href="https://www.instagram.com/Sni.kaneri.kop/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className="relative w-10 h-10 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden"
                  style={{
                    background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)'
                  }}
                  whileHover={{ 
                    boxShadow: "0 0 30px rgba(225, 48, 108, 0.8), 0 0 60px rgba(225, 48, 108, 0.4)",
                    rotate: [0, 10, -10, 5, -5, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Multiple Rotating Background Gradients */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'conic-gradient(from 0deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888, #f09433)'
                    }}
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'radial-gradient(circle at 30% 30%, #fdf497, #fdf497, #fd5949, #d6249f, #285AEB)'
                    }}
                    animate={{
                      scale: [1.1, 1, 1.1],
                      rotate: [360, 0],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Instagram Icon */}
                  <motion.svg 
                    className="h-5 w-5 text-white relative z-20 drop-shadow-lg" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </motion.svg>

                  {/* Enhanced Multiple Sparkle Effects */}
                  <motion.div
                    className="absolute top-0.5 right-0.5 w-2 h-2 bg-yellow-300 rounded-full shadow-lg"
                    animate={{
                      scale: [0, 1.8, 0],
                      opacity: [0, 1, 0],
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: 0.3
                    }}
                  />
                  <motion.div
                    className="absolute bottom-0.5 left-0.5 w-1.5 h-1.5 bg-pink-200 rounded-full shadow-lg"
                    animate={{
                      scale: [0, 1.5, 0],
                      opacity: [0, 1, 0],
                      rotate: [360, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.8
                    }}
                  />
                  <motion.div
                    className="absolute top-1.5 left-1.5 w-1 h-1 bg-white rounded-full shadow-lg"
                    animate={{
                      scale: [0, 2, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      delay: 1.2
                    }}
                  />
                  <motion.div
                    className="absolute bottom-1.5 right-1.5 w-1 h-1 bg-orange-200 rounded-full shadow-lg"
                    animate={{
                      scale: [0, 1.3, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      delay: 0.6
                    }}
                  />

                  {/* Floating Hearts */}
                  <motion.div
                    className="absolute -top-3 -left-2 text-pink-300 opacity-70"
                    animate={{
                      y: [-3, -12, -3],
                      x: [-2, 2, -2],
                      rotate: [0, 20, 0],
                      scale: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    ❤️
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-3 -right-2 text-yellow-300 opacity-70"
                    animate={{
                      y: [3, 12, 3],
                      x: [2, -2, 2],
                      rotate: [0, -20, 0],
                      scale: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    ✨
                  </motion.div>
                </motion.div>

                {/* Enhanced Hover Tooltip */}
                <motion.div
                  className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white text-xs px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-2xl border border-pink-400"
                  initial={{ y: 10, opacity: 0, scale: 0.8 }}
                  whileHover={{ y: 0, opacity: 1, scale: 1 }}
                >
                  <div className="flex items-center space-x-2">
                    <motion.div
                      className="w-2 h-2 bg-white rounded-full"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        backgroundColor: ['#ffffff', '#ff69b4', '#ffffff']
                      }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                    <span className="font-semibold">Follow us on Instagram</span>
                  </div>
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-pink-500 rotate-45"></div>
                </motion.div>
              </motion.a>

              {/* Enhanced "Follow Us" Text with Pulse Animation */}
              <motion.div
                className="hidden lg:block text-sm text-white/90 font-bold relative"
                animate={{
                  opacity: [0.7, 1, 0.7],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.span
                  className="relative z-10"
                  animate={{
                    textShadow: [
                      '0 0 5px rgba(255,255,255,0.5)',
                      '0 0 10px rgba(255,255,255,0.8)',
                      '0 0 5px rgba(255,255,255,0.5)'
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Follow Us
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded"
                  animate={{
                    x: ['-100%', '100%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Enhanced Logo with Perfect Alignment */}
            <motion.div 
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div 
                className="relative"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >
                {/* Custom Institute Logo */}
                <motion.div
                  className="relative"
                  whileHover={{ 
                    scale: 1.1,
                    filter: "drop-shadow(0 10px 20px rgba(59, 130, 246, 0.3))"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <InstituteLogoSVG className="h-14 w-14" />
                  
                  {/* Animated Ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-blue-400 opacity-0"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0, 0.6, 0],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Pulse Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-blue-400 opacity-0"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0, 0.2, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                </motion.div>
                
                {/* Status Indicator */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse border-2 border-white shadow-lg"></div>
              </motion.div>
              
              {/* Perfectly Aligned Text */}
              <div className="flex flex-col justify-center">
                <motion.h1 
                  className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent leading-tight"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  Siddhagiri Institute
                </motion.h1>
                <motion.p 
                  className="text-xs text-gray-500 font-medium tracking-wide leading-tight mt-0.5"
                  animate={{
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Excellence in Healthcare & Education
                </motion.p>
              </div>
            </motion.div>

            {/* Ultra Enhanced Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="group relative px-4 py-3 text-gray-700 hover:text-white transition-all duration-500 font-semibold rounded-2xl overflow-hidden"
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
                    className="absolute bottom-0 left-1/2 w-0 h-1 bg-white rounded-full group-hover:w-3/4 transition-all duration-500"
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
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 rounded-xl hover:bg-blue-50"
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Enhanced Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 rounded-b-2xl shadow-2xl"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-4 pt-4 pb-6 space-y-3">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="group block w-full text-left px-4 py-4 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 font-semibold rounded-2xl relative overflow-hidden"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5, scale: 1.02 }}
                    >
                      <div className="flex items-center space-x-3 relative z-10">
                        <motion.span 
                          className="text-xl"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                        >
                          {item.icon}
                        </motion.span>
                        <span>{item.label}</span>
                      </div>
                      
                      {/* Hover Background */}
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}
                      />
                    </motion.button>
                  ))}
                  
                  {/* Mobile Enhanced Social Links */}
                  <div className="flex items-center justify-center space-x-6 pt-6 border-t border-gray-100">
                    <motion.a
                      href="https://www.facebook.com/Siddhagiri%20Nursing%20Institute.KaneriMath"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-12 h-12 rounded-2xl shadow-xl flex items-center justify-center overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, #1877f2 0%, #42a5f5 50%, #1565c0 100%)'
                      }}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-700"
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 180, 360]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <svg className="h-6 w-6 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </motion.a>
                    <motion.a
                      href="https://www.instagram.com/Sni.kaneri.kop/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-12 h-12 rounded-2xl shadow-xl flex items-center justify-center overflow-hidden"
                      style={{
                        background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)'
                      }}
                      whileHover={{ scale: 1.2, rotate: -10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <motion.div
                        className="absolute inset-0"
                        style={{
                          background: 'conic-gradient(from 0deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888, #f09433)'
                        }}
                        animate={{
                          rotate: [0, 360]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      <svg className="h-6 w-6 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
};

export default Header;