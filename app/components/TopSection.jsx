"use client"

import Image from 'next/image'
import React from 'react'
import { MdOutlineWavingHand } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";

const TopSection = () => {
  return (
    <section id='top'>
      <div className='flex flex-col items-center justify-center h-screen text-center w-11/12 max-w-3xl mx-auto'>
        <div className='flex items-center gap-4 flex-col '>
          <Image src="/me-inya.jpg"  alt="hero" width={150} height={150} className='rounded-[100%]' />
          <p className='flex items-center gap-2 text-xl mb-4'>Hi! I'm Theint Sandi Kyaw.<MdOutlineWavingHand className='text-amber-600'/></p>
        </div>
        <p className='text-2xl font-semibold font-serif max-w-2xl '>I'm a junior Frontend Developer based in Yangon, Myanmar</p>
        <div className='flex items-center gap-4 sm:flex-row flex-col mt-4'>
          <a href="#contact" className='flex items-center gap-2 border border-gray-500 px-4 py-2 rounded-full bg-gray-800 text-white'><span>contact me</span><FaArrowRight /></a>
          <a className='flex items-center gap-2 border border-gray-500 px-4 py-2 rounded-full'><span>my resume</span><FaArrowDown /></a>
        </div>
      </div>

    </section>
  )
}

export default TopSection