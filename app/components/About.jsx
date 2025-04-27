import Image from 'next/image'
import React from 'react'
import aboutMe from '../Data/aboutMe'

const About = () => {
  return (
    <div id='about' className='w-full  px-[12%] py-10 scroll-mt-30 '>
      <h4 className=' text-center mb-2'>Introduction</h4>
      <h1 className='text-2xl text-center font-semibold'>About me</h1>

      <div className='flex items-center gap-6 lg:flex-row flex-col mt-8 w-full mx-auto'>
        <div className=''>
          <Image src="/me-kalaw.jpg"  alt="user" width={150} height={150} className='w-64 sm:w-80 rounded-3xl' />
          </div>
        <div className='flex-1'>
          <p className=' max-w-2xl mb-10 font-sans '>I'm a junior Frontend Developer. I thrive on learning and growing as a developer, and I am eager to join a collaborative development team where I can expand my skills,
        contribute to meaningful projects, and tackle exciting challenges. </p>
          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 ' >
            {aboutMe.map((el,index)=>(
              <li key={index} className='border-[0.5px] border-gray-400  rounded-xl p-6 cursor-pointer font-sans hover:shadow-lg hover:bg-green-100 hover:-translate-y-1 duration-500'>
                
                <span className='text-xl '>{el.icon}</span>
                <h3 className='font-semibold  text-gray-700 mt-3'>{el.title}</h3>
                <p className='mt-4 text-gray-600 text-sm'>{el.description}</p>
                
              </li>
            ))}
          </ul>
          <div className='mt-8'>
            <h3 className='font-semibold text-gray-800 text-lg mb-2'>Tools I use</h3>
            <ul className='flex flex-row gap-2 items-center'>
              <li className='border-[0.5px] border-gray-400  rounded-xl p-2 cursor-pointer font-sans hover:shadow-lg hover:-translate-y-1 duration-500  size-12 '><Image src="/vs code.jpg"  alt="vscode" width={50} height={50} className='pt-1 pr-1'  /></li>
              <li className='border-[0.5px] border-gray-400  rounded-xl p-2 cursor-pointer font-sans hover:shadow-lg hover:-translate-y-1 duration-500  size-12'><Image src="/zustand-white.jpg"  alt="zustand" width={50} height={50} className='pt-1.5' /></li>
              <li className='border-[0.5px] border-gray-400  rounded-xl p-2 cursor-pointer  hover:shadow-lg  hover:-translate-y-1 duration-500  size-12 pb-2.5 pl-2.5 font-mono'>swr</li>
              <li className='border-[0.5px] border-gray-400  rounded-xl p-2 cursor-pointer font-sans hover:shadow-lg hover:-translate-y-1 duration-500  size-12 pt-4'><Image src="/git-icon.png"  alt="git-icon" width={50} height={50}  /></li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About