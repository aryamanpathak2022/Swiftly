import React from "react";
import Slider from "react-slick";
import "./FeaturedItems.css";
// Import Slick carousel styles

// Import Slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FeaturedItems() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
       
      };
  return (
    <div className="h-[500px] relative bg-blue">
      <div className="absolute title gtop-0 left-1/2 transform -translate-x-1/2 p-4 text-white text-5xl">
        Featured Items
      </div>

      <div className=" absolute top-40 w-full  ">
        
        <Slider {...settings}>
          {/* Example carousel cards, you can replace with your own data */}
          <div className="bg-orange border h-80   ">
          
            <div className="text-white text-center  mt-2">Item 1</div>
          </div>
          <div className="bg-orange h-80 ">
            
            <div className="text-white text-center mt-2 item">Item 2</div>
          </div>
          <div className="bg-orange h-80">
            
            <div className="text-white text-center mt-2">Item 4</div>
          </div>
          <div className="bg-orange h-80">
            
            <div className="text-white text-center mt-2">Item 5</div>
          </div>
          <div className="bg-orange h-80">
            
            <div className="text-white text-center mt-2">Item 6</div>
          </div>
          <div className="bg-orange h-80">
            
            <div className="text-white text-center mt-2">Item 7</div>
          </div>
          
          {/* Add more carousel cards as needed */}
        </Slider>
      </div>
    </div>
  );
}

export default FeaturedItems;
