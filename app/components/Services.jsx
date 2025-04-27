import React from 'react'

const Services = () => {
  return (
    <div id='services' className='w-full  px-[12%] py-10 scroll-mt-30 '>
      <h4 className=' text-center mb-2'>What I offer</h4>
      <h1 className='text-2xl text-center font-semibold'>My Services</h1>

      <p className='mt-4 text-gray-600 text-center max-w-2xl mx-auto'>
        I am a junior frontend developer and I am eager to learn and grow as a developer.
      </p>
      <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8'>
        <li className='border-[0.5px] border-gray-400  rounded-xl p-6 cursor-pointer font-sans hover:shadow-lg hover:bg-green-100 hover:-translate-y-1 duration-500'>
          <h3 className='font-semibold  text-gray-800 mt-3 text-center'>Frontend Development</h3>
          <p className='mt-4 text-gray-700 text-sm text-center'>Building visually appealing and responsive user interfaces using HTML, Tailwind CSS, JavaScript, and React.</p>
        </li>

        <li className='border-[0.5px] border-gray-400  rounded-xl p-6 cursor-pointer font-sans hover:shadow-lg hover:bg-green-100 hover:-translate-y-1 duration-500'>
          <h3 className='font-semibold  text-gray-800 mt-3 text-center'>Website Optimization</h3>
          <p className='mt-4 text-gray-700 text-sm text-center'>Improving site performance and SEO using Next.js.</p>
        </li>

        <li className='border-[0.5px] border-gray-400  rounded-xl p-6 cursor-pointer font-sans hover:shadow-lg hover:bg-green-100 hover:-translate-y-1 duration-500'>
          <h3 className='font-semibold  text-gray-800 mt-3 text-center'>Custom Components</h3>
          <p className='mt-4 text-gray-700 text-sm text-center'>Creating reusable and dynamic UI components tailored to your clients' needs.</p>
        </li>
      </ul>
    </div>
  )
}

export default Services