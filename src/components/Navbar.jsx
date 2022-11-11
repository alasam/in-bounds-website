import React from "react";
import { IoBasketballOutline } from "react-icons/io5";

function Navbar() {
  return (
    <div className="fixed z-50 w-full h-[80px] flex justify-between items-center px-6 bg-black bg-opacity-50 text-white">
      <div>
        <h1 className="tracking-widest text-5xl">
          <IoBasketballOutline />
        </h1>
      </div>

      <ul className="flex gap-5 text-xl px-2">
        <li>
          <p>Home</p>
        </li>
        <li>
          <p>About</p>
        </li>
        <li>
          <p>Schedule</p>
        </li>
        <li>
          <p>Contact</p>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
