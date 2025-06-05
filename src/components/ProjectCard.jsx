import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ details }) => {
  return (
    <div className="projectCard md:flex md:gap-5 rounded-md cursor-pointer">
      <div className="md:w-[49%] ">
        {details?.LinkedInVideo ? (
          <iframe
            src={details?.LinkedInVideo}
            height="9"
            width="16"
            frameBorder="0"
            className="w-full h-full aspect-[47/25]  rounded-md"
            allowFullScreen=""
            title="Embedded post"
          ></iframe>
        ) : (
          <Image
            src={"/overview360.png"}
            height={586}
            width={1200}
            className="rounded-md"
            alt="overview360-project"
          />
        )}
      </div>
      <div className="md:w-[49%] ">
        <div className="md:flex md:justify-between">
          <h3 className="mt-4 md:mt-0 text-xl">{details?.name}</h3>
          <div className="flex gap-2 mt-2 md:mt-0">
            <Link
              href={details?.link}
              className=" bg-[#33333388] text-[var(--lightgray)] rounded-md p-1 text-base flex items-center gap-1"
            >
              <Image
                width="24"
                height="24"
                src="https://img.icons8.com/3d-fluency/94/globe.png"
                alt="globe"
              />
            </Link>
            <Link
              href={details?.githubURL ?? "#"}
              className=" bg-[#33333388] text-[var(--lightgray)] rounded-md p-1 text-base flex items-center gap-1"
            >
              <Image
                width="24"
                height="24"
                src="https://img.icons8.com/fluency/48/source-code.png"
                alt="source-code"
              />
            </Link>
          </div>
        </div>
        <ul className="custom-list mt-2">
          {details.description?.map((res, index) => (
            <li
              key={index}
              className="text-base md:text-sm mb-2 text-[var(--lightgray)]"
            >
              {res}
            </li>
          ))}
        </ul>
        {details?.stack?.length > 0 && (
          <>
            <p className="text-base mt-4 mb-1">Technologies</p>
            <ul className="flex flex-wrap gap-x-2">
              {details?.stack?.map((res, index) => (
                <li
                  key={index}
                  className="text-base md:text-sm text-[var(--lightgray)] bg-[var(--darkgray)] rounded-md p-2 my-1"
                >
                  {res}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
