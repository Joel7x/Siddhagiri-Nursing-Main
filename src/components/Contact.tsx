import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Calendar, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      department: '',
      message: ''
    });
    alert('Thank you for your message. We will contact you soon!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['7447665524', '+91 98765 43210'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@siddhagirishospital.com', 'emergency@siddhagirishospital.com'],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Siddhagiri Math, Kaneri Math', 'Kolhapur, Maharashtra 416234'],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['24/7 Emergency Services', 'OPD: 8:00 AM - 8:00 PM'],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const departments = [
    'General Medicine',
    'Cardiology',
    'Neurology',
    'Pediatrics',
    'Orthopedics',
    'Ophthalmology',
    'Emergency Care',
    'Other'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Contact Us
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Get in touch with us for appointments, inquiries, or emergency services. 
            We're here to help you with all your healthcare needs.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <MessageCircle className="h-8 w-8 mr-3 text-blue-600" />
                Get In Touch
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.div
                      key={index}
                      className={`${info.bgColor} p-6 rounded-2xl hover:shadow-lg transition-all duration-300 border border-white/50`}
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)"
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-4 shadow-lg`}>
                        <IconComponent className="h-7 w-7 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-3 text-lg">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-700 font-medium">{detail}</p>
                      ))}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Emergency Contact */}
            <motion.div 
              className="bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200 p-8 rounded-2xl shadow-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
                <Phone className="h-6 w-6 mr-3" />
                Emergency Contact
              </h4>
              <p className="text-red-700 mb-3 text-lg">For immediate medical emergencies, call:</p>
              <motion.p 
                className="text-3xl font-bold text-red-800 mb-3"
                whileHover={{ scale: 1.05 }}
              >
                7447665524
              </motion.p>
              <p className="text-red-600 font-medium">Available 24/7 for emergency services</p>
            </motion.div>

            {/* Custom Map Image */}
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              variants={itemVariants}
            >
              <h4 className="font-bold text-gray-900 mb-4 text-xl flex items-center">
                <MapPin className="h-6 w-6 mr-2 text-blue-600" />
                Our Location
              </h4>
              <div className="mb-4">
                <p className="text-gray-700 font-medium">Siddhagiri Math, Kaneri Math</p>
                <p className="text-gray-600">Kolhapur, Maharashtra 416234</p>
              </div>
              
              {/* Custom Map Image */}
              <motion.div 
                className="relative h-80 rounded-xl overflow-hidden shadow-lg border-2 border-gray-200 group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/siddhagiri map.png"
                  alt="Siddhagiri Institute Location Map"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Map Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                
                {/* Location Marker Overlay */}
                <motion.div 
                  className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg border border-white/50"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <p className="text-sm font-bold text-gray-800">📍 Siddhagiri Institute</p>
                  </div>
                </motion.div>
                
                {/* Nursing College Marker */}
                <motion.div 
                  className="absolute top-16 left-4 bg-blue-600/95 backdrop-blur-sm px-3 py-1 rounded-lg shadow-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <p className="text-xs font-semibold text-white">🎓 Nursing College</p>
                </motion.div>
                
                {/* Directions Button */}
                <motion.a
                  href="https://g.co/kgs/D7ZHhDg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-200 flex items-center space-x-2 text-sm font-semibold group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MapPin className="h-4 w-4 group-hover:animate-bounce" />
                  <span>Get Directions</span>
                </motion.a>

                {/* Interactive Hover Effect */}
                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
              
              {/* Additional Location Info */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <motion.div 
                  className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-100"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm">🚗</span>
                    </div>
                    <p className="font-bold text-blue-800">By Car</p>
                  </div>
                  <p className="text-blue-700">Free parking available on campus</p>
                  <p className="text-blue-600 text-xs mt-1">Easy access from main road</p>
                </motion.div>
                <motion.div 
                  className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-100"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm">🚌</span>
                    </div>
                    <p className="font-bold text-green-800">Public Transport</p>
                  </div>
                  <p className="text-green-700">Bus stop nearby</p>
                  <p className="text-green-600 text-xs mt-1">Regular bus services available</p>
                </motion.div>
              </div>

              {/* Map Features */}
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  { label: 'Hospital', icon: '🏥', color: 'bg-red-100 text-red-700' },
                  { label: 'Nursing College', icon: '🎓', color: 'bg-blue-100 text-blue-700' },
                  { label: 'Emergency', icon: '🚨', color: 'bg-orange-100 text-orange-700' },
                  { label: 'Parking', icon: '🅿️', color: 'bg-gray-100 text-gray-700' }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className={`${feature.color} px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span>{feature.icon}</span>
                    <span>{feature.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50"
            variants={itemVariants}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Calendar className="h-8 w-8 mr-3 text-blue-600" />
              Schedule Appointment
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
                    placeholder="Your full name"
                  />
                </motion.div>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
                    placeholder="Your phone number"
                  />
                </motion.div>
              </div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
                  placeholder="Your email address"
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label htmlFor="department" className="block text-sm font-semibold text-gray-700 mb-3">
                  Department
                </label>
                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
                >
                  <option value="">Select a department</option>
                  {departments.map((dept, index) => (
                    <option key={index} value={dept}>{dept}</option>
                  ))}
                </select>
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 resize-none"
                  placeholder="Please describe your symptoms or reason for appointment..."
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.5)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;