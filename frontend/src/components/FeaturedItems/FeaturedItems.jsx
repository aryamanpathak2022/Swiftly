import React from "react";
import "./FeaturedItems.css";

const FeaturedItems = () => {
  const shiftCards = (direction) => {
    const carouselItems = document.querySelectorAll('.card');
    const elems = Array.from(carouselItems);

    if (direction === 'left') {
      const lastElement = elems.pop();
      elems.unshift(lastElement);
    } else if (direction === 'right') {
      const firstElement = elems.shift();
      elems.push(firstElement);
    }

    elems.forEach((element, index) => {
      const currentClass = element.classList[1];
      const currentNumber = parseInt(currentClass.split('_')[1]);
      const newClass = `card_${(currentNumber % 6) + 1}`;

      element.classList.remove(currentClass);
      element.classList.add(newClass);
    });
  };

  return (
    <>
      <div className="card_carousel flex justify-center">
        <button onClick={() => shiftCards('left')}>Left</button>
        <div className="card card_1" key="1">
          1
        </div>
        <div className="card card_2" key="2">
          2
        </div>
        <div className="card card_3" key="3">
          3
        </div>
        <div className="card card_4" key="4">
          4
        </div>
        <div className="card card_5" key="5">
          5
        </div>
        <div className="card card_6" key="6">
          6
        </div>
        <button className="z:20" onClick={() => shiftCards('right')}>Right</button>
      </div>
    </>
  );
};

export default FeaturedItems;
