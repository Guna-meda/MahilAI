import React from "react";
import Navbar from "./Navbar.jsx";
import BlurText from "./ui/BlurText.jsx";
import TiltedCard from "./ui/TiltedCard.jsx";
import SplitText from "./ui/SplitText.jsx";
import "../../src/index.css";
import LogoWall from "./ui/LogoWall.jsx";
import reactbits from "/mahillogo.jpg";
import DecayCard from "./ui/DecayCard.jsx";
import HeroScrollDemo from "./HeroScrollDemo.jsx";

const Homepage = () => {
  const logoImgs = Array(7).fill({ imgUrl: reactbits, altText: "React Bits Logo" });

  return (
    <div className="w-full overflow-x-hidden">
      <div className="min-h-screen bg-gradient-to-b from-[#130726] to-[#1a0933] px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between py-10 space-y-6 md:space-y-0">
          <div className="text-center md:text-left md:w-1/2 text-white space-y-6 md:pl-10">
            <BlurText
              text="Welcome to MahilAI!"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{
                textShadow:
                  "0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.3)",
              }}
            />

            <SplitText
              text="Want to use your skills in solving social issues? Then you are in the right place!"
              className="font2 font-semibold text-center text-pink-400 md:text-left text-2xl md:text-3xl"
              delay={40}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
            />

            <button className="font1 mt-6 px-6 py-2 text-lg md:text-xl font-semibold text-pink-400 border-2 border-pink-400 rounded-full hover:bg-pink-400 hover:text-white transition-colors duration-300">
              Visit Weekly Blog
            </button>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center items-center">
            <TiltedCard
              imageSrc="/MahilAI/logoimg.jpg"
              altText="MahilAI-Join us"
              captionText="MahilAI-Join us"
              containerHeight="250px"
              containerWidth="250px"
              imageHeight="250px"
              imageWidth="250px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="tilted-card-demo-text text-white text-lg font-semibold p-5">
                  MahilAI
                </p>
              }
              style={{
                boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
              }}
              className="shadow-lg"
            />
          </div>
        </div>

        <div className="pt-10">
          <div className="h-40 w-full relative">
            <LogoWall
              items={logoImgs}
              direction="horizontal"
              pauseOnHover={true}
              size="clamp(6rem, 1rem + 15vmin, 20rem)"
              duration="60s"
              bgColor="#130726"
              bgAccentColor="#1a0933"
            />
          </div>
        </div>
      </div>

      <div className="min-h-screen h-auto w-full bg-gradient-to-b from-transparent to-white px-4 md:px-0">
        <h1 className="pt-10 text-3xl md:text-6xl font-thin text-pink-500 tracking-widest text-center md:text-left md:ml-20">
          Instagram Posts
        </h1>

        <div className="pt-10 flex flex-wrap justify-center gap-6">
          <DecayCard width={300} height={400} image="/MahilAI/insta1.jpg" />
          <DecayCard width={300} height={400} image="/MahilAI/insta2.jpg" />
          <DecayCard width={300} height={400} image="/MahilAI/insta3.jpg" />
        </div>
      </div>

      <HeroScrollDemo />
    </div>
  );
};

export default Homepage;
