import React from 'react'
import {motion} from "framer-motion"
import Image from "next/image";
import AboutImage from '../images/about.jpg'

function About() {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left  md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center pointer-events-none'>
        <h3 className='absolute top-24 uppercase tracking-[20px] dark:text-gray-500 text-2xl'>
            About
        </h3>

        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{opacity:1, x:0}}
          viewport={{once:true}}
        >
        <Image
          className="mt-20 mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[300px] xl:h-[400px]"
          src={AboutImage}
        />
        </motion.div>
        
        <div className='space-y-10 px-0 md:px-10'>
          <h4 className='text-4xl font-semibold'>Here is a little background</h4>
        </div>


    </div>
  )
}

export default About