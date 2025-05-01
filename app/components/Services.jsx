import React from 'react'
import { motion } from "motion/react"

const Services = ({isDarkMode, setIsDarkMode}) => {
  return (
    <motion.div
    initial={{ opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
    id='services' className='w-full  px-[12%] py-10 scroll-mt-30 '>
      <motion.h4
      initial={{y:-20, opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.5, delay:0.3}}
      className=' text-center mb-2'>What I offer</motion.h4>
      <motion.h1
      initial={{y:-20, opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:1, delay:0.5}}
      className='text-2xl text-center font-semibold'>My Services</motion.h1>

      <motion.p
      initial={{ opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1, delay:0.7}}
      className='mt-4 text-gray-600 text-center max-w-2xl mx-auto dark:text-white'>
        I am a junior frontend developer and I am eager to learn and grow as a developer.
      </motion.p>
      <motion.ul
      initial={{y:-20, opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:1, delay:0.9}}
      className='grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8'>
        <motion.li 
        initial={{scale:0.7, opacity:0}}
        whileInView={{scale:1,opacity:1}}
        transition={{duration:1, delay:1.1}}
        className='border-[0.5px] border-gray-400  rounded-xl p-6 cursor-pointer font-sans hover:shadow-lg hover:bg-green-100 hover:-translate-y-1 duration-500 dark:bg-stone-700 dark:hover:bg-lime-700'>
          <h3 className='font-semibold  text-gray-800 mt-3 text-center dark:text-white'>Frontend Development</h3>
          <p className='mt-4 text-gray-700 text-sm text-center dark:text-white'>Building visually appealing and responsive user interfaces using HTML, Tailwind CSS, JavaScript, and React.</p>
        </motion.li>

        <motion.li
        initial={{scale:0.7, opacity:0}}
        whileInView={{scale:1,opacity:1}}
        transition={{duration:1, delay:1.1}}
        className='border-[0.5px] border-gray-400  rounded-xl p-6 cursor-pointer font-sans hover:shadow-lg hover:bg-green-100 hover:-translate-y-1 duration-500 dark:bg-stone-700 dark:hover:bg-lime-700'>
          <h3 className='font-semibold  text-gray-800 mt-3 text-center dark:text-white'>Website Optimization</h3>
          <p className='mt-4 text-gray-700 text-sm text-center dark:text-white'>Improving site performance and SEO using Next.js.</p>
        </motion.li>

        <motion.li
        initial={{scale:0.7, opacity:0}}
        whileInView={{scale:1,opacity:1}}
        transition={{duration:1, delay:1.1}}
        className='border-[0.5px] border-gray-400  rounded-xl p-6 cursor-pointer font-sans hover:shadow-lg hover:bg-green-100 hover:-translate-y-1 duration-500 dark:bg-stone-700 dark:hover:bg-lime-700'>
          <h3 className='font-semibold  text-gray-800 mt-3 text-center dark:text-white'>Custom Components</h3>
          <p className='mt-4 text-gray-700 text-sm text-center dark:text-white'>Creating reusable and dynamic UI components tailored to your clients' needs.</p>
        </motion.li>
      </motion.ul>
    </motion.div>
  )
}

export default Services