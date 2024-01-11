// Importing React library
import React from 'react';
import NavBar from "../components/NavBar/NavBar.jsx"
import HeroSection from '../components/HeroSection/HeroSection.jsx';

// Functional component App
function LandingPage() {
  return (
    <div>
        <NavBar/>
        <HeroSection/>
     
    </div>
  );
}

// Exporting the component to be used in other files
export default LandingPage;
