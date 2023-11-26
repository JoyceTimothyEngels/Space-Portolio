import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/Group 12.svg"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300 text-2xl;">
            Engels development
          </span>
        </a>

        <div className="w-[600px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
        <a href="https://de.linkedin.com/in/joyce-timothy-engels-215173276" className="cursor-pointer">
        <Image
            src="/linkedin-icon-2.svg"
            alt="LinkedIn"
            width={24}
            height={24}
            className=" z-10"
          />
          </a>
          <a href="https://www.instagram.com/engels_development/" className="cursor-pointer">
        <Image
            src="/5296765_camera_instagram_instagram logo_icon.png"
            alt="Instagram"
            width={24}
            height={24}
            className=" z-10"
          />
          </a>
          <a href="https://github.com/JoyceTimothyEngels" className="cursor-pointer">
        <Image
            src="/gitwhite.png"
            alt="GitHub"
            width={24}
            height={24}
            className=" z-10"
          />
          </a>
          {/* {Socials.map((social) => (
            
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
              className="cursor-pointer hover:animate-slowspin"
            />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;