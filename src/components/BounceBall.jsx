"use client";
import { MotionLayout } from "./MotionLayout";
import React from "react";
import { motion, Variants } from "framer-motion";
export default function BounceBall() {
  const bounceTransition = {
    y: ["0%", "-20%", "0%"], // Keyframes for y position
    duration: 2,
    ease: "easeOut", // Easing function for bounce
    repeat: Infinity,
  };
  return (
    <motion.div
      animate={{
        y: ["5%", "-2%", "5%"],

        borderRadius: ["100%"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",

        repeat: Infinity,
      }}
      className="  rtl:right-[100px] w-[360px] h-[360px] md:w-[460px] md:h-[460px] 2xl:w-[500px] 2xl:h-[500px] bg-primaryDark rounded-full absolute z-[-1] right-[-100px]  "
    />
  );
}
