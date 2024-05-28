import React from "react";
import { pictures } from "../lib/constants";

function Images() {
  return (
    <section
      className="
            appWidth md:pb-20 bg-[#023A7B] w-full h-screen md:flex md:flex-wrap md:gap-4 md:items-center md:justify-center
            grid grid-cols-2 gap-3 pb-32
            "
    >
      {pictures.map((pic, index) => (
        <div key={index} className="md:h-1/6 md:w-1/6">
          <img
            src={`/images/${pic.picture}.png`}
            alt="A picture of the hub"
            key={index}
            className="w-full h-full"
          />
        </div>
      ))}
    </section>
  );
}

export default Images;
