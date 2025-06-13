"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const FadeIn = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
