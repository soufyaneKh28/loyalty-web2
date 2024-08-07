"use client";
import { motion, useInView, useAnimate, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export const MotionLayout = ({
  children,
  delay,
  initial = { opacity: 0, y: 100 },
  animate = { opacity: 1, y: 0 },
  duration = 1.5,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: initial,
          visible: animate,
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: duration, delay: delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};
