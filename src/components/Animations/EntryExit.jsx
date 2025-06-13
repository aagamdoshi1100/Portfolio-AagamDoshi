"use client";
import { motion } from "framer-motion";
const EntryExit = ({ children }) => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stifness: 100 }}
    >
      {children}
    </motion.div>
  );
};

export default EntryExit;
