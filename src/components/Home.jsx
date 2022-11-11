import React from "react";
import video from "../assets/highlight.mp4";

function Home() {
  const slides = [
    { slide: {}, title: "Slide1" },
    { slide: {}, title: "Slide2" },
    { slide: {}, title: "Slide3" },
  ];

  return (
    // Page
    <div className="w-full h-screen bg-black text-white flex-col">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-2xl">
        <div>{/* image slides here eventually */}</div>
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
