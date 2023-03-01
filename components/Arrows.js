import { motion } from "framer-motion";
import React from "react";
import { useTheme } from "next-themes";

function Arrows() {

    const {theme} = useTheme()


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
          className="a1"
          d="M0 0 L30 32 L60 0"
          stroke={theme == "dark" ? "#F7AB0A" : "#1e3a8a"}
          strokeWidth="1"
          fill="transparent"
          animate={{
            opacity: [0, 1, 0],
            transition: { delay: -1, duration: 2, repeat: Infinity },
          }}
        />
        <motion.path
          className="a2"
          d="M0 20 L30 52 L60 20"
          stroke={theme == "dark" ? "#F7AB0A" : "#1e3a8a"}
          strokeWidth="1"
          fill="transparent"
          animate={{
            opacity: [0, 1, 0],
            transition: { delay: -0.5, duration: 2, repeat: Infinity },
          }}
        />
        <motion.path
          className="a3"
          d="M0 40 L30 72 L60 40"
          stroke={theme == "dark" ? "#F7AB0A" : "#1e3a8a"}
          strokeWidth="1"
          fill="transparent"
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