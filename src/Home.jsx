import { useState } from "react";
import NavBar from "./components/NavBar";
import { features } from "./lib/constants";

function Home() {
  return (
    <>
      <section className="appwidth flex flex-col h-screen bg-cover bg-no-repeat bg-center bg-[url('/images/heroImage.png')] w-full gap-44">
        <NavBar />
        <div className="flex flex-col justify-between text-white h-1/3 w-1/2">
          <h1 className="text-6xl font-extrabold ">Welcome to Oasis Hub</h1>
          <p className="text-lg">Where Innovation meets Collaboration</p>
          <button className="flex rounded-lg text-black bg-white hover:bg-green-600 justify-center items-center border border-gray-50 w-1/3 h-1/4 font-semibold">
            Explore our Workspace
          </button>
        </div>

        <div className="fixed bottom-8 right-8">
          <button className="flex items-start justify-center bg-white rounded-full w-12 h-12 shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 animate-pulseScale">
            <img src="/icon1.png" alt="back to top" className="" />
          </button>
        </div>
      </section>

      {/* features section */}
      <section className="appwidth flex flex-col my-10 gap-5">
        <div className="flex flex-col gap-5 w-full text-center">
          <h2 className="text-5xl font-extrabold">Features</h2>
          <p className="text-gray-500">
            Discover the amazing features of our Tech Hub
          </p>
        </div>

        <div className="grid grid-cols-6 gap-4 w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gray-100 rounded-lg p-2 ${
                index === 3
                  ? "col-span-3 ml-36 w-2/3"
                  : index === 4
                  ? "col-span-3 mr-28 w-2/3"
                  : "col-span-2"
              }`}
            >
              <h2 className="font-bold text-xl">{feature.title}</h2>
              <p className="text-gray-600">{feature.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* images */}
      <section className="appwidth ">

      </section>
    </>
  );
}

export default Home;
