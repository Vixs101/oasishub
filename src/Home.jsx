import { useState } from "react";
import NavBar from "./components/NavBar";

function Home() {
  return (
    <>
      <section className="appwidth flex flex-col h-screen bg-cover bg-no-repeat bg-center bg-[url('/images/heroImage.png')] w-full gap-y-40">
        <NavBar />
        <div className=" align-middle text-white font-bolder">
          <h1 className="">Welcome to Oasis Hub</h1>
          <p>Where Innovation meets Collaboration</p>
          <button className="flex rounded-sm bg-white hover:bg-slate-200 md:w-16 lg:w-20 p-2 h-8 items-center border border-gray-50">

          </button>
        </div>
      </section>
    </>
  );
}

export default Home;
