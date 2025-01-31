"use client";
import React from "react";
import  ContainerScroll  from "./ui/container-scroll";
import logo from "../../public/logo.jpg"; 

export default function HeroScrollDemo() {
  return (
    (<div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-pink-400 ">
               This?<br />
              <span className="text-4xl md:text-[6rem]  text-[#130726] font-bold mt-1 leading-none ">
              Weekly Blog
              </span>
            </h1>
          </>
        }>
        <img
          src="/MahilAI/women.png"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false} />
      </ContainerScroll>
    </div>)
  );
}
