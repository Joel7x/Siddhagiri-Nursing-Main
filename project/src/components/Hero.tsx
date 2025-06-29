import React from 'react';
import { Phone, MapPin, Clock, ArrowRight, Star, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
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
    <section id="home" className="pt-28 pb-16 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 min-h-screen flex items-center relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-blue-200 to-cyan-300 rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [0, -30, 0],
            y: [0, 20, 0]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl opacity-60 shadow-2xl"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-32 right-8 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-60 shadow-2xl"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Content */}
          <div className="space-y-8">
            <motion.div className="space-y-6" variants={itemVariants}>
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/50"
                whileHover={{ scale: 1.05 }}
              >
                <Star className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-sm font-semibold text-gray-700">Trusted Healthcare & Education Since 1999</span>
              </motion.div>

              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                variants={itemVariants}
              >
                <span className="text-gray-900">Your Health & Education,</span>
                <motion.span 
                  className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  Our Priority
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl font-light"
                variants={itemVariants}
              >
                Experience world-class healthcare and nursing education at Siddhagiri Institute. Our dedicated team provides comprehensive care and quality education with state-of-the-art facilities.
              </motion.p>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-4"
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
                onClick={scrollToContact}
                className="group bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.5)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Schedule Appointment</span>
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
              <motion.img
                src="/COLLEGEBUILDING.jpeg"
                alt="Siddhagiri Nursing Institute - College Building"
                className="w-full h-80 lg:h-96 object-cover rounded-3xl shadow-xl border-2 border-white/50"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
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
            
            {/* Enhanced Decorative elements */}
            <motion.div 
              className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-400 via-cyan-400 to-purple-500 rounded-full opacity-40 z-0 blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-cyan-400 via-purple-400 to-pink-500 rounded-full opacity-40 z-0 blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Floating Achievement Badges */}
            <motion.div
              className="absolute -right-8 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/50"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 }}
              whileHover={{ scale: 1.05, x: -5 }}
            >
              <div className="text-center">
                <div className="text-lg">🏆</div>
                <div className="text-xs font-bold text-gray-800">Excellence</div>
                <div className="text-xs text-gray-600">Award</div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -left-8 bottom-1/4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/50"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.2 }}
              whileHover={{ scale: 1.05, x: 5 }}
            >
              <div className="text-center">
                <div className="text-lg">📚</div>
                <div className="text-xs font-bold text-gray-800">Quality</div>
                <div className="text-xs text-gray-600">Education</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;