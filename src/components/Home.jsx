import React from "react";
import ImageSlider from "./ImageSlider";
import SlideData from "./SlideData";

function Home() {
  return (
    // Page
    <div className="w-full h-screen bg-black text-white flex-col">
      {/* Container */}
      <div className="w-screen mx-auto flex flex-auto justify-evenly items-center h-full text-2xl pt-20 px-10">
        <div className="w-[2300px] h-[500px] ">
          <ImageSlider slides={SlideData} />
        </div>
        <div className="w-auto p-3">
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
