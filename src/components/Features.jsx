import React from "react";
import { features } from "../lib/constants";

function Features() {
  return (
    <section
      className="
     appwidth flex flex-col md:my-10 gap-5
     p-5 my-3
     "
    >
      <div className="flex flex-col gap-2 w-full">
        <h2
          className="
           text-3xl md:text-5xl font-extrabold
         "
        >
          Features
        </h2>
        <p className="text-gray-500">
          Discover the amazing features of our Tech Hub
        </p>
      </div>

      <div
        className="
         grid md:grid-cols-6 gap-4 w-full
         grid-cols-1
         "
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className={`bg-gray-100 rounded-lg p-2 ${
              index === 3
                ? "md:col-span-3 md:ml-36 md:w-2/3"
                : index === 4
                ? "md:col-span-3 md:mr-28 md:w-2/3"
                : "md:col-span-2"
            }`}
          >
            <h2
              className="
               font-bold text-lg md:text-xl
             "
            >
              {feature.title}
            </h2>
            <p
              className="
               text-gray-600
               "
            >
              {feature.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
