import React from "react";
import banner from "../assets/banner.PNG";
import court from "../assets/court.jpg";
import video from "../assets/highlight.mp4";
import slide1 from "../assets/slide1.jpeg";
import ImageSlider from "./ImageSlider";

function Home() {
  const slides = [
    { url: court, title: "Slide1" },
    { url: slide1, title: "Slide2" },
    { url: banner, title: "Slide3" },
  ];

  return (
    // Page
    <div className="w-full h-screen bg-black text-white flex-col">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-2xl">
        <div className="w-[500px] h-[280px] m-auto ">
          <ImageSlider slides={slides} />
        </div>
        <div>
          <p>
            {" "}
            A glimpse at our newest young adult sport ministry, In Bounds
            Basketball!
          </p>
          <br />
          <p>
            Grow your faith in Christ with other young adults through basketball
            and fellowship. There are full court pick-up games throughout the
            night and midway through we do our devotional and discussion!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
