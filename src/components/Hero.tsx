import React from 'react';
import { Phone, MapPin, Clock, ArrowRight, Star, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToAdmissionForm = () => {
    const element = document.getElementById('admission-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="pt-28 pb-16 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 min-h-screen flex flex-col items-center relative overflow-hidden">
      {/* Simple Clean Background (no animated/blurred circles) */}
      {/* Remove the animated/blurred gradient circles and floating elements */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Content */}
          <div className="space-y-8">
            {/* Modern Mission Statement */}
            <div className="relative flex flex-col items-center justify-center mb-12">
              {/* Decorative Background Elements */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-80 h-24 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 blur-3xl opacity-20 rounded-full animate-pulse"></div>
                <div className="absolute w-60 h-16 bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 blur-2xl opacity-15 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Decorative Icon */}
                <motion.div 
                  className="mb-6 w-16 h-16 bg-gradient-to-br from-blue-500 via-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <span className="text-2xl">🏥</span>
                </motion.div>
                
                {/* Main Headline */}
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 break-words">
                  <span className="text-gray-800 drop-shadow-lg">Your Health &</span>
                  <br />
                  <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x drop-shadow-lg">Education,</span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent animate-gradient-x drop-shadow-lg">Our Priority</span>
                </h1>
                
                {/* Animated Decorative Line */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-8 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full animate-pulse"></div>
                  <motion.div 
                    className="w-3 h-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  ></motion.div>
                  <div className="w-8 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
                
                {/* Subtitle */}
                <p className="text-base sm:text-xl md:text-2xl text-gray-600 font-medium max-w-2xl leading-relaxed">
                  Empowering lives through 
                  <span className="text-blue-600 font-semibold mx-2">exceptional care</span> 
                  and 
                  <span className="text-purple-600 font-semibold mx-2">quality education</span>
                </p>
              </div>
            </div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              variants={itemVariants}
            >
              {[
                { icon: Users, number: '10K+', label: 'Patients', color: 'from-blue-500 to-cyan-600' },
                { icon: Award, number: '25+', label: 'Years', color: 'from-green-500 to-emerald-600' },
                { icon: Star, number: '4.9', label: 'Rating', color: 'from-yellow-500 to-orange-600' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`w-12 h-12 mx-auto mb-2 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Quick Info Cards */}
            <motion.div 
              className="grid sm:grid-cols-3 gap-4"
              variants={itemVariants}
            >
              {[
                { icon: Phone, title: '24/7 Emergency', subtitle: '7447665524', color: 'from-red-500 to-pink-600' },
                { icon: MapPin, title: 'Location', subtitle: 'Siddhagiri, Kolhapur', color: 'from-cyan-500 to-blue-600' },
                { icon: Clock, title: 'Always Open', subtitle: 'Round the Clock', color: 'from-green-500 to-emerald-600' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/90 backdrop-blur-lg p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 group"
                  whileHover={{ 
                    scale: 1.02,
                    y: -5
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <div className="flex items-center space-x-3">
                    <motion.div 
                      className={`bg-gradient-to-br ${item.color} p-3 rounded-xl shadow-lg`}
                      whileHover={{ rotate: 5, scale: 1.05 }}
                    >
                      <item.icon className="h-5 w-5 text-white" />
                    </motion.div>
                    <div>
                      <p className="text-xs text-gray-600 font-medium">{item.title}</p>
                      <p className="font-bold text-gray-900 text-sm">{item.subtitle}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.button
                onClick={scrollToAdmissionForm}
                className="group bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.5)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Apply Now</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
              <motion.button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="group border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm bg-white/50"
                whileHover={{ 
                  scale: 1.02
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Learn More</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          </div>

          {/* Enhanced Image Section with College Building */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <motion.div 
              className="relative z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 rounded-3xl opacity-20 blur-xl"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              {/* Beautiful Border Container */}
              <div className="relative p-2">
                {/* Outer Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-3xl opacity-30 blur-sm animate-pulse"></div>
                
                {/* Middle Border Layer */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 rounded-3xl opacity-60"></div>
                
                {/* Inner Border with Pattern */}
                <div className="relative bg-gradient-to-r from-blue-300 via-cyan-300 to-purple-300 p-1 rounded-3xl">
                  {/* Animated Border Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-3xl animate-pulse"></div>
                  
                  {/* Main Image */}
                  <motion.img
                    src="/COLLEGEBUILDING.jpeg"
                    alt="Siddhagiri Nursing Institute - College Building"
                    className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl relative z-10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                  
                  {/* Corner Decorations */}
                  <div className="absolute top-2 left-2 w-4 h-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-80 animate-pulse"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full opacity-80 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-80 animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 bg-gradient-to-br from-pink-500 to-blue-500 rounded-full opacity-80 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent rounded-3xl"></div>
              
              {/* Institute Name Overlay */}
              <motion.div
                className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-white/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-sm font-bold text-gray-800">🏥 Siddhagiri Nursing Institute</p>
                    <p className="text-xs text-gray-600">Healthcare & Education Excellence</p>
                  </div>
                </div>
              </motion.div>
              
              {/* 24/7 Emergency Badge */}
              <motion.div
                className="absolute top-6 right-6 bg-red-600/95 backdrop-blur-sm p-3 rounded-2xl shadow-xl border border-red-400/50"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 }}
                whileHover={{ scale: 1.05, rotate: 3 }}
              >
                <div className="text-center text-white">
                  <div className="text-lg font-bold">24/7</div>
                  <div className="text-xs font-medium">Emergency</div>
                </div>
              </motion.div>

              {/* Nursing College Badge */}
              <motion.div
                className="absolute top-6 left-6 bg-blue-600/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg border border-blue-400/50"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-2 text-white">
                  <span className="text-sm">🎓</span>
                  <span className="text-xs font-semibold">Nursing College</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;