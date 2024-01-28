import React, { useState } from "react";
import "./FeaturedItems.css";

const FeaturedItems = () => {
  const [left,setLeftCount]=useState(0);
  const [right,setRightCount]=useState(0);
  const shiftCards = (direction) => {
    const carouselItems = document.querySelectorAll('.card');
    const elems = Array.from(carouselItems);

    if (direction === 'left' ) {
      setLeftCount(1+left);
      for (const element of elems)
      {
        console.log(left);
      const currentClass = element.classList[2];
     
      const currentNumber = parseInt(currentClass.split('_')[1]);
      if(currentNumber===1)
      {
        const newClass = "card_3";
        element.classList.remove(currentClass);
        element.classList.add(newClass);
      }
      else
      {
        const newClass = `card_${((currentNumber - 1 +3) % 3)}`;
      element.classList.remove(currentClass);
      element.classList.add(newClass);
      }
      
    
    }
   
    }

   


     
    
  };

  return (
    <>
    <div className="relative bg1 ">
    <div className="text-6xl heading item-centre text-center mx-auto">Featured items</div>

      <div className="flex ">
        <button className="z:20 font-bold" onClick={() => shiftCards('left')}>
          LEFT
        </button>
      <div className="card_carousel  absolute top-0  ">
        <div className="  bg-orange card card_1  " key="1">
          1
        </div>
        <div className="  bg-orange card card_2 " key="2">
          2
        </div>
        <div className="  bg-orange card card_3 " key="3">
          3
        </div>  
      </div>
        <button className="z:20" onClick={() => shiftCards('right')}>
          Right
          </button>
        </div>
        </div>
    </>
  );
};

export default FeaturedItems;
