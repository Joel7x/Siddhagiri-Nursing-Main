import React from 'react';
import { Users, Award, Heart, Shield, CheckCircle, TrendingUp, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { icon: Users, number: '10,000+', label: 'Patients Treated', color: 'from-blue-500 to-blue-600', bgColor: 'bg-blue-50' },
    { icon: Award, number: '25+', label: 'Years Experience', color: 'from-green-500 to-green-600', bgColor: 'bg-green-50' },
    { icon: Heart, number: '50+', label: 'Specialist Doctors', color: 'from-red-500 to-red-600', bgColor: 'bg-red-50' },
    { icon: Shield, number: '24/7', label: 'Emergency Care', color: 'from-purple-500 to-purple-600', bgColor: 'bg-purple-50' },
  ];

  const features = [
    {
      title: 'Advanced Medical Technology',
      description: 'State-of-the-art equipment and modern diagnostic facilities for accurate diagnosis and effective treatment.',
      image: 'https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Expert Medical Team',
      description: 'Highly qualified and experienced doctors, nurses, and medical staff dedicated to your health and recovery.',
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Users,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Comprehensive Care',
      description: 'From preventive care to complex surgeries, we provide complete healthcare solutions under one roof.',
      image: 'https://images.pexels.com/photos/8376298/pexels-photo-8376298.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: CheckCircle,
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const achievements = [
    'ISO 9001:2015 Certified Healthcare Facility',
    'NABH Accredited Hospital',
    'Award for Excellence in Patient Care 2023',
    'Best Healthcare Provider - Maharashtra 2022',
    'Green Hospital Initiative Certified'
  ];

  // Medical Quotes
  const medicalQuotes = [
    {
      quote: "The good physician treats the disease; the great physician treats the patient who has the disease.",
      author: "William Osler",
      specialty: "Father of Modern Medicine"
    },
    {
      quote: "Wherever the art of medicine is loved, there is also a love of humanity.",
      author: "Hippocrates",
      specialty: "Ancient Greek Physician"
    },
    {
      quote: "The best way to take care of the future is to take care of the present moment.",
      author: "Thich Nhat Hanh",
      specialty: "Mindful Healthcare"
    }
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
    <section id="about" className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-16.569-13.431-30-30-30v30h30z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Heart className="h-4 w-4 text-blue-600 mr-2" />
            <span className="text-blue-600 font-semibold">About Our Hospital</span>
          </motion.div>

          <motion.h2 
            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Excellence in Healthcare
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Established with a vision to provide world-class healthcare services, 
            Siddhagiri Hospital has been serving the community with dedication, 
            compassion, and medical excellence for over two decades.
          </motion.p>
        </motion.div>

        {/* Medical Quote Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='6'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            <div className="relative z-10 text-center text-white">
              <motion.div
                className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <Quote className="h-8 w-8 text-white" />
              </motion.div>
              
              <motion.blockquote 
                className="text-xl sm:text-2xl font-medium mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                "{medicalQuotes[0].quote}"
              </motion.blockquote>
              
              <motion.div
                className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3 inline-block"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="font-bold text-lg">- {medicalQuotes[0].author}</p>
                <p className="text-white/90 text-sm">{medicalQuotes[0].specialty}</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Stats */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div 
                key={index} 
                className={`${stat.bgColor} p-6 rounded-2xl text-center group hover:shadow-xl transition-all duration-300 border border-white/50`}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <motion.div 
                  className={`bg-gradient-to-br ${stat.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <IconComponent className="h-8 w-8 text-white" />
                </motion.div>
                <motion.h3 
                  className="text-3xl font-bold text-gray-900 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-gray-600 font-semibold">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enhanced Features Grid */}
        <motion.div 
          className="grid lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-white/50 group"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <motion.div
                  className={`absolute top-4 right-4 w-10 h-10 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <feature.icon className="h-5 w-5 text-white" />
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Medical Wisdom Quotes Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">Medical Wisdom</h3>
            <p className="text-gray-600">Inspiring words from healthcare pioneers</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {medicalQuotes.slice(1).map((quote, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/50 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -3 }}
              >
                {/* Quote Icon */}
                <motion.div 
                  className="absolute -top-4 left-6 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <Quote className="h-4 w-4 text-white" />
                </motion.div>
                
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-4 italic">
                  "{quote.quote}"
                </blockquote>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-bold text-gray-900">- {quote.author}</p>
                  <p className="text-blue-600 text-sm font-medium">{quote.specialty}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-16 shadow-lg border border-white/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Achievements</h3>
            <p className="text-gray-600">Recognition for our commitment to excellence</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium text-sm">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Mission Statement */}
        <motion.div 
          className="relative bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 rounded-3xl p-12 text-white overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Enhanced Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='6'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Heart className="h-4 w-4 mr-2" />
              <span className="font-semibold">Our Mission</span>
            </motion.div>
            
            <motion.h3 
              className="text-3xl sm:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Healing with Compassion
            </motion.h3>
            <motion.p 
              className="text-lg sm:text-xl leading-relaxed opacity-95"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              To provide accessible, affordable, and quality healthcare services to all sections of society. 
              We are committed to healing, caring, and improving the quality of life for our patients and 
              their families through compassionate medical care and innovative treatment approaches.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;