import Image from "next/image";
import React from "react";
import aboutMe from "../Data/aboutMe";
import { motion } from "motion/react";
import { montserrat, poppins } from "../Data/font";
import { FaCheckCircle } from "react-icons/fa";
const About = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full  px-[12%] py-10 scroll-mt-30 "
    >
      <h4
        // initial={{y:-20, opacity:0}}
        // whileInView={{y:0,opacity:1}}
        // transition={{duration:0.5, delay:0.3}}
        className={`${montserrat.className} text-center mb-2`}
      >
        Introduction
      </h4>
      <h1
        // initial={{y:-20, opacity:0}}
        // whileInView={{y:0,opacity:1}}
        // transition={{duration:1, delay:0.5}}
        className={`${poppins.className} text-2xl text-center font-semibold`}
      >
        Who I am
      </h1>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-6  flex-col mt-8 w-full mx-auto"
      >
        <div
          // initial={{opacity:0, scale:0.9}}
          // whileInView={{opacity:1,scale:1}}
          // transition={{duration:0.6}}
          className=""
        >
          <a href="/me-kalaw.jpg">
            {" "}
            <Image
              src="/me-kalaw.jpg"
              alt="user"
              width={150}
              height={150}
              className="w-64 sm:w-80 rounded-3xl"
            />
          </a>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <p className={`${poppins.className} max-w-2xl mb-10   text-center mx-auto `}>
            I'm a junior Full Stack Developer. I thrive on learning and growing
            as a developer, and I am eager to join a collaborative development
            team where I can expand my skills, contribute to meaningful
            projects, and tackle exciting challenges.{" "}
          </p>
          <div
            className={`${poppins.className} grid grid-cols-1 lg:grid-cols-3 gap-3 `}
          >
            {aboutMe.map((el, index) => (
              <div
                key={index}
                className="border-[0.5px] border-gray-400  rounded-xl px-4 py-6 cursor-pointer  hover:shadow-lg hover:bg-green-100 hover:-translate-y-1 duration-500  dark:border-white/50 dark:hover:shadow-white/20 dark:hover:bg-lime-700"
              >
                <span className="text-xl ">{el.icon}</span>
                <h3 className="font-semibold  text-gray-700 mt-3 dark:text-white">
                  {el.title}
                </h3>
                <div className="mt-4  text-gray-600 text-sm dark:text-white">
                  {el.description.map((desc, i) => (
                    <p key={i} className="flex items-start gap-2 ">
                      <FaCheckCircle className="text-green-500 mt-1 size-3" />
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <h3
              className={`${montserrat.className} font-semibold text-gray-800 text-lg mb-2`}
            >
              Tools I use
            </h3>
            <ul
              //  initial={{y:20, opacity:0}}
              //  whileInView={{y:0,opacity:1}}
              //  transition={{duration:1, delay:1.2}}
              className="flex flex-row gap-2 items-center"
            >
              <li className="border-[0.5px] border-gray-400  rounded-xl p-2 cursor-pointer font-sans hover:shadow-lg hover:-translate-y-1 duration-500  size-12 dark:border-white/50 dark:bg-white">
                <Image
                  src="/vs code.jpg"
                  alt="vscode"
                  width={50}
                  height={50}
                  className="pt-1 pr-1"
                />
              </li>
              <li className="border-[0.5px] border-gray-400  rounded-xl p-2 cursor-pointer font-sans hover:shadow-lg hover:-translate-y-1 duration-500  size-12 dark:bg-white">
                <Image
                  src="/zustand-white.jpg"
                  alt="zustand"
                  width={50}
                  height={50}
                  className="pt-1.5"
                />
              </li>
              <li className="border-[0.5px] border-gray-400  rounded-xl p-2 cursor-pointer  hover:shadow-lg  hover:-translate-y-1 duration-500  size-12 pb-2.5 pl-2.5 font-mono dark:bg-white dark:text-black">
                swr
              </li>
              <li className="border-[0.5px] border-gray-400  rounded-xl p-2 cursor-pointer font-sans hover:shadow-lg hover:-translate-y-1 duration-500  size-12 pt-4 dark:bg-white">
                <Image
                  src="/git-icon.png"
                  alt="git-icon"
                  width={50}
                  height={50}
                />
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
