// Homepage.js

import React from 'react';
import './css/homepage.css'; // Import the corresponding CSS file for styling

const Homepage = () => {
  return (
    <div class="home">
    <div className="dual-part-container">
      {/* Upper Part */}
      <div className="upper-part">
       
       <div>
          {/* Replace 'your-image-url' with the actual URL of your image */}
          <img src={require('./assets/sofa.png')} alt="sofa" class="sofa" />  
          <img src={require('./assets/lamp.png')} alt="lamp" class = "lamp" />  
         
          </div>
          <img src={require('./assets/frame.png')} alt="frame" class="frame" />
      
        
        <div className="text-container">
          <h2 class="topic1">WANT TO  </h2>
            <h2 class="topic1_2">RENT ITEMS ?</h2>
          {/* <p>Description text goes here.</p> */}
        </div>
        <button class="rentbutton">
            Rent Now
        </button>
      </div>
      <div className="bottom-part">
       
      </div>  

      {/* Bottom Part */}
     
    </div>
    <div class="lower1">
    <img src={require('./assets/car.png')} alt="car" class="car" />
    <h2 class="topic2">OR WANT TO</h2>
            <h2 class="topic2_2">LEND ITEMS ?</h2>

    </div>
    <div class="lower2">

    </div>
    <button class="lendbutton">
           Lend Now
        </button>
    </div>
  );
};

export default Homepage;
