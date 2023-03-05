import React from 'react'
import {motion} from "framer-motion"
import Image from "next/image";
import AboutImage from '../images/about.jpg'

function About() {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left  md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
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
          className="rounded-full h-60 w-60 mx-auto object-cover"
          src={AboutImage}
        />
        </motion.div>
        


    </div>
  )
}

export default About