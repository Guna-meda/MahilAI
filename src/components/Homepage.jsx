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
  const logoImgs = [
    { imgUrl: reactbits, altText: "React Bits Logo" },
    { imgUrl: reactbits, altText: "React Bits Logo" },
    { imgUrl: reactbits, altText: "React Bits Logo" },
    { imgUrl: reactbits, altText: "React Bits Logo" },
    { imgUrl: reactbits, altText: "React Bits Logo" },
    { imgUrl: reactbits, altText: "React Bits Logo" },
    { imgUrl: reactbits, altText: "React Bits Logo" },
  ];

  return (
    <div>
<div className="min-h-screen bg-gradient-to-b from-[#130726] to-[#1a0933]">
<Navbar />

        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent pointer-events-none z-0"></div>

        <div className="flex flex-col md:flex-row items-center justify-between p-6 pl-25 py-10">
          <div className="text-center md:text-left md:w-1/2 text-white space-y-6 pl-10 pt-10">
            <BlurText
              text="Welcome to MahilAI!"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-5xl font-bold mb-4"
              style={{
                textShadow:
                  "0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.3)",
              }}
            />
            {/*<div className="pt-5 text-2xl">

          <GradientSplitText
            text="Want to use your skills in solving social issues?"
            className="font-semibold text-center md:text-left"
            delay={20}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={40}
          />
          <br />
          <GradientSplitText
            text="Then you are in the right place!"
            className="font-semibold text-center text-pink-400 md:text-left"
            delay={45}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
          />
          </div>*/}

            <SplitText
              text="Want to use your skills in solving social issues?Then you are in the right place!"
              className=" font-[Orbitron] font-semibold text-center text-pink-400 md:text-left text-3xl"
              delay={40}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
            />

            <button className=" font-[Exo 2] mt-6 px-6 py-2 text-xl font-semibold text-pink-400 border-2 border-pink-400 rounded-full hover:bg-pink-400 hover:text-white transition-colors duration-300">
              Vist Weekly Blog
            </button>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center items-center">
            <TiltedCard
              imageSrc="/MahilAI\logoimg.jpg"
              altText="MahilAI-Join us"
              captionText="MahilAI-Join us"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
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
          <div style={{ height: "200px", width: "100%", position: "relative" }}>
            <LogoWall
              items={logoImgs}
              direction="horizontal"
              pauseOnHover={true}
              size="clamp(8rem, 1rem + 20vmin, 25rem)"
              duration="60s"
              bgColor="#130726"
              bgAccentColor="#1a0933"
            />
          </div>
        </div>
      </div>
      <div
        className="  min-h-screen h-32 w-full"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)",
        }}
      >
        <h1 className="pt-30 text-4xl md:text-7xl ml-20 font-thin text-pink-500 tracking-widest ">
          Instagram Posts
        </h1>
        <div className="  pt-20 flex justify-center space-x-6">
          <DecayCard width={350} height={450} image="/MahilAI\insta1.jpg"></DecayCard>
          <DecayCard width={350} height={450} image="/MahilAI\insta2.jpg"></DecayCard>
          <DecayCard width={350} height={450} image="/MahilAI\insta3.jpg"></DecayCard>
        </div>
      </div>
 <HeroScrollDemo></HeroScrollDemo>
      </div>
  );
};

export default Homepage;
