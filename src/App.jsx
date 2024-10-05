import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import StudentManagement from './component/StudentManagement';
import CourseManagement from './component/CourseManagement';
import FacultyManagement from './component/FacultyManagement';
import './App.css';  // Import CSS

function App() {
  // State to manage login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div>
      <h1 style={{ textAlign: "center" }}>College Management System</h1>

        
        {/* Login/Logout Section */}
        <div className="auth-section">
          {isLoggedIn ? (
            <>
              <p>Welcome! You are logged in.</p>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <p>Please login to access the system.</p>
              <button onClick={handleLogin}>Login</button>
            </>
          )}
        </div>

        {/* Navigation Menu */}
        {isLoggedIn && (
          <nav>
            <ul>
              <li><Link to="/">Dashboard</Link></li>
              <li><Link to="/students">Students</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/faculty">Faculty</Link></li>
            </ul>
          </nav>
        )}
        
        <div className="container">
          <Routes>
            {/* Ensure user is logged in to access the routes */}
            {isLoggedIn ? (
              <>
                <Route path="/" element={<Dashboard />} />
                <Route path="/students" element={<StudentManagement />} />
                <Route path="/courses" element={<CourseManagement />} />
                <Route path="/faculty" element={<FacultyManagement />} />
              </>
            ) : (
              <Route path="/" element={<p>Please log in to access this content.</p>} />
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
