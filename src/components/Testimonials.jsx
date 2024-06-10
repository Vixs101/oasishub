import React from "react";
import { testimonials } from "../lib/constants";

function Testimonials() {
  return (
    <section className="appWidth bg-[#e7fde2]">
      <div
        className="
        flex flex-col gap-2 md:w-5/13
        w-full  
        "
      >
        <h2
          className="
          text-3xl md:text-5xl font-extrabold
      "
        >
          What People Are Saying
        </h2>
        <p className="text-gray-500">
          Read what our members have to say about their experience at our tech
          hub.
        </p>
      </div>

      <div className="flex md:flex-row flex-col flex-wrap lg:flex-nowrap gap-5 mt-8 ">
        {testimonials.map((testimonies, index) => (
          <div key={index} className="flex  gap-5 bg-white p-4 text-justify rounded-lg">

            <img src={`/images/${testimonies.pic}.png`} alt="Testifier" 
            className="h-10 w-10"
            />
            <div>
              <h2 className="font-bold text-lg md:text-xl">{testimonies.testifier}</h2>
              <p className="text-sm">{testimonies.testimony}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
