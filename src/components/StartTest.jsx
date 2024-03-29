"use client";
import React from "react";
import { motion } from "framer-motion";
const Test = () => {
  return (
    <section className="mt-20 flex flex-col gap-3 text-center p-8">
      <p className="text-center">We take privacy seriously</p>
      <p className="font-bold text-3xl">Before you get started</p>
      <p className="text-xl font-normal">
      &quot;We won't share your answers with anyone.
        <br /> (and won't tell you which friends said what about you).&quot;
      </p>
      <div className="flex flex-row gap-2 items-center justify-center">
        <p className=""> with Love, unKnown</p>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="170"
          variants={{
            initial: {
              opacity: 0,
              x: -10,
            },
            animate: {
              opacity: [0,0,0,0.5,1],
              x: [0,0,2.5,3,2.7,0],
              transition: {
                duration: 1.3},
            },
          }}
          height="70"
          initial="initial"
          animate="animate"
          viewBox="0 0 450 150"
        >
          
        </motion.svg>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { y: "10%" },
          visible: {
            y: 0,
            transition: { ease: "easeInOut", duration: 1, delayChildren: 0.7 },
          },
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { scale: 0.5, opacity: 0 },
            visible: {
              opacity: 1,
              scale: [0,0.25,0.5,0.8,1.01,1],
              transition: { ease: "easeInOut", duration: 1 },
            },
          }}
          style={{
            width: "100%", // Adjust the width as needed
            overflow: "hidden", // Hide overflowing text while sliding
          }}
          className="pt-3"
        >
          <button className="rounded-3xl p-4 px-6 text-white bg-black">
            Start a test
          </button>
        </motion.div>
        <div className="text-sm mt-4">Take only 5 minutes</div>
      </motion.div>
    </section>
  );
};

export default Test;