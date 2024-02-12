// Import necessary components from react-router-dom
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Import your components (replace 'LandingPage' with your actual component name)
import LandingPage from './pages/LandingPage'; // Adjust the path as needed
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Dashboard from './pages/Dasboard';

// Your App component (replace 'App' with your actual component name)
function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/SignUp" element={<SignUpPage />} />
          <Route path="/dashboard" element={<Dashboard />} />


          {/* Other routes go here */}
        </Routes>
      </BrowserRouter>

  );
}

export default App;
