import React from "react";
import court from "../assets/court.jpg";
import highlight from "../assets/highlight.mp4";

function Banner() {
  return (
    <div className="w-full h-screen bg-black pt-[80px]">
      {" "}
      <video src={highlight} autoPlay loop muted />
    </div>
  );
}

export default Banner;
