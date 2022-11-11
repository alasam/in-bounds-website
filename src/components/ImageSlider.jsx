import React, { useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

function ImageSlider({ slides }) {
  const [currentIndex, setCurrentUser] = useState(0);

  return (
    <div className="h-[100%] relative">
      <div className="absolute top-[50%] left-[32px] text-[45px] text-[#fff] z-1 cursor-pointer translate-y-[-50%]">
        <BiLeftArrow />
      </div>
      <div className="absolute top-[50%] right-[32px] text-[45px] text-[#fff] z-1 cursor-pointer translate-y-[-50%]">
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
