import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import MessageBox from './components/MessageBox';
import HomePage from './pages/HomePage';
import ApplyForJobsPage from './pages/ApplyForJobsPage';
import ProfilePage from './pages/ProfilePage';
import RecruiterDashboardPage from './pages/RecruiterDashboardPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import AuthSelectionPage from './components/AuthSelectionPage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [userId, setUserId] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(null);
  const [authUserType, setAuthUserType] = useState(null);
  const [messageBox, setMessageBox] = useState(null);
  const [docStatus, setDocStatus] = useState('Verification Pending');

  const showMessage = (message, type) => {
    setMessageBox({ message, type });
  };

  const closeMessageBox = () => {
    setMessageBox(null);
  };

  useEffect(() => {
    const storedUserId = localStorage.getItem('ascraUserId');
    const storedUserType = localStorage.getItem('ascraUserType');
    const storedDocStatus = localStorage.getItem('ascraDocStatus');

    if (storedUserId && storedUserType) {
      setUserId(storedUserId);
      setUserType(storedUserType);
      setIsLoggedIn(true);
      if (storedDocStatus) {
        setDocStatus(storedDocStatus);
      }
    } else {
      const generatedUserId = `anon_${Math.random().toString(36).substring(2, 11)}`;
      setUserId(generatedUserId);
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn && userType === 'student') {
      localStorage.setItem('ascraDocStatus', docStatus);
    }
  }, [docStatus, isLoggedIn, userType]);

  const handleLogin = (identifier, type) => {
    const newUserId = `${type}_${identifier.replace(/[^a-zA-Z0-9]/g, '_')}_${Math.random().toString(36).substring(2, 6)}`;
    setUserId(newUserId);
    setUserType(type);
    setIsLoggedIn(true);
    localStorage.setItem('ascraUserId', newUserId);
    localStorage.setItem('ascraUserType', type);
    if (type === 'student') {
      setDocStatus('Verification Pending');
      localStorage.setItem('ascraDocStatus', 'Verification Pending');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserType(null);
    setAuthUserType(null);
    setUserId(`anon_${Math.random().toString(36).substring(2, 11)}`);
    localStorage.removeItem('ascraUserId');
    localStorage.removeItem('ascraUserType');
    localStorage.removeItem('ascraDocStatus');
    showMessage('Logged out successfully!', 'success');
    setCurrentPage('home');
  };

  useEffect(() => {
    const protectedStudentPages = ['apply-jobs', 'profile'];
    const protectedRecruiterPages = ['recruiter-dashboard'];

    if (protectedStudentPages.includes(currentPage)) {
      if (!isLoggedIn) {
        showMessage('Please log in as a student to access this page.', 'error');
        setCurrentPage('auth-selection');
      } else if (userType !== 'student') {
        showMessage('Access denied. This page is for students.', 'error');
        setCurrentPage('home');
      }
    } else if (protectedRecruiterPages.includes(currentPage)) {
      if (!isLoggedIn) {
        showMessage('Please log in as a recruiter to access this page.', 'error');
        setCurrentPage('auth-selection');
      } else if (userType !== 'recruiter') {
        showMessage('Access denied. This page is for recruiters.', 'error');
        setCurrentPage('home');
      }
    }
  }, [currentPage, isLoggedIn, userType]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'apply-jobs':
        return (isLoggedIn && userType === 'student')
          ? <ApplyForJobsPage docStatus={docStatus} setDocStatus={setDocStatus} showMessage={showMessage} />
          : null;
      case 'profile':
        return (isLoggedIn && userType === 'student')
          ? <ProfilePage userId={userId} showMessage={showMessage} />
          : null;
      case 'recruiter-dashboard':
        return (isLoggedIn && userType === 'recruiter')
          ? <RecruiterDashboardPage userId={userId} showMessage={showMessage} />
          : null;
      case 'resources':
        return <ResourcesPage />;
      case 'contact':
        return <ContactPage />;
      case 'auth-selection':
        return <AuthSelectionPage setCurrentPage={setCurrentPage} setAuthUserType={setAuthUserType} />;
      case 'login':
        if (!authUserType) return <AuthSelectionPage setCurrentPage={setCurrentPage} setAuthUserType={setAuthUserType} />;
        return <LoginPage setCurrentPage={setCurrentPage} handleLogin={handleLogin} showMessage={showMessage} userType={authUserType} setAuthUserType={setAuthUserType} />;
      case 'signup':
        if (!authUserType) return <AuthSelectionPage setCurrentPage={setCurrentPage} setAuthUserType={setAuthUserType} />;
        return <SignUpPage setCurrentPage={setCurrentPage} handleLogin={handleLogin} showMessage={showMessage} userType={authUserType} setAuthUserType={setAuthUserType} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
          body {
            font-family: 'Inter', sans-serif;
          }
        `}
      </style>
      <Header setCurrentPage={setCurrentPage} isLoggedIn={isLoggedIn} handleLogout={handleLogout} userType={userType} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <footer className="bg-gray-800 text-white py-6 text-center text-sm font-inter mt-auto">
        <p>&copy; {new Date().getFullYear()} ascra. All rights reserved.</p>
        <p className="mt-2 text-gray-400">
          <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }} className="hover:underline mx-2">Home</a> |
          <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); }} className="hover:underline mx-2">Contact</a> |
          <a href="#" onClick={(e) => { e.preventDefault(); }} className="hover:underline mx-2">Privacy Policy</a>
        </p>
      </footer>
      {messageBox && (
        <MessageBox
          message={messageBox.message}
          type={messageBox.type}
          onClose={closeMessageBox}
        />
      )}
    </div>
  );
};

export default App;
