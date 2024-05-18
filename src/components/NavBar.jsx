import React from "react";

function NavBar() {
  return (
    <>
      <nav className="flex justify-between text-white items-center w-full">
        <div className="">
          <img src="/images/logo.png" alt="Hub's Logo" className="md:h-16 md:w-full h-12 w-12"/>
        </div>
        <ul className="flex w-1/3 justify-between font-semibold text-lg cursor-pointer items-center">
          <li className="hover:border-b-4 hover:border-green-600">About Us</li>
          <li className="hover:border-b-4 hover:border-green-600">Membership Subscribtion</li>
          <li className="hover:border-b-4 hover:border-green-600">Contact Us</li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
