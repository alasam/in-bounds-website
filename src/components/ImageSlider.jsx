import React, { useState } from "react";

function ImageSlider({ slides }) {
  const [currentIndex, setCurrentUser] = useState(0);

  return (
    <div>
      <div
        className=" w-[100%] h-[100%] rounded-xl bg-center bg-cover"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>
    </div>
  );
}

export default ImageSlider;
