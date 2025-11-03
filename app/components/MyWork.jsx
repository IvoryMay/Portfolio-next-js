import React from 'react'
import myWorks from '../Data/myWork'
import { FaLocationArrow } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "motion/react";
import { montserrat, Montserrat,poppins,Poppins } from '../Data/font';

const MyWork = ({isDarkMode, setIsDarkMode}) => {
  return (
    <motion.div
    initial={{ opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    id='work' className='w-full  px-[12%] py-10 scroll-mt-30 '>
       <h4
       className={`${montserrat.className} text-center mb-2`}>My portfolio</h4>
      <h1
      // initial={{y:-20, opacity:0}}
      // whileInView={{y:0,opacity:1}}
      // transition={{duration:1, delay:0.5}}
      className={`${poppins.className} text-2xl text-center font-semibold`}>My Latest Work</h1>

      <p 
      // initial={{ opacity:0}}
      // whileInView={{opacity:1}}
      // transition={{duration:1, delay:0.7}}
      className={`${poppins.className} mt-4 text-gray-600 text-center max-w-2xl mx-auto dark:text-white`}>
        Welcome to my web development portfolio! Explore a collection of my latest projects, showcasing my expertise in frontend web development.
      </p>

    
      <div
      // initial={{y:-20, opacity:0}}
      // whileInView={{y:0,opacity:1}}
      // transition={{duration:1, delay:0.9}}
      className={`${poppins.className} grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6 mt-8`}>
        {myWorks.map((el,index)=>(
          <div
        //   initial={{scale:0.7, opacity:0}}
        // whileInView={{scale:1,opacity:1}}
        // transition={{duration:1, delay:1.1}}
          key={index} style={{backgroundImage:`url(${el.image})`}} className='aspect-square bg-contain bg-no-repeat bg-center rounded-lg relative border-[0.5px] border-gray-400 bg-blue-200  cursor-pointer  hover:shadow-lg hover:bg-green-100 hover:-translate-y-1 duration-500 group'>
          <div>
          <h3 className='font-semibold  text-gray-800 mt-3 text-center'>{el.title}</h3>
          {/* <p className=' text-gray-700 text-xs text-center '>({el.description})</p> */}
          </div>
          <div className='absolute bottom-2 left-1/2 -translate-x-1/2 group-hover:bottom-4 duration-500'>
          <button className='text-stone-700 hover:text-stone-900 hover:scale-95'><a href={el.liveLink} target='_blank' rel="noreferrer" className='flex items-center  w-32 gap-3 border border-gray-200 px-3 py-1 rounded-full  bg-white text-lime-700'><span>visit app</span ><FaLocationArrow className=' size-3'/></a></button>
          </div>
          

        </div>
        ))}
        

        
        
       
      </div>
      <motion.div
      initial={{y:20, opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition ={{duration:1, delay:0.5}}
      className='flex items-center justify-center'>
      <button className='text-stone-700 hover:text-stone-900 hover:scale-95 mt-6  '>
        <a href="https://github.com/IvoryMay" target='_blank' rel="noreferrer" className='flex items-center justify-around  gap-6 border border-gray-400 px-3 py-1 rounded-full dark:text-white dark:bg-stone-700 '>
          <span className={`${montserrat.className} font-semibold`}>Explore more on GitHub</span >
          <FaArrowRightLong className=' size-4'/>
          </a>
          </button>
      </motion.div>
    </motion.div>
  )
}

export default MyWork