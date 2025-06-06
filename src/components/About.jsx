"use client";
import React, { useState } from "react";
import Image from "next/image";

function About({ data }) {
  if (!Array.isArray(data) || data?.length === 0 || !data) return <></>;

  return (
    <section className="about" id="about">
      <div className="md:grid md:grid-cols-2 md:gap-4">
        <div>
          <h2 className="text-center md:text-left text-3xl font-bold mb-4 md:mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            {data?.[0]?.summary && "About Me"}
          </h2>
          <p className="text-[var(--lightgray)] text-base text-justify mb-4">
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
        <div className="flex flex-wrap gap-3  md:gap-5 items-center justify-center mx-auto">
          {data?.[0]?.knownStack &&
            data?.[0]?.knownStack.map((stack, index) => (
              <div
                className="flex bg-[#242424] rounded-md p-3 items-center gap-4 w-[47%] md:w-[45%] lg:w-[30%] h-[70px] cursor-pointer"
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
      </div>
    </section>
  );
}

export default About;
