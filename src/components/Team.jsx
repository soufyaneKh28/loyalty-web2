"use client";

import Image from "next/image";
import React from "react";
import { MotionLayout } from ".";
import { memberTeam } from "../../public/assets";

// async function getData() {
//   const res = await fetch(
//     "https://seenfox.com/api/get_data.php?actions=team&lang_code=en",
//     { cache: "no-store" }
//   );
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.
//   // console.log(res.json());
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

function Team({ members }) {
  // const datafetch = await getData();
  // console.log(datafetch);

  return (
    <div className="container flex justify-center  ">
      <div className=" flex justify-between pb-10 flex-wrap max-w-[785px] ">
        {members.map((member, i) => (
          <MotionLayout delay={0.2 * i} key={i}>
            <div className="member max-w-[165px] p-1 my-4  flex flex-col items-center ">
              <div
                className={` overflow-hidden member-img ${
                  i % 2 === 0 ? " bg-[#F0A400]" : "bg-[#30C4E5]"
                } w-[155px] h-[190px] relative `}
              >
                <Image
                  className="  h-[100%]  w-[100%] object-cover hover:scale-110 transition-all "
                  src={member.team_image}
                  alt={`${member.team_image_alt}`}
                  width={200}
                  height={200}
                />
              </div>
              <div className=" flex flex-col items-center mt-3">
                <h3 className=" text-white font-semibold rtl:font-bold text-center">
                  {member.team_name}
                </h3>
                <p className=" text-white font-light rtl:font-medium mt-1 text-center">
                  {member.team_job}
                </p>
              </div>
            </div>
          </MotionLayout>
        ))}
      </div>
    </div>
  );
}

export default Team;
