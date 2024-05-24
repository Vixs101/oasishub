import { useState } from "react";
import NavBar from "./components/NavBar";
import { features, membership, pictures } from "./lib/constants";

function Home() {
  return (
    <>
      <section 
      className="
        appwidth flex flex-col h-screen bg-cover bg-no-repeat bg-center bg-[url('/images/heroImage.png')] w-full gap-44 
        
      ">
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
        <div className="flex flex-col gap-2 w-full">
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
      <section className="appWidth pb-20 bg-[#023A7B] w-full h-screen flex flex-wrap gap-4 items-center justify-center">
        {pictures.map((pic, index) => (
          <div className="h-1/6 w-1/6">
            <img
              src={`/images/${pic.picture}.png`}
              alt="A picture of the hub"
              key={index}
              className="w-full h-full"
            />
          </div>
        ))}
      </section>

      <section className="appWidth w-full h-screen bg-[#E7FDE2] ">
        <div className="flex flex-col gap-2 w-5/13">
          <h2 className="text-5xl font-extrabold">Membership Options</h2>
          <p className="text-gray-500">
            Choose The membership option that suits your needs and join our
            vibrant tech hub or workspace
          </p>
        </div>

        <div className="flex gap-2 py-10 h-5/7">
          {membership.map((members, index) => (
            <div key={index} className="flex flex-col gap-2 bg-white px-4 pt-4 pb-12 rounded-2xl h-full">
              <img
                src={`/images/${members.member}.png`}
                alt="A member of the hub"
                className="h-2/3"
              />
              <h2>{members.title}</h2>
              <p>{members.content}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
