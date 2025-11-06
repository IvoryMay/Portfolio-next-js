import React from "react";
import { IoGlassesOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { poppins } from "../Data/font";


const Footer = () => {
  return (
    <div className={`${poppins.className} mt-20 mb-5`}>
      <div className=" flex items-end  justify-center ">
        <span className="font-bold text-2xl text-[#386641] dark:text-lime-500">Theint</span>
        <IoGlassesOutline className="text-[#333d29] text-2xl dark:text-[#b3c0a6]" />
      </div>
      <div className="flex items-center justify-center gap-2">
        <TfiEmail className="text-blue-600 dark:text-blue-300" />
        <span className="font-sans text-sm text-gray-600 dark:text-white">
          theintsandikyaw1@gmail.com
        </span>
      </div>
      <div className="sm:flex items-center justify-between gap-2 mx-[10%] mt-4 border-t-2 border-gray-400">
        <p className="text-center text-sm text-gray-600 dark:text-white">
          &copy; 2025 Theint Sandi Kyaw. All right
          reserved.
        </p>

        <div className="flex items-center justify-center gap-4">
          <div >
            <a href="https://www.linkedin.com/in/theint-sandi-kyaw-3999732b6/" className="flex items-center gap-1" target="_blank">
              <FaLinkedin />
              <span className="text-sm hover:underline">LinkedIn</span>
            </a>
          </div>
          <div>
            <a href="https://github.com/IvoryMay" className="flex items-center gap-1" target="_blank">
              <FaGithub />
              <span className="text-sm hover:underline">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
