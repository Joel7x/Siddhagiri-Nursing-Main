import React, { useState } from 'react';
import { GraduationCap, BookOpen, Users, Award, Calendar, FileText, Upload, User, Clock, MapPin, CheckCircle, AlertCircle, Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';
import SuccessPopup from './SuccessPopup';

const NursingCollege = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    
    // Educational Information
    tenthBoard: '',
    tenthPercentage: '',
    tenthYear: '',
    twelfthBoard: '',
    twelfthPercentage: '',
    twelfthYear: '',
    
    // Course Information
    course: '',
    preferredBatch: '',
    
    // Additional Information
    previousMedicalExperience: '',
    whyNursing: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    emergencyContactRelation: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate required fields
      if (!formData.gender) {
        alert('Please select a gender');
        return;
      }

      // Transform form data to match Supabase schema
      const admissionData = {
        full_name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phone: formData.phone,
        date_of_birth: formData.dateOfBirth,
        gender: formData.gender.charAt(0).toUpperCase() + formData.gender.slice(1).toLowerCase(), // Capitalize first letter
        course: formData.course,
        tenth_percentage: parseFloat(formData.tenthPercentage) || 0,
        twelfth_percentage: parseFloat(formData.twelfthPercentage) || 0,
        neet_score: formData.previousMedicalExperience ? parseInt(formData.previousMedicalExperience) : null,
        address: `${formData.address}, ${formData.city}, ${formData.state} ${formData.pincode}`.trim(),
        emergency_contact_name: formData.emergencyContactName,
        emergency_contact_phone: formData.emergencyContactPhone,
        motivation: formData.whyNursing
      };

      console.log('Submitting admission data:', admissionData);

      const { data, error } = await supabase
        .from('admission_forms')
        .insert([admissionData]);

      if (error) {
        console.error('Error submitting admission form:', error);
        alert('There was an error submitting your application. Please try again.');
      } else {
        console.log('Admission form submitted successfully:', data);
        setShowSuccessPopup(true);
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          dateOfBirth: '',
          gender: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          state: '',
          pincode: '',
          tenthBoard: '',
          tenthPercentage: '',
          tenthYear: '',
          twelfthBoard: '',
          twelfthPercentage: '',
          twelfthYear: '',
          course: '',
          preferredBatch: '',
          previousMedicalExperience: '',
          whyNursing: '',
          emergencyContactName: '',
          emergencyContactPhone: '',
          emergencyContactRelation: ''
        });
      }
    } catch (error) {
      console.error('Error submitting admission form:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const features = [
    {
      icon: GraduationCap,
      title: 'Accredited Programs',
      description: 'Our nursing programs are accredited by the Indian Nursing Council and Maharashtra Nursing Council.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: BookOpen,
      title: 'Modern Curriculum',
      description: 'Updated curriculum combining theoretical knowledge with practical clinical experience.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Learn from experienced nursing professionals and medical experts.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Award,
      title: 'Clinical Training',
      description: 'Hands-on training in our state-of-the-art hospital facilities.',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  const courses = [
    'GNM Nursing',
    'B.Sc. Nursing',
    'P.B.B.Sc. Nursing',
    'M.Sc. Nursing'
  ];

  // Nursing Education Quotes
  const nursingQuotes = [
    {
      quote: "Nursing is an art: and if it is to be made an art, it requires an exclusive devotion as hard a preparation as any painter's or sculptor's work.",
      author: "Florence Nightingale",
      specialty: "Founder of Modern Nursing"
    },
    {
      quote: "Caring is the essence of nursing.",
      author: "Jean Watson",
      specialty: "Nursing Theorist"
    },
    {
      quote: "Nurses dispense comfort, compassion, and caring without even a prescription.",
      author: "Val Saintsbury",
      specialty: "Healthcare Author"
    }
  ];

  // B.Sc Nursing Course Details
  const bscNursingDetails = {
    seats: 40,
    duration: '4 Years',
    ageLimit: '17 to 35 years',
    eligibility: '10+2 class passed with Science (PCB) & English Core/English Elective with aggregate of 45% marks',
    admissionProcess: [
      'Student Should Appear NEET Exam for that current Academic Year',
      'After NEET and 12th Science result Register at Maharashtra CET Website',
      'Document Verification by Maharashtra CET',
      'Preference Form Filling',
      'Attending Counseling Rounds',
      'Retaining at college (Confirmation of admission at college)'
    ],
    importantDates: [
      { event: 'Application Start', date: 'March 1, 2024' },
      { event: 'Application End', date: 'June 30, 2024' },
      { event: 'Entrance Exam', date: 'July 15, 2024' },
      { event: 'Classes Begin', date: 'August 1, 2024' }
    ],
    requirements: [
      'NEET qualification mandatory',
      'Medical fitness certificate required',
      'Document verification by Maharashtra CET',
      'Counseling attendance compulsory'
    ]
  };

  // GNM Nursing Course Details
  const gnmNursingDetails = {
    seats: 30,
    duration: '3.5 Years',
    eligibility: '10+2 in any stream (preferably Science) with minimum 40% marks',
    benefits: [
      'Strong foundation in nursing and patient care',
      'Extensive clinical exposure',
      'Prepares for registration as a nurse and midwife',
      'High employability in hospitals, clinics, and community health centers'
    ],
    futureScope: [
      'Staff Nurse in hospitals and clinics',
      'Community Health Nurse',
      'Can pursue B.Sc. Nursing (Post Basic) for higher studies',
      'Opportunities in government and private healthcare sectors'
    ]
  };

  // P.B.B.Sc. Nursing Course Details
  const pbbscNursingDetails = {
    seats: 20,
    duration: '2 Years',
    eligibility: 'GNM with registration as RN & RM and 10+2 in any stream',
    benefits: [
      'Upgrade qualification for GNM diploma holders',
      'Enhances theoretical and practical knowledge',
      'Eligibility for teaching and administrative roles',
      'Better career advancement opportunities'
    ],
    futureScope: [
      'Staff Nurse/Senior Nurse',
      'Nursing Tutor or Educator',
      'Can pursue M.Sc. Nursing',
      'Leadership roles in hospitals and academics'
    ]
  };

  // M.Sc. Nursing Course Details
  const mscNursingDetails = {
    seats: 10,
    duration: '2 Years',
    eligibility: 'B.Sc. Nursing or P.B.B.Sc. Nursing with minimum 55% marks and 1 year experience',
    benefits: [
      'Advanced specialization in nursing',
      'Opens doors to teaching, research, and leadership roles',
      'Higher salary and job security',
      'Eligibility for Ph.D. and further research'
    ],
    futureScope: [
      'Nurse Educator/Professor',
      'Nursing Researcher',
      'Nursing Superintendent/Administrator',
      'Specialist Nurse in chosen field'
    ]
  };

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
    <section id="nursing-college" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
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
            <span className="text-blue-600 font-semibold">Nursing Education</span>
          </motion.div>

          <motion.h2 
            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Siddhagiri Nursing College
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Shape your future in healthcare with our comprehensive nursing education programs. 
            Join us to become a skilled and compassionate nursing professional.
          </motion.p>
        </motion.div>

        {/* Nursing Quote Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
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
                "{nursingQuotes[0].quote}"
              </motion.blockquote>
              
              <motion.div
                className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3 inline-block"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="font-bold text-lg">- {nursingQuotes[0].author}</p>
                <p className="text-white/90 text-sm">{nursingQuotes[0].specialty}</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div 
                key={index} 
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Nursing Wisdom Quotes Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">Nursing Wisdom</h3>
            <p className="text-gray-600">Inspiring words from nursing pioneers</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {nursingQuotes.slice(1).map((quote, index) => (
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
                  className="absolute -top-4 left-6 w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <Quote className="h-4 w-4 text-white" />
                </motion.div>
                
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-4 italic">
                  "{quote.quote}"
                </blockquote>
                
                <div className="border-l-4 border-pink-500 pl-4">
                  <p className="font-bold text-gray-900">- {quote.author}</p>
                  <p className="text-pink-600 text-sm font-medium">{quote.specialty}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Programs */}
        <motion.div 
          className="mb-16 space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* B.Sc Nursing Program */}
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 shadow-2xl text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='6'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <motion.div
                  className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <Star className="h-4 w-4 mr-2" />
                  <span className="font-semibold">Featured Program</span>
                </motion.div>
                <h3 className="text-3xl font-bold mb-2">Bachelor of Science in Nursing (B.Sc)</h3>
                <p className="text-white/90 text-lg">Comprehensive 4-Year Nursing Program</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Seats */}
                <motion.div 
                  className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30 text-center"
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <Users className="h-8 w-8 mx-auto mb-3" />
                  <div className="text-2xl font-bold mb-1">{bscNursingDetails.seats}</div>
                  <div className="text-white/90 text-sm font-medium">Available Seats</div>
                </motion.div>

                {/* Duration */}
                <motion.div 
                  className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30 text-center"
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <Clock className="h-8 w-8 mx-auto mb-3" />
                  <div className="text-2xl font-bold mb-1">{bscNursingDetails.duration}</div>
                  <div className="text-white/90 text-sm font-medium">Course Duration</div>
                </motion.div>

                {/* Age Limit */}
                <motion.div 
                  className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30 text-center"
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <Calendar className="h-8 w-8 mx-auto mb-3" />
                  <div className="text-xl font-bold mb-1">{bscNursingDetails.ageLimit}</div>
                  <div className="text-white/90 text-sm font-medium">Age Criteria</div>
                </motion.div>

                {/* Gender */}
                <motion.div 
                  className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30 text-center"
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <User className="h-8 w-8 mx-auto mb-3" />
                  <div className="text-lg font-bold mb-1">Male/Female</div>
                  <div className="text-white/90 text-sm font-medium">Gender Eligibility</div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* GNM Nursing Program */}
          <div className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-8 shadow-2xl text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='6'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <motion.div
                  className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <Award className="h-4 w-4 mr-2" />
                  <span className="font-semibold">GNM Nursing</span>
                </motion.div>
                <h3 className="text-3xl font-bold mb-2">GNM Nursing</h3>
                <p className="text-white/90 text-lg">Essential 3.5-Year Nursing Program</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Seats */}
                <motion.div 
                  className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30 text-center"
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <Users className="h-8 w-8 mx-auto mb-3" />
                  <div className="text-2xl font-bold mb-1">{gnmNursingDetails.seats}</div>
                  <div className="text-white/90 text-sm font-medium">Available Seats</div>
                </motion.div>

                {/* Duration */}
                <motion.div 
                  className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30 text-center"
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <Clock className="h-8 w-8 mx-auto mb-3" />
                  <div className="text-2xl font-bold mb-1">{gnmNursingDetails.duration}</div>
                  <div className="text-white/90 text-sm font-medium">Course Duration</div>
                </motion.div>

                {/* Age Limit */}
                <motion.div 
                  className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30 text-center"
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <Calendar className="h-8 w-8 mx-auto mb-3" />
                  <div className="text-xl font-bold mb-1">17 to 35 years</div>
                  <div className="text-white/90 text-sm font-medium">Age Criteria</div>
                </motion.div>

                {/* Gender */}
                <motion.div 
                  className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30 text-center"
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <User className="h-8 w-8 mx-auto mb-3" />
                  <div className="text-lg font-bold mb-1">Male/Female</div>
                  <div className="text-white/90 text-sm font-medium">Gender Eligibility</div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* P.B.B.Sc. Nursing Program */}
          <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 rounded-3xl p-8 shadow-2xl text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='6'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <motion.div
                  className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <Award className="h-4 w-4 mr-2" />
                  <span className="font-semibold">P.B.B.Sc. Nursing</span>
                </motion.div>
                <h3 className="text-3xl font-bold mb-2">P.B.B.Sc. Nursing</h3>
                <p className="text-white/90 text-lg">Essential 2-Year Nursing Foundation Program</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Seats */}
                <motion.div 
                  className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30 text-center"
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <Users className="h-8 w-8 mx-auto mb-3" />
                  <div className="text-2xl font-bold mb-1">{pbbscNursingDetails.seats}</div>
                  <div className="text-white/90 text-sm font-medium">Available Seats</div>
                </motion.div>

                {/* Duration */}
                <motion.div 
                  className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30 text-center"
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <Clock className="h-8 w-8 mx-auto mb-3" />
                  <div className="text-2xl font-bold mb-1">{pbbscNursingDetails.duration}</div>
                  <div className="text-white/90 text-sm font-medium">Course Duration</div>
                </motion.div>

                {/* Age Limit */}
                <motion.div 
                  className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30 text-center"
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <Calendar className="h-8 w-8 mx-auto mb-3" />
                  <div className="text-xl font-bold mb-1">17 to 35 years</div>
                  <div className="text-white/90 text-sm font-medium">Age Criteria</div>
                </motion.div>

                {/* Gender */}
                <motion.div 
                  className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30 text-center"
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <User className="h-8 w-8 mx-auto mb-3" />
                  <div className="text-lg font-bold mb-1">Male/Female</div>
                  <div className="text-white/90 text-sm font-medium">Gender Eligibility</div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* M.Sc. Nursing Program */}
          <div className="bg-gradient-to-br from-pink-600 via-red-600 to-orange-600 rounded-3xl p-8 shadow-2xl text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='6'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <motion.div
                  className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <Award className="h-4 w-4 mr-2" />
                  <span className="font-semibold">M.Sc. Nursing</span>
                </motion.div>
                <h3 className="text-3xl font-bold mb-2">M.Sc. Nursing</h3>
                <p className="text-white/90 text-lg">Advanced 2-Year Nursing Program</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Seats */}
                <motion.div 
                  className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30 text-center"
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <Users className="h-8 w-8 mx-auto mb-3" />
                  <div className="text-2xl font-bold mb-1">{mscNursingDetails.seats}</div>
                  <div className="text-white/90 text-sm font-medium">Available Seats</div>
                </motion.div>

                {/* Duration */}
                <motion.div 
                  className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30 text-center"
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <Clock className="h-8 w-8 mx-auto mb-3" />
                  <div className="text-2xl font-bold mb-1">{mscNursingDetails.duration}</div>
                  <div className="text-white/90 text-sm font-medium">Course Duration</div>
                </motion.div>

                {/* Age Limit */}
                <motion.div 
                  className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30 text-center"
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <Calendar className="h-8 w-8 mx-auto mb-3" />
                  <div className="text-xl font-bold mb-1">17 to 35 years</div>
                  <div className="text-white/90 text-sm font-medium">Age Criteria</div>
                </motion.div>

                {/* Gender */}
                <motion.div 
                  className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30 text-center"
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <User className="h-8 w-8 mx-auto mb-3" />
                  <div className="text-lg font-bold mb-1">Male/Female</div>
                  <div className="text-white/90 text-sm font-medium">Gender Eligibility</div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* B.Sc Nursing Eligibility */}
            <motion.div 
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-blue-600" />
                B.Sc Nursing Eligibility
              </h3>
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl">
                  <h4 className="font-semibold text-blue-800 mb-2">Education Requirements</h4>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    {bscNursingDetails.eligibility} from recognized board under AISSCE/CBSE/ICSE/SSCE/HSCE or other equivalent Board.
                  </p>
                </div>
                <div className="bg-green-50 border border-green-200 p-4 rounded-xl">
                  <h4 className="font-semibold text-green-800 mb-2">Age & Medical Fitness</h4>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Minimum age: 17 years on 31st December of admission year</li>
                    <li>• Maximum age: 35 years as on 31st Dec of admitting year</li>
                    <li>• Candidate should be medically fit</li>
                    <li>• Student shall be admitted once in a year</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* GNM Nursing Eligibility */}
            <motion.div 
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                GNM Nursing Eligibility
              </h3>
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 p-4 rounded-xl">
                  <h4 className="font-semibold text-green-800 mb-2">Gender & Age Requirements</h4>
                  <p className="text-green-700 text-sm leading-relaxed mb-2">
                    <strong>Male/Female</strong> aged between 17 to 35 years as on 31/12/2021 for Academic Session 2021-24.
                  </p>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl">
                  <h4 className="font-semibold text-emerald-800 mb-2">Education Requirements</h4>
                  <p className="text-emerald-700 text-sm leading-relaxed">
                    10+2 in any stream (preferably Science) with minimum 40% marks.
                  </p>
                </div>
                <div className="bg-teal-50 border border-teal-200 p-4 rounded-xl">
                  <h4 className="font-semibold text-teal-800 mb-2">Benefits</h4>
                  <ul className="text-teal-700 text-xs space-y-1">
                    {gnmNursingDetails.benefits.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl">
                  <h4 className="font-semibold text-amber-800 mb-2">Future Scope</h4>
                  <ul className="text-amber-700 text-xs space-y-1">
                    {gnmNursingDetails.futureScope.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* P.B.B.Sc. Nursing Eligibility */}
            <motion.div 
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-purple-600" />
                P.B.B.Sc. Nursing Eligibility
              </h3>
              <div className="space-y-4">
                <div className="bg-purple-50 border border-purple-200 p-4 rounded-xl">
                  <h4 className="font-semibold text-purple-800 mb-2">Gender & Age Requirements</h4>
                  <p className="text-purple-700 text-sm leading-relaxed mb-2">
                    <strong>Male/Female</strong> aged between 17 to 35 years as on 31/12/2021 for Academic Session 2021-24.
                  </p>
                </div>
                <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-xl">
                  <h4 className="font-semibold text-indigo-800 mb-2">Education Requirements</h4>
                  <p className="text-indigo-700 text-sm leading-relaxed">
                    GNM with registration as RN & RM and 10+2 in any stream.
                  </p>
                </div>
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl">
                  <h4 className="font-semibold text-blue-800 mb-2">Benefits</h4>
                  <ul className="text-blue-700 text-xs space-y-1">
                    {pbbscNursingDetails.benefits.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-cyan-50 border border-cyan-200 p-4 rounded-xl">
                  <h4 className="font-semibold text-cyan-800 mb-2">Future Scope</h4>
                  <ul className="text-cyan-700 text-xs space-y-1">
                    {pbbscNursingDetails.futureScope.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* M.Sc. Nursing Eligibility */}
            <motion.div 
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-pink-600" />
                M.Sc. Nursing Eligibility
              </h3>
              <div className="space-y-4">
                <div className="bg-pink-50 border border-pink-200 p-4 rounded-xl">
                  <h4 className="font-semibold text-pink-800 mb-2">Gender & Age Requirements</h4>
                  <p className="text-pink-700 text-sm leading-relaxed mb-2">
                    <strong>Male/Female</strong> aged between 17 to 35 years as on 31/12/2021 for Academic Session 2021-24.
                  </p>
                </div>
                <div className="bg-red-50 border border-red-200 p-4 rounded-xl">
                  <h4 className="font-semibold text-red-800 mb-2">Education Requirements</h4>
                  <p className="text-red-700 text-sm leading-relaxed">
                    B.Sc. Nursing or P.B.B.Sc. Nursing with minimum 55% marks and 1 year experience.
                  </p>
                </div>
                <div className="bg-orange-50 border border-orange-200 p-4 rounded-xl">
                  <h4 className="font-semibold text-orange-800 mb-2">Benefits</h4>
                  <ul className="text-orange-700 text-xs space-y-1">
                    {mscNursingDetails.benefits.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl">
                  <h4 className="font-semibold text-yellow-800 mb-2">Future Scope</h4>
                  <ul className="text-yellow-700 text-xs space-y-1">
                    {mscNursingDetails.futureScope.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Available Courses */}
            <motion.div 
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                Available Courses
              </h3>
              <ul className="space-y-3">
                {courses.map((course, index) => (
                  <motion.li 
                    key={index} 
                    className="text-gray-700 border-l-4 border-blue-200 pl-4 py-2 bg-blue-50 rounded-r-lg"
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    {course}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* B.Sc Admission Process */}
            <motion.div 
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="h-5 w-5 mr-2 text-purple-600" />
                B.Sc Admission Process
              </h3>
              <div className="space-y-3">
                {bscNursingDetails.admissionProcess.map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3 p-3 bg-purple-50 border border-purple-100 rounded-xl"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-purple-800 text-sm font-medium">{step}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Important Dates */}
            <motion.div 
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-green-600" />
                Important Dates
              </h3>
              <div className="space-y-3">
                {bscNursingDetails.importantDates.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex justify-between items-center p-3 bg-green-50 border border-green-100 rounded-xl"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-green-700 font-medium text-sm">{item.event}:</span>
                    <span className="text-green-800 font-bold text-sm">{item.date}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-orange-50 border border-orange-200 rounded-xl">
                <p className="text-orange-800 text-sm font-medium">
                  <AlertCircle className="h-4 w-4 inline mr-1" />
                  Admission Period: As per Indian Nursing Council Notification (Probably In June/July)
                </p>
              </div>
            </motion.div>

            {/* Additional Information */}
            <motion.div 
              className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-2xl text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-4">Additional Information</h3>
              <div className="space-y-3 text-sm opacity-95">
                <div>
                  <h4 className="font-semibold mb-1">B.Sc Nursing:</h4>
                  <p>• Vacations & Holidays: As per MUHS, Nasik</p>
                  <p>• Examination: As per MUHS, Nasik rules</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">GNM Nursing:</h4>
                  <p>• Vacations & Holidays: As per MSBNPE, Mumbai</p>
                  <p>• Examination: As per MSBNPE, Mumbai rules</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">P.B.B.Sc. Nursing:</h4>
                  <p>• Vacations & Holidays: As per MSBNPE, Mumbai</p>
                  <p>• Examination: As per MSBNPE, Mumbai rules</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">M.Sc. Nursing:</h4>
                  <p>• Vacations & Holidays: As per MSBNPE, Mumbai</p>
                  <p>• Examination: As per MSBNPE, Mumbai rules</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Required Documents:</h4>
                  <p>As per authority prescription by time to time</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Admission Form */}
          <div className="lg:col-span-2 w-full" id="admission-form">
            <motion.div 
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="h-6 w-6 mr-2 text-blue-600" />
                Admission Application Form
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 w-full">
                {/* Personal Information */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <User className="h-5 w-5 mr-2 text-blue-600" />
                    Personal Information
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter last name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        required
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
                      <select
                        name="gender"
                        required
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter email address"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
                    <input
                      type="text"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter full address"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                      <input
                        type="text"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter city"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                      <input
                        type="text"
                        name="state"
                        required
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter state"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Pin Code *</label>
                      <input
                        type="text"
                        name="pincode"
                        required
                        value={formData.pincode}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter pin code"
                      />
                    </div>
                  </div>
                </div>

                {/* Educational Information */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-green-600" />
                    Educational Information
                  </h4>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">10th Board *</label>
                        <input
                          type="text"
                          name="tenthBoard"
                          required
                          value={formData.tenthBoard}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="e.g., CBSE, State Board"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">10th Percentage *</label>
                        <input
                          type="number"
                          name="tenthPercentage"
                          required
                          min="0"
                          max="100"
                          step="0.01"
                          value={formData.tenthPercentage}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter percentage"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">10th Year *</label>
                        <input
                          type="number"
                          name="tenthYear"
                          required
                          min="2000"
                          max="2024"
                          value={formData.tenthYear}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="e.g., 2020"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">12th Board *</label>
                        <input
                          type="text"
                          name="twelfthBoard"
                          required
                          value={formData.twelfthBoard}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="e.g., CBSE, State Board"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">12th Percentage *</label>
                        <input
                          type="number"
                          name="twelfthPercentage"
                          required
                          min="0"
                          max="100"
                          step="0.01"
                          value={formData.twelfthPercentage}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter percentage"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">12th Year *</label>
                        <input
                          type="number"
                          name="twelfthYear"
                          required
                          min="2000"
                          max="2024"
                          value={formData.twelfthYear}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="e.g., 2022"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Course Information */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <GraduationCap className="h-5 w-5 mr-2 text-purple-600" />
                    Course Selection
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Course *</label>
                      <select
                        name="course"
                        required
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select Course</option>
                        {courses.map((course, index) => (
                          <option key={index} value={course}>{course}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Batch</label>
                      <select
                        name="preferredBatch"
                        value={formData.preferredBatch}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select Batch</option>
                        <option value="morning">Morning (8:00 AM - 2:00 PM)</option>
                        <option value="afternoon">Afternoon (2:00 PM - 8:00 PM)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Additional Information</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Previous Medical Experience</label>
                      <textarea
                        name="previousMedicalExperience"
                        rows={3}
                        value={formData.previousMedicalExperience}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Describe any previous experience in healthcare or medical field..."
                      ></textarea>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Why do you want to pursue nursing? *</label>
                      <textarea
                        name="whyNursing"
                        rows={3}
                        required
                        value={formData.whyNursing}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Share your motivation for choosing nursing as a career..."
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Emergency Contact</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Contact Name *</label>
                      <input
                        type="text"
                        name="emergencyContactName"
                        required
                        value={formData.emergencyContactName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Emergency contact name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Contact Phone *</label>
                      <input
                        type="tel"
                        name="emergencyContactPhone"
                        required
                        value={formData.emergencyContactPhone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Emergency contact phone"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Relationship *</label>
                      <select
                        name="emergencyContactRelation"
                        required
                        value={formData.emergencyContactRelation}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select Relationship</option>
                        <option value="parent">Parent</option>
                        <option value="guardian">Guardian</option>
                        <option value="spouse">Spouse</option>
                        <option value="sibling">Sibling</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Document Upload Note */}
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <div className="flex items-start">
                    <Upload className="h-5 w-5 text-yellow-600 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-yellow-800 mb-1">Required Documents</h5>
                      <p className="text-sm text-yellow-700">
                        After submitting this form, you will need to upload: 10th & 12th mark sheets, 
                        transfer certificate, passport size photos, and ID proof. Our admission team will contact you with upload instructions.
                      </p>
                    </div>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:shadow-xl'
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Submitting Application...</span>
                    </div>
                  ) : (
                    'Submit Application'
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Success Popup */}
      <SuccessPopup
        isVisible={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
        type="admission"
      />
    </section>
  );
};

export default NursingCollege;