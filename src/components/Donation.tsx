import React from 'react';
import { Heart, Users, Gift, ArrowRight, Star, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Donation = () => {
  const handleDonateClick = () => {
    window.open('https://childhelpfoundation.in/donate/', '_blank', 'noopener,noreferrer');
  };

  const impactStats = [
    { number: '10,000+', label: 'Children Helped', icon: Users },
    { number: '500+', label: 'Families Supported', icon: Heart },
    { number: '50+', label: 'Communities Reached', icon: Star }
  ];

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

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23EC4899' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Hearts */}
      <motion.div
        className="absolute top-20 left-10 text-pink-300 opacity-60"
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Heart className="h-8 w-8" />
      </motion.div>
      <motion.div
        className="absolute top-32 right-16 text-purple-300 opacity-60"
        animate={{
          y: [10, -10, 10],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Gift className="h-6 w-6" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-pink-100 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Heart className="h-4 w-4 text-pink-600 mr-2" />
              <span className="text-pink-600 font-semibold">Make a Difference</span>
            </motion.div>

            <motion.h2 
              className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Support Child Help Foundation
            </motion.h2>
            
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Join us in making a meaningful impact in children's lives. Your donation helps provide 
              education, healthcare, and hope to underprivileged children across communities.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <motion.div 
              className="space-y-8"
              variants={itemVariants}
            >
              {/* Impact Stats */}
              <div className="grid grid-cols-3 gap-4">
                {impactStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white/50"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -3 }}
                  >
                    <div className="bg-gradient-to-br from-pink-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Mission Statement */}
              <motion.div 
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/50"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-3 rounded-xl shadow-lg flex-shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Child Help Foundation is dedicated to ensuring every child has access to quality education, 
                      healthcare, and a safe environment to grow and thrive. We believe every child deserves 
                      a chance at a brighter future.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* How Your Donation Helps */}
              <motion.div 
                className="space-y-4"
                variants={itemVariants}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">How Your Donation Helps</h3>
                <div className="space-y-3">
                  {[
                    { amount: '₹500', impact: 'Provides school supplies for one child for a month' },
                    { amount: '₹1,000', impact: 'Covers medical checkup and basic healthcare for a child' },
                    { amount: '₹2,500', impact: 'Sponsors nutritious meals for a child for one month' },
                    { amount: '₹5,000', impact: 'Funds educational support for a child for one term' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl border border-pink-100"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-lg font-bold text-sm">
                        {item.amount}
                      </div>
                      <p className="text-gray-700 font-medium">{item.impact}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Donation Card */}
            <motion.div 
              className="relative"
              variants={itemVariants}
            >
              <motion.div 
                className="bg-gradient-to-br from-pink-500 via-purple-600 to-blue-600 p-8 rounded-3xl shadow-2xl text-white relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
                  }} />
                </div>

                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <motion.div
                      className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <Heart className="h-10 w-10 text-white" />
                    </motion.div>
                    <h3 className="text-3xl font-bold mb-3">Make a Donation</h3>
                    <p className="text-white/90 text-lg">
                      Every contribution, no matter the size, makes a real difference in a child's life.
                    </p>
                  </div>

                  {/* Donation Amounts */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {['₹500', '₹1,000', '₹2,500', '₹5,000'].map((amount, index) => (
                      <motion.button
                        key={index}
                        className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleDonateClick}
                      >
                        {amount}
                      </motion.button>
                    ))}
                  </div>

                  {/* Main Donate Button */}
                  <motion.button
                    onClick={handleDonateClick}
                    className="w-full bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 group"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 20px 40px -12px rgba(255, 255, 255, 0.5)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Gift className="h-6 w-6" />
                    <span>Donate Now</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>

                  {/* Trust Indicators */}
                  <div className="mt-6 text-center">
                    <div className="flex items-center justify-center space-x-4 text-white/80 text-sm">
                      <div className="flex items-center space-x-1">
                        <Shield className="h-4 w-4" />
                        <span>Secure</span>
                      </div>
                      <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span>Trusted</span>
                      </div>
                      <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4" />
                        <span>Verified</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/20 rounded-full"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.8, 0.5, 0.8],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Message */}
          <motion.div 
            className="text-center mt-16"
            variants={itemVariants}
          >
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/50 max-w-4xl mx-auto">
              <motion.p 
                className="text-lg text-gray-700 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="font-semibold text-purple-600">"The best way to find yourself is to lose yourself in the service of others."</span>
                <br />
                <span className="text-gray-600 italic">- Mahatma Gandhi</span>
              </motion.p>
              <motion.p 
                className="text-gray-600 mt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Thank you for considering a donation to Child Help Foundation. Together, we can create a brighter future for children in need.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Donation;