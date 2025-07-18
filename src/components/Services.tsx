import React from 'react';
import { Heart, Brain, Baby, Bone, Eye, Stethoscope, Activity, Shield, ArrowRight, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Comprehensive heart care including diagnostics, treatment, and cardiac surgery.',
      color: 'from-red-500 to-pink-600',
      bgColor: 'bg-red-50',
      features: ['ECG & Echo', 'Cardiac Surgery', 'Angioplasty', 'Pacemaker']
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Advanced neurological care for brain, spine, and nervous system disorders.',
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-50',
      features: ['Brain Surgery', 'Stroke Care', 'Epilepsy Treatment', 'Spine Surgery']
    },
    {
      icon: Baby,
      title: 'Pediatrics',
      description: 'Specialized medical care for infants, children, and adolescents.',
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-pink-50',
      features: ['Newborn Care', 'Vaccination', 'Growth Monitoring', 'Pediatric Surgery']
    },
    {
      icon: Bone,
      title: 'Orthopedics',
      description: 'Expert treatment for bone, joint, and musculoskeletal conditions.',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
      features: ['Joint Replacement', 'Sports Medicine', 'Fracture Care', 'Arthroscopy']
    },
    {
      icon: Eye,
      title: 'Ophthalmology',
      description: 'Complete eye care including surgery and vision correction.',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50',
      features: ['Cataract Surgery', 'Retina Care', 'Glaucoma Treatment', 'LASIK Surgery']
    },
    {
      icon: Stethoscope,
      title: 'General Medicine',
      description: 'Primary healthcare and treatment for common medical conditions.',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      features: ['Health Checkups', 'Chronic Disease', 'Preventive Care', 'Family Medicine']
    },
    {
      icon: Activity,
      title: 'Emergency Care',
      description: '24/7 emergency services with rapid response and critical care.',
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'bg-yellow-50',
      features: ['Trauma Care', 'Critical Care', 'Ambulance Service', 'ICU Facilities']
    },
    {
      icon: Shield,
      title: 'Preventive Care',
      description: 'Health screenings, vaccinations, and wellness programs.',
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'bg-cyan-50',
      features: ['Health Screening', 'Vaccination', 'Wellness Programs', 'Health Education']
    }
  ];

  const specialties = [
    {
      title: 'Advanced Diagnostics',
      description: 'State-of-the-art imaging and laboratory services',
      icon: '🔬',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Surgical Excellence',
      description: 'Minimally invasive and robotic surgery options',
      icon: '⚕️',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Patient-Centered Care',
      description: 'Personalized treatment plans and compassionate care',
      icon: '❤️',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  // Healthcare Quotes
  const healthcareQuotes = [
    {
      quote: "The art of healing comes from nature, not from the physician.",
      author: "Paracelsus",
      specialty: "Swiss Physician & Alchemist"
    },
    {
      quote: "Medicine is not only a science; it is also an art. It does not consist of compounding pills and plasters; it deals with the very processes of life.",
      author: "Paracelsus",
      specialty: "Renaissance Physician"
    },
    {
      quote: "To cure sometimes, to relieve often, to comfort always.",
      author: "Edward Livingston Trudeau",
      specialty: "American Physician"
    }
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
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/50 to-purple-50/50 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Cpath d='M0 0h50v50H0V0zm50 50h50v50H50V50z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
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
            <Stethoscope className="h-4 w-4 text-blue-600 mr-2" />
            <span className="text-blue-600 font-semibold">Our Medical Services</span>
          </motion.div>

          <motion.h2 
            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Comprehensive Healthcare
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We offer a comprehensive range of medical services with state-of-the-art facilities 
            and experienced medical professionals to ensure the best possible care.
          </motion.p>
        </motion.div>

        {/* Healthcare Quote Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
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
                "{healthcareQuotes[0].quote}"
              </motion.blockquote>
              
              <motion.div
                className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3 inline-block"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="font-bold text-lg">- {healthcareQuotes[0].author}</p>
                <p className="text-white/90 text-sm">{healthcareQuotes[0].specialty}</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className={`${service.bgColor} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-white/50 relative overflow-hidden`}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  y: -5
                }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <motion.div 
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 relative z-10`}
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <IconComponent className="h-8 w-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4 relative z-10 text-sm">{service.description}</p>
                
                {/* Features List */}
                <div className="space-y-1 relative z-10">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-xs text-gray-600">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mr-2`}></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Hover Arrow */}
                <motion.div
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ x: 3 }}
                >
                  <ArrowRight className="h-5 w-5 text-gray-400" />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Medical Quotes Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">Healthcare Philosophy</h3>
            <p className="text-gray-600">Timeless wisdom from medical pioneers</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {healthcareQuotes.slice(1).map((quote, index) => (
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
                  className="absolute -top-4 left-6 w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <Quote className="h-4 w-4 text-white" />
                </motion.div>
                
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-4 italic">
                  "{quote.quote}"
                </blockquote>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-bold text-gray-900">- {quote.author}</p>
                  <p className="text-green-600 text-sm font-medium">{quote.specialty}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Specialties Section */}
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-10 mb-16 shadow-lg border border-white/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">Our Specialties</h3>
            <p className="text-gray-600 text-lg">What sets us apart in healthcare delivery</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div 
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${specialty.color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 text-3xl`}
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  {specialty.icon}
                </motion.div>
                <h4 className="font-bold text-gray-900 mb-3 text-xl">{specialty.title}</h4>
                <p className="text-gray-600 leading-relaxed">{specialty.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Why Choose Us */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='6'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            <motion.h3 
              className="text-3xl sm:text-4xl font-bold text-white mb-10 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Why Choose Siddhagiri Hospital?
            </motion.h3>
            
            <div className="grid md:grid-cols-3 gap-8 text-left relative z-10">
              {[
                {
                  title: 'Expert Medical Team',
                  description: 'Board-certified specialists with years of experience and continuous medical education.',
                  icon: '👨‍⚕️',
                  color: 'from-blue-400 to-cyan-500'
                },
                {
                  title: 'Advanced Technology',
                  description: 'State-of-the-art medical equipment and technology for accurate diagnosis.',
                  icon: '🏥',
                  color: 'from-green-400 to-emerald-500'
                },
                {
                  title: 'Patient-First Approach',
                  description: 'Compassionate care focused on patient comfort, safety, and satisfaction.',
                  icon: '💝',
                  color: 'from-purple-400 to-pink-500'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <motion.div 
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg text-2xl`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h4 className="font-bold text-white mb-3 text-xl">{item.title}</h4>
                  <p className="text-white/90 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;