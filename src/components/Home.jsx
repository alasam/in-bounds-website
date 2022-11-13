import React from "react";
import ImageSlider from "./ImageSlider";
import SlideData from "./SlideData";

function Home() {
  return (
    // Page
    <div className="w-full h-screen bg-black text-white flex-col">
      {/* Container */}
      <div className="max-w-screen-lg mx-auto flex flex-auto justify-evenly h-full text-2xl">
        <div className="w-[1600px] h-[400px] m-auto ">
          <ImageSlider slides={SlideData} />
        </div>
        <div className="w-auto">
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
