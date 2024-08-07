import React from "react";
import { MotionLayout } from ".";

const Strategy = ({ object }) => {
  return (
    <div className="container">
      <div className=" flex flex-col md:flex-row md:justify-between md:items-center">
        <div className=" flex flex-col items-start">
          <div className="flex items-center mb-[-5px]">
            <div className="w-[60px] h-[2px] bg-secondary mr-1"></div>
            <p className=" text-white">{object.smallTitle}</p>
          </div>
          <h2 className=" text-[26px] md:text-[32px] font-bold  md:w-auto  leading-9 mt-3 text-white">
            {object.title}
          </h2>
        </div>
        <p className=" text-white  w-[270px] md:w-[385px]  text-[16px] mt-4">
          {object.descriptipn}
        </p>
      </div>
      <div className="md:mt-[100px]">
        <div className=" flex flex-col items-center md:flex-row md:justify-center my-10 gap-10 relative">
          <div className=" item-container relative">
            <div className=" z-1 border-box absolute -right-11 flex top-[50%] items-center translate-y-[-50%]">
              <div className="dashed-border" />
              <div className=" box-circle " />
            </div>
            <div className=" circle " />
            <MotionLayout>
              <div className="item  z-10 relative ">
                <div className=" w-full py-10 ">
                  <h3 className=" text-[18px] font-semibold rtl:font-bold">
                    {object.items.item1.title}
                  </h3>
                </div>

                <div className=" relative h-[50%] bg-primaryDark py-5 px-3">
                  <div className=" num absolute top-0 right-[50%] translate-x-[50%]  translate-y-[-50%] w-[50px] h-[50px] bg-[#75898C] flex justify-center font-bold text-[20px] items-center rounded-full">
                    {object.items.item1.num}
                  </div>
                  <p className="text-[14px] mt-4 font-normal ">
                    {object.items.item1.description}
                  </p>
                </div>
              </div>
            </MotionLayout>
          </div>

          <div className=" item-container relative">
            <div className=" border-dashed border-r-2 h-[545px]  top-[50%] translate-y-[-50%] absolute right-[-40px] md:h-0 md:w-[500px]" />
            <div className="hidden md:block border-dashed border-t-2  lg:w-[600px] top-[-35px] translate-x-[50%] absolute right-[50%] md:h-0 md:w-[552px]" />
            <div className=" border-box absolute -right-11 flex top-[50%] items-center translate-y-[-50%]">
              <div className="dashed-border" />
              <div className=" box-circle  " />
            </div>
            <div className=" circle " />
            <MotionLayout>
              <div className="item ">
                <div className=" w-full py-10 ">
                  <h4 className=" text-[18px] font-semibold rtl:font-bold">
                    {" "}
                    {object.items.item2.title}
                  </h4>
                </div>

                <div className=" relative h-[50%] bg-primaryDark py-5 px-3">
                  <div className="num absolute top-0 right-[50%] translate-x-[50%]  translate-y-[-50%] w-[50px] h-[50px] bg-[#75898C] flex justify-center font-bold text-[20px] items-center rounded-full">
                    {object.items.item2.num}
                  </div>
                  <p className="text-[14px] mt-4 font-normal">
                    {object.items.item2.description}
                  </p>
                </div>
              </div>
            </MotionLayout>
          </div>

          <div className=" item-container relative">
            <div className="border-box absolute -right-11 flex top-[50%] items-center translate-y-[-50%]">
              <div className="dashed-border" />
              <div className="box-circle " />
            </div>
            <div className=" circle  " />
            <MotionLayout>
              <div className="item ">
                <div className=" w-full py-10 ">
                  <h4 className=" text-[18px] font-semibold rtl:font-bold">
                    {" "}
                    {object.items.item3.title}
                  </h4>
                </div>

                <div className=" relative h-[50%] bg-primaryDark py-5 px-3">
                  <div className="num  absolute top-0 right-[50%] translate-x-[50%]  translate-y-[-50%] w-[50px] h-[50px] bg-[#75898C] flex justify-center font-bold text-[20px] items-center rounded-full">
                    {object.items.item3.num}
                  </div>
                  <p className="text-[14px] mt-4 font-normal">
                    {object.items.item3.description}
                  </p>
                </div>
              </div>
            </MotionLayout>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategy;
