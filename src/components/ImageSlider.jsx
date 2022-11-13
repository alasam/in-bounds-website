import React, { useEffect, useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // back button function
  const goBack = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  // forward button function
  const goNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // slider timer and automation
  useEffect(() => {
    const slideInterval = setInterval(() => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);

      return () => clearInterval(slideInterval);
    }, 5000);
  });

  return (
    <div className="h-[100%] relative">
      <div
        onClick={goBack}
        className="absolute top-[50%] left-[32px] text-[45px] text-[#fff] z-1 cursor-pointer translate-y-[-50%]"
      >
        <BiLeftArrow />
      </div>
      <div
        onClick={goNext}
        className="absolute top-[50%] right-[32px] text-[45px] text-[#fff] z-1 cursor-pointer translate-y-[-50%]"
      >
        <BiRightArrow />
      </div>
      <div
        className=" w-[100%] h-[100%] rounded-xl bg-center bg-cover"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>
    </div>
  );
}

export default ImageSlider;
