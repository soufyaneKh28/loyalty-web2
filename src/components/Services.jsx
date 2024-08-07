"use client";

import React from "react";

import Image from "next/image";
import { Marketing } from "../../public/assets";
import EmblaCarousel from "./ui/EmblaCarousel";
const sliderImageUrl = [
  //First image url
  {
    title: "Digital marketing",
    imgDark: Marketing,
  },
  {
    title: "Programmation Solution",
    imgDark: Marketing,
  },
  //Second image url
  {
    title: "Design",
    imgDark: Marketing,
  },
  //Third image url
  {
    title: "Mobile Application",
    imgDark: Marketing,
  },

  //Fourth image url

  {
    title: "Search Engine Optimization",
    imgDark: Marketing,
  },
];

const OPTIONS = { align: "start" };
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function Services({ object, options }) {
  // console.log(object);
  return (
    <div className="container">
      {/* <Slider>
        {sliderImageUrl.map((service, index) => {
          return (
            <div className="slider w-[300pxh-[290px]" key={index}>
              <div className=" max-h-10">
                <Image
                  src={service.imgDark}
                  alt="img"
                  className="w-[100%] h-[100%] object-cover"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <h3 className="">{service.title}</h3>
            </div>
          );
        })}
      </Slider> */}
      <EmblaCarousel options={options}>
        {object.map((service, index) => {
          return (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number min-h-[416px] transition-colors">
                <div className=" img-container h-[60px] w-[60px] p-3 rounded-full bg-[#98E4E8]">
                  <Image
                    src={service.service_image}
                    alt={`${service.service_image_alt}`}
                    className="w-[100%] h-[100%] object-cover"
                    width={100}
                    height={100}
                  />
                </div>
                <h3 className="mt-2 font-bold ">{service.service_name}</h3>
                <p className="mt-3 ltr:font-Roboto">{service.service_desc}</p>
              </div>
            </div>
          );
        })}
      </EmblaCarousel>
    </div>
  );
}
{
  /* {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">{index + 1}</div>
            </div>
          ))} */
}
export default Services;
