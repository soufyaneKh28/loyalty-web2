import Image from "next/image";
import React from "react";
import { strategy, support } from "../../public/assets";
import { MotionContainer, MotionLayout } from ".";

function Features({ object }) {
  return (
    <div className="container flex flex-col md:flex-row md:justify-between md:items-center ">
      <MotionLayout
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        duration={1.4}
      >
        <div className=" flex flex-col ">
          <div className=" flex flex-col items-start">
            <div className="flex items-center mb-[-5px]">
              <div className="w-[60px] h-[2px] bg-secondary mr-1"></div>
              <p className=" text-secondary font-bold">{object.smallTitle}</p>
            </div>
            <h2 className=" text-[26px] md:text-[32px] font-bold w-[320px] md:w-auto  leading-9 mt-3 text-primaryDark">
              {object.title}
            </h2>
          </div>
          <p className=" text-[#27272F]  w-[350px] rtl:font-semibold  md:w-[385px]  text-[16px] mt-4">
            {object.description}
          </p>
        </div>
      </MotionLayout>
      <div className="pt-10 md:pb-10 md:w-[422px]">
        {object.items.map((item, i) => (
          <MotionLayout delay={0.3 * i} key={i}>
            <div className=" features-item flex items-center  w-full" key={i}>
              <div className=" img-circle bg-secondary w-[65px] h-[65px] flex p-2 justify-center items-center rounded-full">
                <Image src={item.icon} width={45} alt="icon" />
              </div>
              <h3 className=" text-[22px] font-semibold rtl:font-bold mx-3">
                {item.title}
              </h3>
            </div>
          </MotionLayout>
        ))}
      </div>
    </div>
  );
}

export default Features;
