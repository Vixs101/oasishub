import React from "react";
import { membership } from "../lib/constants";

function Membership() {
  return (
    <section
      className="
      appWidth w-full lg:h-screen bg-[#e7fde2] 
    "
    id="subscription"
    >
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
          Membership Options
        </h2>
        <p className="text-gray-500">
          Choose The membership option that suits your needs and join our
          vibrant tech hub or workspace
        </p>
      </div>

      <div
        className="
        flex md:flex-row md:gap-5 lg:gap-2 py-10 h-5/8
        flex-col gap-4 items-center md:items-start
      "
      >
        {membership.map((members, index) => (
          <div
            key={index}
            className="
            flex flex-col gap-4 bg-white hover:bg-green-600 hover:text-white px-4 pt-4 pb-12 rounded-2xl h-full md:w-auto
          "
          >
            <img
              src={`/images/${members.member}.png`}
              alt="A member of the hub"
              className="h-3/5"
            />
            <div className="flex flex-col gap-2 ">
              <h2
                className="
              font-bold text-lg md:text-xl
            "
              >
                {members.title}
              </h2>
              <p className="md:text-sm lg:text-base">{members.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Membership;
