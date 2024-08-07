"use client";

import Image from "next/image";
import React from "react";
import { circles, prize } from "../../public/assets";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { data } from "autoprefixer";
const Statis = ({ stats }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1, // Trigger when 10% of the component is in view
  });
  return (
    <div className="container mt-8">
      <div className=" py-[50px] md:py-0 bg-primaryDark relative w-full  overflow-hidden rounded-[10px] flex flex-col">
        <div className="circle">
          <Image
            src={circles}
            alt="circles"
            width={350}
            className=" absolute top-[-170px] md:top-0  right-[50%] md:rotate-90 md:right-0 translate-x-[50%] md:translate-x-[50%]"
          />
        </div>
        <div className="stats my-10 md:flex justify-center md:gap-20">
          {stats.slice(0, 3).map((count, i) => (
            <div className="flex my-5  items-start justify-center" key={i}>
              <div className="stats-icon ">
                <Image src={prize} alt="prize" className="mt-3" />
              </div>
              <div className=" text-white">
                <h3 className="text-[37px] font-bold" ref={ref}>
                  {inView && (
                    <CountUp
                      duration={3}
                      start={0}
                      end={Number(count.counter_number)}
                    />
                  )}
                  +
                </h3>
                <p className=" font-bold w-[100px]">{count.counter_title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="circle">
          <Image
            src={circles}
            alt="circles"
            width={350}
            className=" absolute rotate-[160deg] bottom-[-170px] md:top-0  right-[50%] md:rotate-[280deg] md:left-0 translate-x-[50%] md:translate-x-[-50%] rtl:md:translate-x-[-100%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Statis;
