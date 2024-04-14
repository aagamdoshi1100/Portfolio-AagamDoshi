"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { useRouter } from "next/navigation";

function IntroSection() {
  const router = useRouter();
  return (
    <section>
      <div className="Intro grid grid-cols-1 sm:grid-cols-12 ">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white font-extrabold mb-4 text-4xl sm:text-4xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={["Aagam", 2000, "MERN Stack Web Developer", 2000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-lg lg:text-xl mb-1">
            I'm a MERN stack web developer actively seeking new opportunities
            and my inbox is open for messages.
          </p>
          <div>
            <button
              className="py-3 px-6 rounded-full mr-4  bg-white hover:bg-slate-200 w-full sm:w-fit bg-gradient-to-r from-purple-400 to-pink-600 text-white"
              onClick={() => router.push("/#contact")}
            >
              Hire Me
            </button>
            <button className="px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 border border-white mt-3 w-full sm:w-fit">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] mt-4 lg:mt-0 relative overflow-hidden">
            <Image
              src="/myImg.jpg"
              alt="mainPageImg"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 md:w-[350px] "
              height={300}
              width={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
