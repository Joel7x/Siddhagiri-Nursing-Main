import React, { useState, useEffect } from 'react';
import { X, GraduationCap, Calendar, Star, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AdmissionPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after 2 seconds when website loads
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleApplyNow = () => {
    // Scroll to nursing college section (admission form)
    const element = document.getElementById('nursing-college');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsVisible(false);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Compact Popup Content */}
          <motion.div
            className="relative bg-white rounded-2xl shadow-2xl max-w-sm w-full mx-4 overflow-hidden"
            initial={{ scale: 0.5, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.5, opacity: 0, y: 50 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 25,
              duration: 0.6 
            }}
          >
            {/* Close Button */}
            <motion.button
              onClick={handleClose}
              className="absolute top-3 right-3 z-10 w-7 h-7 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="h-3 w-3 text-gray-600" />
            </motion.button>

            {/* Compact Header */}
            <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-5 text-white overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <motion.div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                  animate={{
                    backgroundPosition: ['0px 0px', '40px 40px'],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute top-2 left-2 text-white/30"
                animate={{
                  y: [-3, 3, -3],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="h-4 w-4" />
              </motion.div>
              <motion.div
                className="absolute bottom-2 right-2 text-white/30"
                animate={{
                  y: [3, -3, 3],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Star className="h-3 w-3" />
              </motion.div>

              <div className="relative z-10 text-center">
                {/* Compact Icon */}
                <motion.div
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 3, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <GraduationCap className="h-6 w-6 text-white" />
                </motion.div>

                {/* Compact Text */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <motion.h2 
                    className="text-lg font-bold mb-1"
                    animate={{
                      textShadow: [
                        '0 0 8px rgba(255,255,255,0.5)',
                        '0 0 15px rgba(255,255,255,0.8)',
                        '0 0 8px rgba(255,255,255,0.5)'
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    🎉 Admissions Open!
                  </motion.h2>
                  <p className="text-white/90 text-sm font-semibold">
                    Siddhagiri Nursing Institute
                  </p>
                  <p className="text-white/80 text-xs">
                    Academic Year 2024-25
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Compact Content */}
            <div className="p-4">
              {/* Compact Deadline Badge */}
              <motion.div
                className="bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 rounded-xl p-3 mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <div className="flex items-center space-x-2">
                  <motion.div
                    className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg"
                    animate={{
                      rotate: [0, 8, -8, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Calendar className="h-4 w-4 text-white" />
                  </motion.div>
                  <div>
                    <p className="font-bold text-green-800 text-xs">Application Deadline</p>
                    <p className="text-green-700 text-xs">June 30, 2024</p>
                  </div>
                </div>
              </motion.div>

              {/* Compact Features */}
              <motion.div
                className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-xl p-3 mb-4"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="grid grid-cols-2 gap-2 text-center">
                  {[
                    { icon: '🎓', text: 'Quality Education' },
                    { icon: '🏥', text: 'Clinical Training' },
                    { icon: '💰', text: 'Affordable Fees' },
                    { icon: '🏠', text: 'Hostel Facility' }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col items-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.05, duration: 0.3 }}
                    >
                      <motion.div
                        className="text-lg mb-1"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3
                        }}
                      >
                        {feature.icon}
                      </motion.div>
                      <p className="text-xs font-medium text-gray-700">{feature.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Compact Action Buttons */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                {/* Apply Now Button */}
                <motion.button
                  onClick={handleApplyNow}
                  className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-4 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 15px 30px -8px rgba(59, 130, 246, 0.5)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Animated Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      x: ['-100%', '100%']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Sparkle Effects */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  >
                    <Sparkles className="absolute top-1 right-2 h-3 w-3 text-white/80" />
                    <Star className="absolute bottom-1 left-2 h-2 w-2 text-white/60" />
                  </motion.div>

                  <span className="relative z-10 flex items-center space-x-2">
                    <GraduationCap className="h-4 w-4" />
                    <span className="text-sm">Apply Now</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </motion.button>

                {/* Learn More Button */}
                <motion.button
                  onClick={handleClose}
                  className="w-full border border-gray-200 text-gray-600 px-4 py-2 rounded-xl font-medium hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More Later
                </motion.button>
              </motion.div>

              {/* Compact Limited Seats Notice */}
              <motion.div
                className="mt-3 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <motion.p 
                  className="text-xs text-red-600 font-semibold bg-red-50 border border-red-200 rounded-lg px-2 py-1"
                  animate={{
                    scale: [1, 1.01, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ⚡ Limited Seats - Apply Early!
                </motion.p>
              </motion.div>
            </div>

            {/* Compact Floating Particles */}
            <motion.div
              className="absolute -top-1 -left-1 w-3 h-3 bg-blue-400 rounded-full opacity-60"
              animate={{
                y: [-5, 5, -5],
                x: [-2, 2, -2],
                scale: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-1 -right-1 w-2 h-2 bg-pink-400 rounded-full opacity-60"
              animate={{
                y: [5, -5, 5],
                x: [2, -2, 2],
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AdmissionPopup;