"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";

const Experience = ({ data }) => {
  return (
    <section id="experience">
      <h2 className="text-center md:text-left text-3xl font-bold mb-4">
        Experience
      </h2>
      <div className="w-[90vw] md:w-[85vw] cursor-pointer">
        <Swiper
          navigation={false}
          modules={[Pagination]}
          pagination={{
            clickable: true, // Allows clicking on dots to navigate
            dynamicBullets: true, // Makes dots scale slightly when active
          }}
          slidesPerView={1}
          spaceBetween={10}
          className="expSwiper"
          breakpoints={{
            767: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {data &&
            data?.map((data, index) => (
              <SwiperSlide key={index} className="bg-[#242424] rounded-md p-4">
                <div className="flex flex-col md:flex-row items-center md:items-start  gap-4 align-top justify-start">
                  <Image
                    src={data?.companyLogo}
                    width={300}
                    height={170}
                    className="w-[100%] rounded-md md:w-[200px] h-auto object-contain"
                    alt={data?.company}
                  />
                  <div className="">
                    <h3 className="text-center md:text-left text-base mb-2 md:mb-1 leading-5">
                      {data.role}
                    </h3>
                    <p className="text-center md:text-left text-base md:text-xs text-slate-400 mb-2 md:mb-1">
                      {data?.duration}
                    </p>
                  </div>
                </div>
                <ul className="custom-list mt-2">
                  {data.responsibilities?.map((res, index) => (
                    <li
                      key={index}
                      className="text-base md:text-xs mb-2 text-slate-400"
                    >
                      {res}
                    </li>
                  ))}
                </ul>
                {data?.projects?.length > 0 && (
                  <>
                    <p className="text-base md:text-sm mt-4 mb-1">
                      Key Projects
                    </p>
                    <ul className="flex gap-x-3 flex-wrap">
                      {data?.projects?.length > 0 &&
                        data?.projects?.map((project, index) => (
                          <li
                            key={index}
                            className="text-base md:text-xs underline text-slate-400"
                          >
                            <Link href={project.link ?? "#"}>
                              {project.name}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </>
                )}
                {data?.technologies?.length > 0 && (
                  <>
                    <p className="text-base md:text-sm mt-4 mb-1">
                      Technologies
                    </p>
                    <ul className="flex flex-wrap gap-x-2">
                      {data?.technologies?.map((res, index) => (
                        <li
                          key={index}
                          className="text-base md:text-xs text-slate-300 bg-slate-500 rounded-md p-2 my-1"
                        >
                          {res}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Experience;
