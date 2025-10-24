
"use client"


import React from 'react';
import { FaArrowRight, FaLocationArrow } from 'react-icons/fa';
import { FaArrowRightLong } from "react-icons/fa6";
import {useState} from "react";
import { motion } from "motion/react"

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    // const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    formData.append("access_key", "2546f95f-7857-4238-bd02-9c092abecdd1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  
  return (
    <motion.div 
    initial={{ opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    id='contact' className='w-full  px-[12%] py-10 scroll-mt-30 '>
      <h4
      // initial={{y:-20, opacity:0}}
      // whileInView={{y:0,opacity:1}}
      // transition={{duration:0.5, delay:0.3}}
      className=' text-center mb-2'>Connect with me</h4>
      <h1
      // initial={{y:-20, opacity:0}}
      // whileInView={{y:0,opacity:1}}
      // transition={{duration:1, delay:0.5}}
      className='text-2xl text-center font-semibold'>Get in touch</h1>

      <p 
      // initial={{ opacity:0}}
      // whileInView={{opacity:1}}
      // transition={{duration:1, delay:0.6}}
      className='mt-4 text-gray-600 text-center max-w-2xl mx-auto dark:text-white mb-3'>
        I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.
      </p>

      <div >
        <form
        initial={{ opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1, delay:0.8}}
        onSubmit={onSubmit} className='max-w-2xl mx-auto'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 '>
          <input 
          initial={{ x:-50, opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{duration:1.1, delay:0.9}}
          type="text" placeholder='Enter your name'  required name="name" className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-lg bg-white dark:bg-stone-700 dark:text-white dark:placeholder:text-white dark:border-white/90'/>
          <input
          initial={{ x:50, opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{duration:1.1, delay:0.9}}
          type="email" placeholder='Enter your email'  required name="email" className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-lg bg-white dark:bg-stone-700 dark:placeholder:text-white dark:border-white/90'/>
          </div>
          <textarea
          initial={{ y:50, opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{duration:1.1, delay:1}}
          id="" cols="30" rows="6" name ="message" placeholder='Enter your message' className='w-full mt-4 p-3 outline-none border-[0.5px] border-gray-400 rounded-lg bg-white  dark:bg-stone-700 dark:placeholder:text-white dark:border-white/90'/>
          <motion.button
          initial={{ y:60, opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{duration:1.1, delay:0.5}}
          type='submit' className='w-max mt-4 px-4 py-2 outline-none border-[0.5px] border-gray-400 rounded-full bg-black/80 text-white flex items-center gap-2 justify-center mx-auto cursor-pointer hover:bg-black hover:scale-95'><span>Send message</span><FaArrowRight /></motion.button>

          <p>{result}</p>
        </form>
      </div>
    </motion.div>
  )
}

export default Contact;

// web3forms => documentation => js frameworks => react js => simple react contact form