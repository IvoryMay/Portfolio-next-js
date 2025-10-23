import React from 'react'
import { motion } from "motion/react"

const Services = ({isDarkMode, setIsDarkMode}) => {
  return (
    <motion.div
    initial={{ opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
    id='services' className='w-full  px-[12%] py-10 scroll-mt-30 '>
      <h4
      // initial={{y:-20, opacity:0}}
      // whileInView={{y:0,opacity:1}}
      // transition={{duration:0.5, delay:0.3}}
      className=' text-center mb-2'>What I offer</h4>
      <h1
      // initial={{y:-20, opacity:0}}
      // whileInView={{y:0,opacity:1}}
      // transition={{duration:1, delay:0.5}}
      className='text-2xl text-center font-semibold'>My Services</h1>

      <p
      // initial={{ opacity:0}}
      // whileInView={{opacity:1}}
      // transition={{duration:1, delay:0.7}}
      className='mt-4 text-gray-600 text-center max-w-2xl mx-auto dark:text-white'>
        I am a junior full stack developer and I can handle both frontend and backend development.
      </p>
      <div
      // initial={{y:-20, opacity:0}}
      // whileInView={{y:0,opacity:1}}
      // transition={{duration:1, delay:0.9}}
      className='flex flex-col  gap-6 mt-8'>
        <div
        // initial={{scale:0.7, opacity:0}}
        // whileInView={{scale:1,opacity:1}}
        // transition={{duration:1, delay:1.1}}
        className='border-[0.5px] border-gray-400  rounded-xl p-6 cursor-pointer font-sans hover:shadow-lg hover:bg-green-100 hover:-translate-y-1 duration-500 dark:bg-stone-700 dark:hover:bg-lime-700'>
          <h3 className='font-semibold  text-gray-800 mt-3 text-center dark:text-white'>Frontend Development</h3>
          <p className='mt-4 text-gray-700 text-sm text-center dark:text-white leading-6'>Building visually appealing and responsive user interfaces using <span className='font-semibold'> HTML, Tailwind CSS, JavaScript, React js, and Next js</span>.</p>
        </div>

        <div
        // initial={{scale:0.7, opacity:0}}
        // whileInView={{scale:1,opacity:1}}
        // transition={{duration:1, delay:1.1}}
        className='border-[0.5px] border-gray-400  rounded-xl p-6 cursor-pointer font-sans hover:shadow-lg hover:bg-green-100 hover:-translate-y-1 duration-500 dark:bg-stone-700 dark:hover:bg-lime-700'>
          <h3 className='font-semibold  text-gray-800 mt-3 text-center dark:text-white'>
            Backend Development
          </h3>
          <p className='mt-4 text-gray-700 text-sm text-center dark:text-white leading-6'>Building Dynamic Websites and RESTful APIs, handling Authentication & Authorization, and managing Databases by using <span className='font-semibold'> PHP, Laravel, and MySQL</span>. </p>
        </div>

        
      </div>
    </motion.div>
  )
}

export default Services