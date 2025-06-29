import React from 'react';
import { GraduationCap, Quote, Star, Heart, Award, BookOpen, Users, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const PrincipalsMessage = () => {
  const achievements = [
    {
      year: '2011',
      title: 'Institute Founded',
      description: 'Started with ANM course for grassroots development',
      icon: Star,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      year: '2020',
      title: 'B.Sc Nursing Launched',
      description: 'Expanded to comprehensive nursing education',
      icon: GraduationCap,
      color: 'from-green-500 to-emerald-600'
    },
    {
      year: '10 Batches',
      title: 'Successful Graduates',
      description: 'Students working efficiently and independently',
      icon: Users,
      color: 'from-purple-500 to-pink-600'
    },
    {
      year: 'Present',
      title: 'Hi-Tech Nursing',
      description: 'Evidence-based nursing services and education',
      icon: Target,
      color: 'from-orange-500 to-red-600'
    }
  ];

  const visionPoints = [
    {
      title: 'Social Development',
      description: 'Transform higher education for community betterment',
      icon: '🌟',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Comprehensive Care',
      description: 'Provide complete nursing care in hospitals and communities',
      icon: '💝',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Holistic Education',
      description: 'Nurture future nurses with knowledge, skills, and values',
      icon: '📚',
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Quality Standards',
      description: 'High standard education to meet future challenges',
      icon: '🏆',
      color: 'from-orange-500 to-red-600'
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
    <section id="principals-message" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <GraduationCap className="h-4 w-4 text-blue-600 mr-2" />
            <span className="text-blue-600 font-semibold">Leadership Message</span>
          </motion.div>

          <motion.h2 
            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Principal's Message
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Principal's Profile */}
          <motion.div 
            className="lg:col-span-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Profile Image Placeholder */}
              <motion.div 
                className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <GraduationCap className="h-16 w-16 text-white" />
              </motion.div>
              
              <motion.h3 
                className="text-2xl font-bold text-gray-900 mb-2"
                variants={itemVariants}
              >
                Prof. Regina D Satvekar
              </motion.h3>
              <motion.p 
                className="text-blue-600 font-semibold mb-4"
                variants={itemVariants}
              >
                Principal
              </motion.p>
              <motion.p 
                className="text-gray-600 text-sm leading-relaxed"
                variants={itemVariants}
              >
                Siddhagiri Nursing Institute
              </motion.p>

              {/* Decorative Elements */}
              <div className="flex justify-center space-x-2 mt-6">
                {[Award, BookOpen, Heart].map((Icon, index) => (
                  <motion.div
                    key={index}
                    className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Icon className="h-4 w-4 text-white" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Achievements Timeline */}
            <motion.div 
              className="mt-8 space-y-4"
              variants={itemVariants}
            >
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Key Milestones</h4>
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white/50 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <achievement.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-sm font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded-lg">
                          {achievement.year}
                        </span>
                      </div>
                      <h5 className="font-bold text-gray-900 text-sm">{achievement.title}</h5>
                      <p className="text-gray-600 text-xs">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Message Content */}
          <motion.div 
            className="lg:col-span-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50"
              variants={itemVariants}
            >
              {/* Quote Icon */}
              <motion.div 
                className="flex justify-center mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Quote className="h-8 w-8 text-white" />
                </div>
              </motion.div>

              {/* Message Text */}
              <motion.div 
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6"
                variants={itemVariants}
              >
                <motion.p 
                  className="text-lg font-medium text-gray-800 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  I am delighted to highlight that our <span className="font-bold text-blue-600">SIDDHAGIRI NURSING INSTITUTE</span> existing since the year <span className="font-bold text-purple-600">2011</span>. Our Parampujya Swamiji had dream to develop socially, mentally, spiritually & financially the poor and needy people, by initially starting ANM course in a view to develop the girls from the grassroots level.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Through the kindness of Parampujya Swamiji the course was commenced at minimum charges along with food & accommodation at free of cost and there by almost all the student of 10 batches could successfully complete the course and have started working efficiently and have become independent.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  It's my pleasure to announce that with the blessings of Parampujya Swamiji we have started <span className="font-bold text-green-600">B.Sc Nursing course in the year 2020</span> with vision & mission to transform higher education for the social development and to provide comprehensive & competent nursing care to the client in the hospital and to reach out the services at community level to provide promotive, preventive, curative & rehabilitative care to the sick & needy.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  The nursing profession globally is a noble profession. From the time of <span className="font-bold text-pink-600">Florence Nightingale</span> the traditional course has been transformed into hi-tech nursing. The nursing is totally based on scientific knowledge. Hence, the nurses are becoming competent and are able to practice evidence based nursing services.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Nursing education aims at nurturing future nurses with all values of life with knowledge skill and attitude which closely relates with hi-tech care. We the Siddhagiri Nursing Institute believe that we should focus on holistic personality of our students, as they are responsible and accountable for quality nursing and need to be trained, guided and motivated.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  Our highly qualified and motivated staff provide needed skills and knowledge, we also fulfill all the needs to provide the facility to their satisfaction. We assure high standard quality education and experience to meet the today's and near future challenges.
                </motion.p>

                <motion.p 
                  className="text-lg font-semibold text-gray-800 border-l-4 border-blue-500 pl-6 bg-blue-50 p-4 rounded-r-2xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  I welcome and invite all the participants to come and join us for academic journey. I offer my best wishes for their bright career in nursing.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Vision & Mission Cards */}
            <motion.div 
              className="grid md:grid-cols-2 gap-6 mt-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {visionPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 group"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <div className="flex items-start space-x-4">
                    <motion.div 
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${point.color} flex items-center justify-center shadow-lg text-2xl`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {point.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-2">{point.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Inspirational Quote */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='6'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Quote className="h-12 w-12 text-white/80 mx-auto mb-6" />
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                "Nursing: A Noble Profession"
              </h3>
              <p className="text-white/90 text-lg leading-relaxed max-w-4xl mx-auto">
                From Florence Nightingale to modern hi-tech nursing, we continue the tradition of 
                compassionate care while embracing scientific advancement and evidence-based practice.
              </p>
              <div className="mt-6 flex justify-center">
                <div className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full">
                  <span className="text-white font-semibold">- Prof. Regina D Satvekar</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrincipalsMessage;