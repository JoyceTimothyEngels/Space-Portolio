"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
      <div className="absolute w-auto h-auto top-0 z-[5]" id="contact">
        
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-5">
          Contact me here
          </h1>

        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
        <div className="flex flex-row gap-5">
          {/* <Image
            src="/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          /> */}
          <a href="https://de.linkedin.com/in/joyce-timothy-engels-215173276" className="cursor-pointer">
          <Image
            src="/linkedin-icon-2.svg"
            alt="LinkedIn"
            width={90}
            height={90}
            className=" z-10"
          />
          </a>
          <a href="mailto:info@engels-development.com" className="cursor-pointer">
          <Image
            src="/mail-icon.png"
            alt="Lock Main"
            width={90}
            height={90}
            className=" z-10"
          />
          </a>
          <a href="https://www.instagram.com/engels_development/" className="cursor-pointer">
          <Image
            src="/5296765_camera_instagram_instagram logo_icon.png"
            alt="Lock Main"
            width={90}
            height={90}
            className=" z-10"
          />
          </a>
        </div>

         {/* <div className="Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">Encryption</h1>
        </div>
      </div>
      <div className="absolute z-[20] bottom-[10px] px-[5px]">
        <div className="text-[20px] font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption
        </div>  */}
      </div>
        </div>
      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/encryption.webm/"
        />
      </div>
    </div>
  );
};

export default Encryption;
