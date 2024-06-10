import React from "react";
import { pictures } from "../lib/constants";

function Images() {
  return (
    <section
      // className="
      //       appWidth md:pb-20 bg-[#023A7B] w-full md:h-screen md:flex md:flex-wrap md:gap-4 md:items-center md:justify-center
      //       grid grid-cols-2 gap-3 pb-32
      //       "
      className="appWidth md:pb-20 bg-[#023A7B] w-full      md:grid-cols-3 lg:gap-4
      grid grid-cols-2 gap-3 pb-32"
    >
      {pictures.map((pic, index) => {
        return (
          <div
            key={index}
            className={`lg:h-full lg:w-full  ${
              index == 10 ? "col-span-2" : "col-span-1"
            }`}
          >
            <img
              src={`/images/${pic.picture}.png`}
              alt="A picture of the hub"
              key={index}
              className="w-full h-full"
            />
          </div>
        );
      })}
    </section>
  );
}

export default Images;
