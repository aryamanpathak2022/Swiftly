// NavigationBar.js

import React from 'react';
// import { Link } from 'react-router-dom';

import './css/navigationBar.css'


const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li class="logo">
            Swiftly
        </li>
        <li class ="navitems">
           Home
        
        </li>
        <li class ="navitems">            
         About
        </li>
        <li class ="navitems">
        Rent
        </li>
        <li class ="navitems">
         Lend
        </li>
        <li class ="navitems">

         Contact
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
