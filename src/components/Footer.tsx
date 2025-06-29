import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:bg-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:bg-sky-500' },
    { icon: Instagram, href: '#', color: 'hover:bg-pink-600' },
    { icon: Linkedin, href: '#', color: 'hover:bg-blue-700' }
  ];

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'nursing-college', label: 'Nursing College' },
    { id: 'principals-message', label: "Principal's Message" },
    { id: 'contact', label: 'Contact' }
  ];

  const services = [
    'Emergency Care',
    'Cardiology',
    'Neurology',
    'Pediatrics',
    'Orthopedics',
    'General Medicine'
  ];

  // Medical Quote for Footer
  const footerQuote = {
    quote: "The best way to find yourself is to lose yourself in the service of others.",
    author: "Mahatma Gandhi",
    specialty: "Humanitarian Leader"
  };

  // Custom Logo Component for Footer
  const InstituteLogoSVG = ({ className = "h-8 w-8" }) => (
    <svg viewBox="0 0 200 200" className={className}>
      {/* Outer Circle */}
      <circle 
        cx="100" 
        cy="100" 
        r="95" 
        fill="none" 
        stroke="url(#blueGradientFooter)" 
        strokeWidth="8"
        className="drop-shadow-lg"
      />
      
      {/* Caring Hands */}
      <path 
        d="M45 120 Q45 100 65 100 Q75 95 85 100 L85 140 Q85 155 70 155 Q55 155 45 140 Z" 
        fill="url(#handGradientFooter)"
        className="drop-shadow-md"
      />
      <path 
        d="M155 120 Q155 100 135 100 Q125 95 115 100 L115 140 Q115 155 130 155 Q145 155 155 140 Z" 
        fill="url(#handGradientFooter)"
        className="drop-shadow-md"
      />
      
      {/* Medical Cross */}
      <rect 
        x="85" 
        y="60" 
        width="30" 
        height="80" 
        rx="8" 
        fill="url(#crossGradientFooter)"
        className="drop-shadow-lg"
      />
      <rect 
        x="70" 
        y="75" 
        width="60" 
        height="30" 
        rx="8" 
        fill="url(#crossGradientFooter)"
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
        fill="url(#crossGradientFooter)"
      />
      
      {/* Gradients */}
      <defs>
        <linearGradient id="blueGradientFooter" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="50%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#A78BFA" />
        </linearGradient>
        <linearGradient id="handGradientFooter" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id="crossGradientFooter" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#84CC16" />
          <stop offset="100%" stopColor="#65A30D" />
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Inspirational Quote Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <motion.div
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4"
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <Quote className="h-6 w-6 text-white" />
            </motion.div>
            
            <motion.blockquote 
              className="text-lg sm:text-xl font-medium mb-4 leading-relaxed text-white/95"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              "{footerQuote.quote}"
            </motion.blockquote>
            
            <motion.div
              className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 inline-block"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="font-bold text-white">- {footerQuote.author}</p>
              <p className="text-white/80 text-sm">{footerQuote.specialty}</p>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Institute Info */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <InstituteLogoSVG className="h-12 w-12" />
                
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
              </motion.div>
              <div>
                <span className="text-2xl font-bold">Siddhagiri Institute</span>
                <p className="text-sm text-gray-300">Excellence in Healthcare & Education</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Providing compassionate healthcare services and quality nursing education with state-of-the-art facilities 
              and experienced professionals for over 25 years.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`bg-gray-800 p-3 rounded-xl ${social.color} transition-all duration-300 cursor-pointer shadow-lg`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={link.id}>
                  <motion.button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3 text-gray-300">
              {services.map((service, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  className="hover:text-white transition-colors duration-200"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <motion.div 
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
              >
                <MapPin className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Siddhagiri Math, Kaneri Math</p>
                  <p>Kolhapur, Maharashtra 416234</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
              >
                <Phone className="h-6 w-6 text-blue-400 flex-shrink-0" />
                <div className="text-gray-300">
                  <p className="font-semibold">7447665524</p>
                  <p>+91 98765 43210</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
              >
                <Mail className="h-6 w-6 text-blue-400 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>info@siddhagirinstitute.com</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-700 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400">
            © 2024 Siddhagiri Institute. All rights reserved. | 
            <span className="hover:text-white cursor-pointer transition-colors duration-200"> Privacy Policy</span> | 
            <span className="hover:text-white cursor-pointer transition-colors duration-200"> Terms of Service</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;