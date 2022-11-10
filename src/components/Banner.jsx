import React from "react";
import { GiBasketballBasket } from "react-icons/gi";
import court from "../assets/court.jpg";
import highlight from "../assets/highlight.mp4";

function Banner() {
  return (
    <div className="w-full h-screen bg-black pt-[80px]">
      {" "}
      <video src={highlight} autoPlay loop muted />
      <div className="content">
        <h1 className="text-white text-8xl underline decoration-blue-500 py-1 flex flex-nowrap">
          <GiBasketballBasket size="150px" />
          INBOUNDS MINISTRIES
        </h1>
        <p className="text-white text-4xl">Young Adults Basketball Ministry</p>
        <p className="text-white text-4xl">Bramalea Baptist Church</p>
      </div>
    </div>
  );
}

export default Banner;
