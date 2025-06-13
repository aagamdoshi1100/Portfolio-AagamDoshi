"use client";
import React, { useState } from "react";
import Image from "next/image";
import FadeIn from "@/components/Animations/FadeIn";

function About({ data }) {
  if (!Array.isArray(data) || data?.length === 0 || !data) return <></>;

  return (
    <section className="about" id="about">
      <div className="p-4 rounded-md md:grid md:grid-cols-2 md:gap-4 bg-[#242424]">
        <div>
          <h2 className="text-3xl font-bold mb-4 md:mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            {data?.[0]?.summary && "About Me"}
          </h2>
          <p className="text-[var(--lightgray)] text-base mb-4">
            {data?.[0]?.summary}
          </p>

          <h4 className="text-lg mb-2 mt-4 md:mt-14">
            {data?.[0]?.education && "Education"}
          </h4>
          {data?.[0]?.education &&
            data?.[0]?.education?.map((edu, index) => {
              return (
                <div key={index} className="mb-4">
                  <p className="text-base text-[var(--lightgray)]">
                    {edu?.institution}
                  </p>
                  <p className="text-base text-[var(--lightgray)]">
                    {edu?.degree}
                  </p>
                  <p className="text-base text-[var(--lightgray)]">
                    {edu?.year}
                  </p>
                </div>
              );
            })}
        </div>
        <div>
          <Image
            src="/SK-SomaiyaCollege.jpg"
            width="850"
            height="547"
            className="object-cover  rounded-md"
            alt="collegeImg"
          />
        </div>
      </div>
      <FadeIn>
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mt-10 md:mt-20 rounded-xl mx-auto ">
          {data?.[0]?.knownStack &&
            data?.[0]?.knownStack.map((stack, index) => (
              <div
                className="cursor-pointer hover:bg-[#242424] w-[46%] md:w-[140px] grid place-items-center p-3 rounded-md"
                key={index}
              >
                <Image
                  src={stack.src}
                  alt={stack.alt}
                  width={stack.width}
                  height={stack.height}
                  className="object-contain"
                />
                <p>{stack?.name}</p>
              </div>
            ))}
        </div>
      </FadeIn>
    </section>
  );
}

export default About;
