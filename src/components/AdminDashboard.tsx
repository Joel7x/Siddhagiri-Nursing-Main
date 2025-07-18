import React, { useState, useEffect } from 'react';
import { Users, GraduationCap, Calendar, Phone, Mail, MapPin, Eye, Download, Filter, Search, LogOut, Shield, FileText, Clock, CheckCircle, AlertCircle, User, Edit, Trash2, X, UserCheck, UserX, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabase';
import AdminLogin from './AdminLogin';

interface AdmissionForm {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  date_of_birth: string;
  gender: string;
  course: string;
  tenth_percentage: number;
  twelfth_percentage: number;
  neet_score?: number;
  address: string;
  emergency_contact_name: string;
  emergency_contact_phone: string;
  motivation: string;
  created_at: string;
}



interface AdminUser {
  id: string;
  username: string;
  email: string;
  role: string;
  last_login: string;
  status: 'active' | 'inactive';
  created_at: string;
}

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);
  const [activeTab, setActiveTab] = useState<'admissions' | 'users'>('admissions');
  const [admissionForms, setAdmissionForms] = useState<AdmissionForm[]>([]);
  const [adminUsers, setAdminUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCourse, setFilterCourse] = useState('');
  const [selectedForm, setSelectedForm] = useState<AdmissionForm | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<AdminUser | null>(null);

  // Mock admin users data
  const mockAdminUsers: AdminUser[] = [
    {
      id: '1',
      username: 'admin',
      email: 'admin@siddhagirinstitute.com',
      role: 'Super Admin',
      last_login: new Date().toISOString(),
      status: 'active',
      created_at: '2024-01-01T00:00:00Z'
    },
    {
      id: '2',
      username: 'principal',
      email: 'principal@siddhagirinstitute.com',
      role: 'Principal',
      last_login: new Date(Date.now() - 86400000).toISOString(),
      status: 'active',
      created_at: '2024-01-15T00:00:00Z'
    },
    {
      id: '3',
      username: 'registrar',
      email: 'registrar@siddhagirinstitute.com',
      role: 'Registrar',
      last_login: new Date(Date.now() - 172800000).toISOString(),
      status: 'active',
      created_at: '2024-02-01T00:00:00Z'
    },
    {
      id: '4',
      username: 'coordinator',
      email: 'coordinator@siddhagirinstitute.com',
      role: 'Admission Coordinator',
      last_login: new Date(Date.now() - 604800000).toISOString(),
      status: 'inactive',
      created_at: '2024-02-15T00:00:00Z'
    }
  ];

  const handleLogin = (credentials: { username: string; password: string }) => {
    // Simple authentication (in production, use proper auth)
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      setIsAuthenticated(true);
      setCurrentUser(mockAdminUsers[0]);
      setAdminUsers(mockAdminUsers);
      setLoginError('');
      fetchForms();
    } else {
      setLoginError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    setLoginError('');
    // Navigate back to main site
    window.location.hash = '';
  };

  const fetchForms = async () => {
    setLoading(true);
    try {
      // Fetch admission forms
      const { data: admissions, error: admissionError } = await supabase
        .from('admission_forms')
        .select('*')
        .order('created_at', { ascending: false });

      if (admissionError) throw admissionError;
      setAdmissionForms(admissions || []);


    } catch (error) {
      console.error('Error fetching forms:', error);
    } finally {
      setLoading(false);
    }
  };

  const exportToCSV = (data: any[], filename: string) => {
    const headers = Object.keys(data[0] || {});
    const csvContent = [
      headers.join(','),
      ...data.map(row => headers.map(header => `"${row[header] || ''}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const toggleUserStatus = (userId: string) => {
    setAdminUsers(users => 
      users.map(user => 
        user.id === userId 
          ? { ...user, status: user.status === 'active' ? 'inactive' : 'active' }
          : user
      )
    );
  };

  const filteredAdmissions = admissionForms.filter(form => {
    const matchesSearch = form.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         form.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         form.phone.includes(searchTerm);
    const matchesCourse = !filterCourse || form.course === filterCourse;
    return matchesSearch && matchesCourse;
  });



  const filteredUsers = adminUsers.filter(user => {
    return user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
           user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
           user.role.toLowerCase().includes(searchTerm.toLowerCase());
  });

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} error={loginError} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Enhanced Header */}
      <div className="bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <Shield className="h-6 w-6 text-white" />
              </motion.div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Admin Dashboard
                </h1>
                <p className="text-sm text-gray-600">Siddhagiri Institute Management</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Current User Info */}
              <div className="hidden md:flex items-center space-x-3 bg-blue-50 px-4 py-2 rounded-xl">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{currentUser?.username}</p>
                  <p className="text-xs text-gray-600">{currentUser?.role}</p>
                </div>
              </div>
              
              <motion.button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 bg-red-100 text-red-700 rounded-xl hover:bg-red-200 transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 relative overflow-hidden"
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-full -mr-10 -mt-10"></div>
            <div className="flex items-center space-x-3 relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Admissions</p>
                <p className="text-2xl font-bold text-gray-900">{admissionForms.length}</p>
              </div>
            </div>
          </motion.div>



          <motion.div
            className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 relative overflow-hidden"
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full -mr-10 -mt-10"></div>
            <div className="flex items-center space-x-3 relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Admin Users</p>
                <p className="text-2xl font-bold text-gray-900">{adminUsers.length}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 relative overflow-hidden"
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-full -mr-10 -mt-10"></div>
            <div className="flex items-center space-x-3 relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Today's Forms</p>
                <p className="text-2xl font-bold text-gray-900">
                  {admissionForms.filter(form => 
                    new Date(form.created_at).toDateString() === new Date().toDateString()
                  ).length}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 relative overflow-hidden"
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full -mr-10 -mt-10"></div>
            <div className="flex items-center space-x-3 relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Active Users</p>
                <p className="text-2xl font-bold text-gray-900">
                  {adminUsers.filter(user => user.status === 'active').length}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Tabs */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 mb-6">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('admissions')}
              className={`flex-1 px-6 py-4 text-center font-semibold transition-all duration-300 ${
                activeTab === 'admissions'
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/50'
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <GraduationCap className="h-5 w-5" />
                <span>Admission Forms ({admissionForms.length})</span>
              </div>
            </button>

            <button
              onClick={() => setActiveTab('users')}
              className={`flex-1 px-6 py-4 text-center font-semibold transition-all duration-300 ${
                activeTab === 'users'
                  ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50'
                  : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50/50'
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Admin Users ({adminUsers.length})</span>
              </div>
            </button>
          </div>

          {/* Filters and Search */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder={
                      activeTab === 'admissions' ? "Search by name, email, or phone..." :
                      "Search by username, email, or role..."
                    }
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50"
                  />
                </div>
              </div>
              
              {activeTab === 'admissions' && (
                <div className="sm:w-48">
                  <select
                    value={filterCourse}
                    onChange={(e) => setFilterCourse(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50"
                  >
                    <option value="">All Courses</option>
                    <option value="B.Sc. Nursing">B.Sc. Nursing</option>
                    <option value="GNM Nursing">GNM Nursing</option>
                    <option value="P.B.B.Sc. Nursing">P.B.B.Sc. Nursing</option>
                    <option value="M.Sc. Nursing">M.Sc. Nursing</option>
                  </select>
                </div>
              )}

              <motion.button
                onClick={() => {
                  const data = activeTab === 'admissions' ? filteredAdmissions : filteredUsers;
                  exportToCSV(data, `${activeTab}_${new Date().toISOString().split('T')[0]}`);
                }}
                className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="h-4 w-4" />
                <span>Export CSV</span>
              </motion.button>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-6">
            {loading ? (
              <div className="text-center py-12">
                <motion.div 
                  className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                ></motion.div>
                <p className="text-gray-600 mt-4">Loading data...</p>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Admission Forms */}
                {activeTab === 'admissions' && (
                  filteredAdmissions.length > 0 ? (
                    filteredAdmissions.map((form) => (
                      <motion.div
                        key={form.id}
                        className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
                        whileHover={{ scale: 1.01, y: -2 }}
                        onClick={() => {
                          setSelectedForm(form);
                          setShowModal(true);
                        }}
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                                <GraduationCap className="h-5 w-5 text-white" />
                              </div>
                              <div>
                                <h3 className="font-bold text-gray-900 text-lg">{form.full_name}</h3>
                                <p className="text-blue-600 font-semibold">{form.course}</p>
                              </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                              <div className="flex items-center space-x-2">
                                <Mail className="h-4 w-4 text-gray-500" />
                                <span className="text-gray-700">{form.email}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Phone className="h-4 w-4 text-gray-500" />
                                <span className="text-gray-700">{form.phone}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Calendar className="h-4 w-4 text-gray-500" />
                                <span className="text-gray-700">
                                  {new Date(form.created_at).toLocaleDateString()}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                              {form.tenth_percentage}% (10th)
                            </div>
                            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                              {form.twelfth_percentage}% (12th)
                            </div>
                            <Eye className="h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <GraduationCap className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-600 text-lg">No admission forms found</p>
                    </div>
                  )
                )}



                {/* Admin Users */}
                {activeTab === 'users' && (
                  filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                      <motion.div
                        key={user.id}
                        className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200 hover:shadow-lg transition-all duration-300"
                        whileHover={{ scale: 1.01, y: -2 }}
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                                <User className="h-5 w-5 text-white" />
                              </div>
                              <div>
                                <h3 className="font-bold text-gray-900 text-lg">{user.username}</h3>
                                <p className="text-purple-600 font-semibold">{user.role}</p>
                              </div>
                              <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                user.status === 'active' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-red-100 text-red-800'
                              }`}>
                                {user.status === 'active' ? 'Active' : 'Inactive'}
                              </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                              <div className="flex items-center space-x-2">
                                <Mail className="h-4 w-4 text-gray-500" />
                                <span className="text-gray-700">{user.email}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Clock className="h-4 w-4 text-gray-500" />
                                <span className="text-gray-700">
                                  Last login: {new Date(user.last_login).toLocaleDateString()}
                                </span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Calendar className="h-4 w-4 text-gray-500" />
                                <span className="text-gray-700">
                                  Created: {new Date(user.created_at).toLocaleDateString()}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <motion.button
                              onClick={() => {
                                setSelectedUser(user);
                                setShowUserModal(true);
                              }}
                              className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors duration-200"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Eye className="h-4 w-4" />
                            </motion.button>
                            <motion.button
                              onClick={() => toggleUserStatus(user.id)}
                              className={`p-2 rounded-lg transition-colors duration-200 ${
                                user.status === 'active'
                                  ? 'bg-red-100 text-red-600 hover:bg-red-200'
                                  : 'bg-green-100 text-green-600 hover:bg-green-200'
                              }`}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {user.status === 'active' ? <UserX className="h-4 w-4" /> : <UserCheck className="h-4 w-4" />}
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <Users className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-600 text-lg">No admin users found</p>
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Form Details Modal */}
      <AnimatePresence>
        {showModal && selectedForm && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold text-gray-900">
                    {activeTab === 'admissions' ? 'Admission Form Details' : 'Contact Form Details'}
                  </h2>
                  <button
                    onClick={() => setShowModal(false)}
                    className="p-2 hover:bg-gray-100 rounded-xl transition-colors duration-200"
                  >
                    <X className="h-6 w-6 text-gray-500" />
                  </button>
                </div>

                {activeTab === 'admissions' ? (
                  <div className="space-y-6">
                    {/* Personal Information */}
                    <div className="bg-blue-50 p-6 rounded-2xl">
                      <h3 className="text-xl font-bold text-blue-900 mb-4">Personal Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-semibold text-gray-700">Full Name</label>
                          <p className="text-gray-900 font-medium">{(selectedForm as AdmissionForm).full_name}</p>
                        </div>
                        <div>
                          <label className="text-sm font-semibold text-gray-700">Date of Birth</label>
                          <p className="text-gray-900 font-medium">{(selectedForm as AdmissionForm).date_of_birth}</p>
                        </div>
                        <div>
                          <label className="text-sm font-semibold text-gray-700">Gender</label>
                          <p className="text-gray-900 font-medium">{(selectedForm as AdmissionForm).gender}</p>
                        </div>
                        <div>
                          <label className="text-sm font-semibold text-gray-700">Course</label>
                          <p className="text-blue-600 font-bold">{(selectedForm as AdmissionForm).course}</p>
                        </div>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-green-50 p-6 rounded-2xl">
                      <h3 className="text-xl font-bold text-green-900 mb-4">Contact Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-semibold text-gray-700">Email</label>
                          <p className="text-gray-900 font-medium">{(selectedForm as AdmissionForm).email}</p>
                        </div>
                        <div>
                          <label className="text-sm font-semibold text-gray-700">Phone</label>
                          <p className="text-gray-900 font-medium">{(selectedForm as AdmissionForm).phone}</p>
                        </div>
                        <div className="md:col-span-2">
                          <label className="text-sm font-semibold text-gray-700">Address</label>
                          <p className="text-gray-900 font-medium">{(selectedForm as AdmissionForm).address}</p>
                        </div>
                      </div>
                    </div>

                    {/* Academic Information */}
                    <div className="bg-purple-50 p-6 rounded-2xl">
                      <h3 className="text-xl font-bold text-purple-900 mb-4">Academic Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="text-sm font-semibold text-gray-700">10th Percentage</label>
                          <p className="text-gray-900 font-bold text-lg">{(selectedForm as AdmissionForm).tenth_percentage}%</p>
                        </div>
                        <div>
                          <label className="text-sm font-semibold text-gray-700">12th Percentage</label>
                          <p className="text-gray-900 font-bold text-lg">{(selectedForm as AdmissionForm).twelfth_percentage}%</p>
                        </div>
                        {(selectedForm as AdmissionForm).neet_score && (
                          <div>
                            <label className="text-sm font-semibold text-gray-700">NEET Score</label>
                            <p className="text-gray-900 font-bold text-lg">{(selectedForm as AdmissionForm).neet_score}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Emergency Contact */}
                    <div className="bg-orange-50 p-6 rounded-2xl">
                      <h3 className="text-xl font-bold text-orange-900 mb-4">Emergency Contact</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-semibold text-gray-700">Contact Name</label>
                          <p className="text-gray-900 font-medium">{(selectedForm as AdmissionForm).emergency_contact_name}</p>
                        </div>
                        <div>
                          <label className="text-sm font-semibold text-gray-700">Contact Phone</label>
                          <p className="text-gray-900 font-medium">{(selectedForm as AdmissionForm).emergency_contact_phone}</p>
                        </div>
                      </div>
                    </div>

                    {/* Motivation */}
                    <div className="bg-pink-50 p-6 rounded-2xl">
                      <h3 className="text-xl font-bold text-pink-900 mb-4">Motivation</h3>
                      <p className="text-gray-900 leading-relaxed">{(selectedForm as AdmissionForm).motivation}</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="bg-green-50 p-6 rounded-2xl">
                      <h3 className="text-xl font-bold text-green-900 mb-4">Contact Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-semibold text-gray-700">Name</label>
                          <p className="text-gray-900 font-medium">{(selectedForm as ContactForm).name}</p>
                        </div>
                        <div>
                          <label className="text-sm font-semibold text-gray-700">Email</label>
                          <p className="text-gray-900 font-medium">{(selectedForm as ContactForm).email}</p>
                        </div>
                        <div>
                          <label className="text-sm font-semibold text-gray-700">Phone</label>
                          <p className="text-gray-900 font-medium">{(selectedForm as ContactForm).phone}</p>
                        </div>
                        <div>
                          <label className="text-sm font-semibold text-gray-700">Department</label>
                          <p className="text-green-600 font-bold">{(selectedForm as ContactForm).department || 'General'}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-2xl">
                      <h3 className="text-xl font-bold text-blue-900 mb-4">Message</h3>
                      <p className="text-gray-900 leading-relaxed">{(selectedForm as ContactForm).message}</p>
                    </div>
                  </div>
                )}

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500">
                    Submitted on {new Date(selectedForm.created_at).toLocaleString()}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* User Details Modal */}
      <AnimatePresence>
        {showUserModal && selectedUser && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold text-gray-900">User Details</h2>
                  <button
                    onClick={() => setShowUserModal(false)}
                    className="p-2 hover:bg-gray-100 rounded-xl transition-colors duration-200"
                  >
                    <X className="h-6 w-6 text-gray-500" />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* User Profile */}
                  <div className="bg-purple-50 p-6 rounded-2xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
                        <User className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{selectedUser.username}</h3>
                        <p className="text-purple-600 font-semibold">{selectedUser.role}</p>
                        <div className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold mt-2 ${
                          selectedUser.status === 'active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {selectedUser.status === 'active' ? 'Active' : 'Inactive'}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="bg-blue-50 p-6 rounded-2xl">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Contact Information</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label className="text-sm font-semibold text-gray-700">Email Address</label>
                        <p className="text-gray-900 font-medium">{selectedUser.email}</p>
                      </div>
                    </div>
                  </div>

                  {/* Activity Information */}
                  <div className="bg-green-50 p-6 rounded-2xl">
                    <h3 className="text-xl font-bold text-green-900 mb-4">Activity Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-semibold text-gray-700">Last Login</label>
                        <p className="text-gray-900 font-medium">
                          {new Date(selectedUser.last_login).toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-gray-700">Account Created</label>
                        <p className="text-gray-900 font-medium">
                          {new Date(selectedUser.created_at).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex justify-end space-x-3">
                    <motion.button
                      onClick={() => toggleUserStatus(selectedUser.id)}
                      className={`px-6 py-2 rounded-xl font-semibold transition-all duration-300 ${
                        selectedUser.status === 'active'
                          ? 'bg-red-100 text-red-700 hover:bg-red-200'
                          : 'bg-green-100 text-green-700 hover:bg-green-200'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {selectedUser.status === 'active' ? 'Deactivate User' : 'Activate User'}
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminDashboard;