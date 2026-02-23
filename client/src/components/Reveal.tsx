import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  distance?: number;
}

export const Reveal = ({
  children,
  width = "fit-content",
  direction = "up",
  delay = 0.2,
  duration = 0.5,
  distance = 50,
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const getVariants = () => {
    const initialX = direction === "left" ? -distance : direction === "right" ? distance : 0;
    const initialY = direction === "up" ? distance : direction === "down" ? -distance : 0;

    return {
      hidden: { opacity: 0, x: initialX, y: initialY },
      visible: { opacity: 1, x: 0, y: 0 },
    };
  };

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "visible" }}>
      <motion.div
        variants={getVariants()}
        initial="hidden"
        animate={mainControls}
        transition={{ duration, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};
