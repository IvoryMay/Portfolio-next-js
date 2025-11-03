"use client"

import Image from 'next/image'
import React from 'react'
import { MdOutlineWavingHand } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import { motion } from "motion/react";
import { outfit,ovo,montserrat,poppins } from '../Data/font';

const TopSection = ({isDarkMode, setIsDarkMode}) => {
  return (
    <section id='top'>
      <div
      className='flex flex-col items-center justify-center h-screen text-center w-11/12 max-w-3xl mx-auto'>
        <div className='flex items-center gap-4 flex-col '>
         <div
        //  initial={{scale:0}}
        //  whileInView={{scale:1}}
        //  transition={{duration:0.3, type:"spring",stiffness:100}}
         >
         <a href='/me-smile.jpg'> <Image src="/me-smile.jpg"  alt="hero" width={150} height={150} className='rounded-lg w-auto h-auto' priority/></a>
         </div>
          <p
          // initial={{y:-10, opacity:0}}
          // whileInView={{y:0, opacity:1}}
          // transition={{duration:0.6, delay:0.3}}
          className={`${poppins.className} flex flex-row items-center gap-2 text-lg mb-4`}>Hi! I'm Theint Sandi Kyaw.<MdOutlineWavingHand className='text-amber-600'/></p>
        </div>
        <p
        // initial={{y:-20, opacity:0}}
        // whileInView={{y:0, opacity:1}}
        // transition={{duration:0.5, delay:0.5}}
        className={`${montserrat.className} text-xl font-semibold font-serif max-w-2xl `}>I'm a junior Full Stack Developer based in Yangon, Myanmar.</p>
        <div className={`${poppins.className} flex items-center gap-4 sm:flex-row flex-col mt-4`}>
          <motion.div
          initial={{x:-40, opacity:0}}
          whileInView={{x:0, opacity:1}}
          transition={{duration:0.5, delay:0.5}}>
          <a  
          href="#contact" className='flex items-center gap-2 border border-gray-500 px-4 py-2 rounded-full bg-gray-800 text-white hover:scale-75 duration-200'><span>contact me</span><FaArrowRight /></a>
          </motion.div>

          <motion.div
          initial={{x:40, opacity:0}}
          whileInView={{x:0, opacity:1}}
          transition={{duration:0.5, delay:0.5}}>
          <a 
          className='flex items-center gap-2 border border-gray-500 px-4 py-2 rounded-full dark:bg-white dark:text-stone-900 hover:scale-75 duration-200'><span>my resume</span><FaArrowDown /></a>
          </motion.div>
        </div>
      </div>

    </section>
  )
}

export default TopSection