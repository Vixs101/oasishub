import NavBar from "./components/NavBar";
import Features from "./components/Features";
import Images from "./components/Images";
import Membership from "./components/Membership";
import Events from "./components/Events";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <section
        className="
          appwidth flex flex-col h-screen bg-cover bg-no-repeat bg-center bg-[url('/images/heroImage.png')] w-full md:gap-44 
          gap-32
      "
      >
        <NavBar />
        <div
          className="flex flex-col md:justify-between md:gap-0 text-white lg:h-1/ md:h-2/5 md:w-3/5 
          w-full h-2/4 gap-8
        "
        >
          <h1 className="text-4xl md:text-6xl font-extrabold ">
            Welcome to Oasis Hub
          </h1>
          <p className="text-lg">Where Innovation meets Collaboration</p>
          <button
            className="flex rounded-lg text-black bg-white hover:bg-green-600 justify-center items-center border border-gray-50 lg:w-1/3 md:w-1/2 md:h-1/4 font-semibold
            w-2/3 h-1/7
          "
          >
            Explore our Workspace
          </button>
        </div>

        <div className="fixed bottom-8 right-8">
          <button className="flex items-start justify-center bg-white rounded-full w-12 h-12 shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 animate-pulseScale">
            <img src="/icon1.png" alt="back to top" className="" />
          </button>
        </div>
      </section>
      <Features/>
      <Images/>
      <Membership/>
      <Events/>
      <Testimonials/>
      <div className="w-full h-20 bg-white"></div>
      <Footer/>
    </>
  );
}

export default Home;
