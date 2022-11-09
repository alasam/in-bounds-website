import React from "react";
import { highlightVid } from "../assets/inbounds highlight video.mp4";

function Home() {
  return (
    <div className="w-full h-screen bg-opacity-50">
      <div class="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
        Welcome to my site!
      </div>
      <highlightVid />
      <video
        controls
        muted
        autoPlay={"autoplay"}
        loop
        class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
      >
        <source
          src="https://github.com/alasam/in-bounds-website/blob/main/src/assets/inbounds%20highlight%20video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <script>document.getElementById('vid').play();</script>
    </div>
  );
}

export default Home;
