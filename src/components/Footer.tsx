import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'nursing-college', label: 'Nursing College' },
    { id: 'principals-message', label: "Principal's Message" }
  ];
  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' }
  ];
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-8 mt-16 dark:bg-gray-900 dark:border-gray-800">
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-6 px-4">
        {/* Brand with Heart+Cross+EKG Logo */}
        <span className="flex flex-row items-center gap-1 text-xl sm:text-2xl font-extrabold text-center">
          <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white shadow-md">
            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M44 8v10h10v8h-10v10h-8V26H26v-8h10V8h8z" stroke="#2196f3" strokeWidth="2.5" fill="none"/>
              <path d="M32 56s-14-10.36-14-20A10 10 0 0132 26a10 10 0 0114 10c0 9.64-14 20-14 20z" fill="url(#footerHeartGradient)"/>
              <defs>
                <linearGradient id="footerHeartGradient" x1="18" y1="26" x2="46" y2="56" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#f44336"/>
                  <stop offset="1" stop-color="#e53935"/>
                </linearGradient>
              </defs>
              <polyline points="22,40 28,36 32,44 36,32 42,40" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"/>
            </svg>
          </span>
          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">Siddhagiri Institute</span>
        </span>
        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-6">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-gray-500 hover:text-blue-600 dark:text-gray-300 dark:hover:text-cyan-400 transition-colors text-sm font-medium"
            >
              {link.label}
            </button>
          ))}
        </nav>
        {/* Social Icons */}
        <div className="flex space-x-4">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              className="p-2 rounded-full hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <social.icon className="h-5 w-5 text-gray-400 hover:text-blue-600 dark:text-gray-300 dark:hover:text-cyan-400 transition-colors" />
            </a>
          ))}
        </div>
        {/* Copyright */}
        <div className="text-xs text-gray-400 dark:text-gray-500 mt-2 text-center">
          &copy; {new Date().getFullYear()} Siddhagiri Institute. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;