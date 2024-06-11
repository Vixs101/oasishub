import React from "react";
import NavMenu from "./NavMenu";

function NavBar() {
  return (
    <>
      <nav className="flex justify-between text-white items-center w-full">
        <div className="md:w-1/4 lg:w-1/5">
          <img
            src="/images/logo.png"
            alt="Hub's Logo"
            className="md:h-16 md:w-full h-full w-28 cursor-pointer"
          />
        </div>
        <NavMenu />

        <ul className="hidden md:flex  md:w-5/7 lg:w-3/5 justify-between font-semibold md:text-base lg:text-lg cursor-pointer items-center gap-2">
          <li className="hover:border-b-4 hover:border-green-600">
            <a href="#features">About Us</a>
          </li>
          <li className="hover:border-b-4 hover:border-green-600">
            <a href="#events">Events</a>
          </li>
          <li className="hover:border-b-4 hover:border-green-600">
            <a href="#subscription">Subscription</a>
          </li>
          <li className="hover:border-b-4 hover:border-green-600">
          <a href="#contactUs">Contact Us</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
