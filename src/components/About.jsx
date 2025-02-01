import React from "react";
import Navbar from "./Navbar";
import AnimatedTestimonialsDemo from "./AnimatedTestimonialsDemo";

const About = () => {
  return (
    <>
      <div className="text-center py-16 px-6 ">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#1a0933] to-[#130726] rounded-3xl p-10">
          <h1 className="text-pink-400 text-4xl md:text-6xl font-bold leading-tight mb-8">
            Meet the <br /> FOUNDER
          </h1>
          <div className="flex justify-center p-8">
            <img
              src="/MahilAI/vector.jpg"
              alt="Founder"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg"
            />
          </div>
        </div>

        <div className="text-center mt-12 px-4">
          <h2 className="text-5xl md:text-6xl text-pink-500 mb-6">
            Why Us?
          </h2>
          <p className="text-lg md:text-2xl leading-relaxed text-[#1a0933] max-w-3xl mx-auto">
            MahilAI is on the hunt for dedicated individuals who are driven to
            harness the power of tech to inspire, innovate, and create
            solutions to real-world challenges. Not only will you hone your
            skills, but you'll also get the opportunity to work with like-minded
            individuals and expand your network.
          </p>
          <p className="mt-6 text-lg md:text-2xl leading-relaxed text-[#1a0933]">
            Come, join our mission to create a safer and brighter future for
            women!
          </p>
        </div>

        <div className="mt-12 p-8 md:p-20 bg-gradient-to-b from-[#130726] to-[#1a0933] rounded-3xl shadow-lg">
          <h2
            className="text-5xl md:text-6xl font-thin text-pink-500 mb-8"
            style={{
              textShadow:
                "0 0 2px #f472b6, 0 0 5px #f472b6, 0 0 8px #f472b6",
            }}
          >
            Meet Our Team
          </h2>
          <AnimatedTestimonialsDemo />
        </div>
      </div>
    </>
  );
};

export default About;
