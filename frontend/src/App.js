import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Auth Components
import Login from './components/auth/Login';
import LeaderLogin from './components/auth/LeaderLogin';
import MemberRegister from './components/auth/MemberRegister';

// Dashboard Components
import AdminDashboard from './components/admin/AdminDashboard';
import MemberDashboard from './components/member/MemberDashboard';

// Page Components
import HomePage from './components/HomePage';
import AboutPage from './components/pages/AboutPage';
import EventsPage from './components/pages/EventsPage';
import MusicLibrary from './components/pages/MusicLibrary';
import GalleryPage from './components/pages/GalleryPage';
import ContactPage from './components/pages/ContactPage';

// Admin Components
import AdminMembers from './components/admin/AdminMembers';
import AdminEvents from './components/admin/AdminEvents';
import AdminAttendance from './components/admin/AdminAttendance';
import AdminReports from './components/admin/AdminReports';
import LeaderAnnouncements from './components/admin/LeaderAnnouncements';

// Member Components
import MemberProfile from './components/member/MemberProfile';
import MemberMessages from './components/member/MemberMessages';
import MemberAttendance from './components/member/MemberAttendance';

function App() {
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      try {
        setAuth(JSON.parse(user));
      } catch (e) {
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setAuth(null);
    window.location.href = '/';
  };

  const ProtectedRoute = ({ children, allowedRoles }) => {
    if (loading) {
      return (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      );
    }
    
    if (!auth) {
      return <Navigate to="/login" />;
    }
    
    if (allowedRoles && !allowedRoles.includes(auth.role)) {
      return <Navigate to="/" />;
    }
    
    return children;
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        <Header auth={auth} onLogout={handleLogout} />
        
        <main className="flex-grow-1">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/music" element={<MusicLibrary />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<Login setAuth={setAuth} />} />
            <Route path="/leader-login" element={<LeaderLogin setAuth={setAuth} />} />
            <Route path="/register" element={<MemberRegister />} />
            
            {/* Member Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute allowedRoles={['Member', 'Volunteer', 'Director', 'Leader', 'Admin']}>
                <MemberDashboard />
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute allowedRoles={['Member', 'Volunteer', 'Director', 'Leader', 'Admin']}>
                <MemberProfile />
              </ProtectedRoute>
            } />
            <Route path="/member/messages" element={
              <ProtectedRoute allowedRoles={['Member', 'Volunteer', 'Director']}>
                <MemberMessages />
              </ProtectedRoute>
            } />
            <Route path="/member/attendance" element={
              <ProtectedRoute allowedRoles={['Member', 'Volunteer', 'Director']}>
                <MemberAttendance />
              </ProtectedRoute>
            } />
            
            {/* Leader/Admin Routes */}
            <Route path="/admin" element={
              <ProtectedRoute allowedRoles={['Admin', 'Leader']}>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin/members" element={
              <ProtectedRoute allowedRoles={['Admin', 'Leader']}>
                <AdminMembers />
              </ProtectedRoute>
            } />
            <Route path="/admin/events" element={
              <ProtectedRoute allowedRoles={['Admin', 'Leader']}>
                <AdminEvents />
              </ProtectedRoute>
            } />
            <Route path="/admin/attendance" element={
              <ProtectedRoute allowedRoles={['Admin', 'Leader']}>
                <AdminAttendance />
              </ProtectedRoute>
            } />
            <Route path="/admin/reports" element={
              <ProtectedRoute allowedRoles={['Admin', 'Leader']}>
                <AdminReports />
              </ProtectedRoute>
            } />
            <Route path="/admin/announcements" element={
              <ProtectedRoute allowedRoles={['Admin', 'Leader']}>
                <LeaderAnnouncements />
              </ProtectedRoute>
            } />
            
            {/* 404 Route */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;