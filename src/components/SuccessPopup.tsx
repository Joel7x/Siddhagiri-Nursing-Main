import React, { useEffect } from 'react';
import { CheckCircle, X, Sparkles, Star, PartyPopper, Rocket, Heart, Trophy, GraduationCap, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SuccessPopupProps {
  isVisible: boolean;
  onClose: () => void;
  type: 'admission' | 'contact';
  title?: string;
  message?: string;
}

const SuccessPopup = ({ isVisible, onClose, type, title, message }: SuccessPopupProps) => {
  useEffect(() => {
    if (isVisible) {
      // Auto-close after 8 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  const getContent = () => {
    if (type === 'admission') {
      return {
        title: title || '🎉 Application Submitted Successfully!',
        message: message || 'Thank you for your interest in our nursing program! We will review your application and contact you within 48 hours with further details.',
        icon: GraduationCap,
        color: 'from-blue-600 via-purple-600 to-pink-600',
        bgColor: 'from-blue-50 to-purple-50',
        borderColor: 'border-blue-200',
        iconBg: 'from-blue-500 to-purple-600'
      };
    } else {
      return {
        title: title || '✨ Message Sent Successfully!',
        message: message || 'Thank you for reaching out to us! We will get back to you within 24 hours.',
        icon: MessageCircle,
        color: 'from-green-600 via-emerald-600 to-teal-600',
        bgColor: 'from-green-50 to-emerald-50',
        borderColor: 'border-green-200',
        iconBg: 'from-green-500 to-emerald-600'
      };
    }
  };

  const content = getContent();
  const IconComponent = content.icon;

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
            onClick={onClose}
          />

          {/* Success Card */}
          <motion.div
            className={`relative bg-white rounded-3xl shadow-2xl max-w-md w-full mx-4 overflow-hidden border-2 ${content.borderColor}`}
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
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="h-4 w-4 text-gray-600" />
            </motion.button>

            {/* Header with Gradient Background */}
            <div className={`relative bg-gradient-to-br ${content.color} p-6 text-white overflow-hidden`}>
              {/* Animated Background Pattern */}
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
                {/* Success Icon */}
                <motion.div
                  className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <CheckCircle className="h-8 w-8 text-white" />
                </motion.div>

                {/* Title */}
                <motion.h2 
                  className="text-xl font-bold mb-2"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {content.title}
                </motion.h2>
              </div>
            </div>

            {/* Content */}
            <div className={`p-6 bg-gradient-to-br ${content.bgColor}`}>
              {/* Message */}
              <motion.p 
                className="text-gray-700 leading-relaxed mb-6 text-center"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {content.message}
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                {/* Primary Action */}
                <motion.button
                  onClick={onClose}
                  className={`w-full bg-gradient-to-r ${content.color} text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group relative overflow-hidden`}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 15px 30px -8px rgba(0, 0, 0, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Animated Background */}
                  <motion.div
                    className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      x: ['-100%', '100%']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  <span className="relative z-10 flex items-center space-x-2">
                    <IconComponent className="h-4 w-4" />
                    <span>Continue</span>
                  </span>
                </motion.button>

                {/* Secondary Action */}
                <motion.button
                  onClick={() => {
                    onClose();
                    // Scroll to top of page
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full border-2 border-gray-200 text-gray-600 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Back to Home
                </motion.button>
              </motion.div>

              {/* Success Indicators */}
              <motion.div
                className="flex justify-center space-x-4 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                {[
                  { icon: PartyPopper, color: 'text-yellow-500' },
                  { icon: Rocket, color: 'text-blue-500' },
                  { icon: Heart, color: 'text-red-500' },
                  { icon: Trophy, color: 'text-green-500' }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      className={`${item.color} opacity-60`}
                      animate={{
                        y: [0, -5, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                        ease: "easeInOut"
                      }}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Floating Particles */}
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

export default SuccessPopup; 