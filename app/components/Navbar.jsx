
"use client"


import React, { useEffect, useRef, useState } from 'react';
import { MdArrowOutward } from "react-icons/md";
import { IoGlassesOutline } from "react-icons/io5";
import { GoMoon } from "react-icons/go";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import Image from 'next/image';
import { PiSunLight } from "react-icons/pi";

const Navbar = ({ isDarkMode, setIsDarkMode}) => {
  const sideBarRef = useRef();

  const [isScroll, setIsScroll] = useState(false);
  const openSideBar = () => {
    sideBarRef.current.style.transition = "0.5s ease";
    sideBarRef.current.style.transform = "translateX(-16rem)";
  }
  const closeSideBar = () => {
    sideBarRef.current.style.transition = "0.5s ease";
    sideBarRef.current.style.transform = "translateX(16rem)";
  }

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    })
  })
  return (
    <>
    
    <nav className={`fixed flex justify-between items-center w-full py-4 px-6 lg:px-8 xl:px-[8%] z-50  ${isScroll ? "bg-white  bg-opacity-50 shadow-sm dark:bg-stone-800 dark:shadow-white/20 " : ""} `}>
      <a href='#top'>
        <div className=" flex items-end  justify-center ">
                <span className="font-bold text-2xl text-[#386641] dark:text-lime-500">Theint</span>
                <IoGlassesOutline className="text-[#768468]  text-2xl dark:text-[#b3c0a6]" />
              </div>
      </a>
      <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3   ${isScroll ? " " : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
        <li><a href="#top" className=''>Home</a></li>
        <li><a href="#about">About me</a></li> 
        <li><a href="#services">Services</a></li> 
        <li><a href="#work">My Work</a></li> 
        <li><a href="#contact">Contact me</a></li> 
        </ul>

        <div className='flex items-center gap-4'>
        <button onClick={toggleDarkMode}>{isDarkMode?<PiSunLight className='text-2xl cursor-pointer'/> :<GoMoon className='text-2xl cursor-pointer' />}</button>
          <a href='#contact' className='hidden lg:flex items-center gap-2 px-8 py-2 border border-gray-500 rounded-full ml-4 dark:border-white/50'>
          Contact
          <MdArrowOutward />
          </a>
          <button
         onClick={openSideBar}
           className='block md:hidden ml-4 cursor-pointer'><RiMenu3Line className='text-2xl'/></button>
        </div>

        {/* side menubar  */}
        
        <ul ref={sideBarRef}
         className='flex flex-col md:hidden gap-4   px-12 py-10 bg-green-50 shadow-sm fixed -right-64 top-0 bottom-0 z-50 w-64 dark:bg-stone-700 '>
          <button
          onClick={closeSideBar}
           className='absolute top-6 right-6 text-2xl'><IoClose /></button>
        <li onClick={closeSideBar}><a href="#home" >Home</a></li>
        <li onClick={closeSideBar}><a href="#about">About me</a></li> 
        <li onClick={closeSideBar}><a href="#services">Services</a></li> 
        <li onClick={closeSideBar}><a href="#work">My Work</a></li> 
        <li onClick={closeSideBar}><a href="#contact">Contact me</a></li> 
        </ul>
      
    </nav>
    </>
  )
}

export default Navbar