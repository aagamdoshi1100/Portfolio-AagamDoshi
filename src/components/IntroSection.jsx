"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { useRouter } from "next/navigation";
import Link from "next/link";
import posthog from "posthog-js";

function IntroSection({ name }) {
  const router = useRouter();
  function downloadCV() {
    const pdfURL = "/Aagam_Doshi_Frontend_Developer.pdf";
    const anchorElement = document.createElement("a");
    anchorElement.href = pdfURL;
    anchorElement.download = "Aagam_Doshi_Frontend_Developer.pdf";
    anchorElement.click();
    posthog.capture("CV Downloaded", {
      location: "Homepage",
    });
  }
  return (
    <section>
      <div className="Intro flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="">
          <h1 className="text-white font-extrabold mb-4 lg:flex min-h-[80px] md:min-h-[40px]">
            <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Hello, I'm{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[name, 2000, "Web Developer", 2000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-4xl md:ml-2"
            />
          </h1>
          <p className="text-base mb-4 text-[var(--lightgray)] bg-clip-text bg-gradient-to-rd from-blue-400 to-blue-600">
            I'm a web developer actively seeking new opportunities and my inbox
            is open for messages.
          </p>
          <div className="md:flex md:items-center">
            <Link
              href="https://wa.me/918169975445?text=Hi"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-full mb-4 md:mb-0 mr-4 hover:bg-[#24b661cf] flex justify-center gap-2 w-full sm:w-fit bg-gradient-to-r bg-[#24b661] text-white text-base"
              onClick={() =>
                posthog.capture("Clicked On Whatsapp Btn", {
                  location: "Homepage",
                })
              }
            >
              Let’s Talk on
              <Image
                unoptimized
                width="24"
                height="24"
                src="https://img.icons8.com/color/98/whatsapp--v1.png"
                className="object-contain"
                alt="whatsapp--v1"
              />
            </Link>
            <button
              className="px-6 py-3 rounded-full hover:bg-slate-300 bg-white text-black sm:mt-3 md:mt-0 w-full sm:w-fit text-base cursor-pointer"
              onClick={() => downloadCV()}
            >
              Download CV
            </button>
          </div>
        </div>
        <div className="profileImg">
          <div className="rounded-[49px]  bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] mb-5 lg:mt-0 relative overflow-hidden">
            <Image
              loading="eager"
              src="/myImg.jpg"
              alt="mainPageImg"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 md:w-[350px] "
              height={300}
              width={300}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
