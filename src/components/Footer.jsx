import React from "react";

function Footer() {
  return (
    <section
      className="flex flex-col md:flex-row  appWidth w-full bg-[url('/images/footerImage.png')] bg-no-repeat bg-center bg-cover gap-10 md:gap-0 pb"
      id="contactUs"
    >
      <div className="flex flex-col gap-10 md:gap-16 md:w-1/2 mt-10 md:mt-0">
        <img
          src="/images/footerLogo.png"
          alt="Company's Logo"
          className="h-16 w-2/5 md:h-20 md:w-1/3 "
        />
        <div className="flex flex-col gap-3 md:gap-5 text-white">
          <h1 className=" col-span-2 text-2xl md:text-5xl  font-extrabold text-white">
            Contact Us
          </h1>
          <div>
            <h2 className="font-bold text-lg text-white">Address</h2>
            <p>Opposite Taraba State Polytechnic</p>
          </div>
          <div className="">
            <h2 className="font-bold text-lg text-white">Phone</h2>
            <p className="">09161688902</p>
          </div>
          <div className="">
            <h2 className="font-bold text-lg text-white ">Email</h2>
            <p>Oasis@sandlip.com</p>
          </div>
        </div>
      </div>

      {/* form */}
      <form
        action=""
        className="flex flex-col gap-5 self-start bg-gray-100 h-1/2 md:h-full md:w-2/5 w-full p-5 md:p-10 rounded-xl lg:ml-32"
      >
        <h1 className="text-3xl font-extrabold">Get In Touch</h1>
        <div className="flex flex-row flex-wrap lg:flex-nowrap gap-5 md:gap-2 w-full">
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="John"
              className="p-2 rounded-lg border-2 border-bg-gray-300"
              required
            />
          </div>
          <div className="flex flex-col gap-1 w-2/5">
            <label htmlFor="surname" className="font-semibold">
              Surname
            </label>
            <input
              type="text"
              name="surname"
              placeholder="Doe"
              className="p-2 rounded-lg border-2 border-bg-gray-300"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-semibold">
            Mail
          </label>
          <input
            type="email"
            name="email"
            placeholder="johndoe@mail.net"
            className="p-2 rounded-lg border-2 border-bg-gray-300"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="address" className="font-semibold">
            Address
          </label>
          <input
            type="text"
            name="address"
            placeholder="jalingo, Taraba State"
            className="p-2 rounded-lg border-2 border-bg-gray-300"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="description" className="font-semibold">
            Description
          </label>
          <textarea
            name="description"
            className="p-2 rounded-lg border-2 border-bg-gray-300"
            required
          />
        </div>
        <button className="bg-black text-white p-2 rounded-lg hover:bg-[#201f1f]">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Footer;
