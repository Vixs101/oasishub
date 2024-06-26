import React from "react";
import { events } from "../lib/constants";

function Events() {
  return (
    <section className="appWidth w-full" id="events">
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
          Events and Workshops
        </h2>
        <p className="text-gray-500 w-5/7">
          Discover upcoming events, workshops, and networking opportunities
          hosted by our tech hub.
        </p>
      </div>

      <div
      className="grid grid-cols-md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8"
       >
        {events.map((event, index) => (
          <div key={index} className="bg-gray-100 p-2 rounded-lg ">
            <h2 className="font-bold text-lg md:text-xl">{event.title}</h2>
            <p>{event.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;
