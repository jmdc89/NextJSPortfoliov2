import { motion } from "framer-motion";
import React from "react";


function Arrows() {

  return (
    <div className="arrows-container">
      <motion.svg
        className="arrows"
        width="60"
        height="72"
        viewBox="0 0 60 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <motion.path
          className="a1 fill-transparent stroke-[#1e3a8a] dark:stroke-[#F7AB0A]"
          d="M0 0 L30 32 L60 0"
          animate={{
            opacity: [0, 1, 0],
            transition: { delay: -1, duration: 2, repeat: Infinity },
          }}
        />
        <motion.path
          className="a2 fill-transparent stroke-[#1e3a8a] dark:stroke-[#F7AB0A]"
          d="M0 20 L30 52 L60 20"
          animate={{
            opacity: [0, 1, 0],
            transition: { delay: -0.5, duration: 2, repeat: Infinity },
          }}
        />

        <motion.path
          className="a3 fill-transparent stroke-[#1e3a8a] dark:stroke-[#F7AB0A]"
          d="M0 40 L30 72 L60 40"
          animate={{
            opacity: [0, 1, 0],
            transition: { duration: 2, repeat: Infinity },
          }}
        />
      </motion.svg>
    </div>
  );
}

export default Arrows