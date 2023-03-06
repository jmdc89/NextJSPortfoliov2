import React from 'react'
import { motion } from 'framer-motion'
import Image from "next/image";
import aiuImage from '../images/aiu.png'
import BasilicaImage from '../images/BasilicaSF-01.png'
import rhinoLogo from '../images/rhino.png'
import unespImage from '../images/unesp.png'

function ExperienceCard() {
  return (
    <article className='flex  flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px]'>
        <motion.div
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          className="flex relative"
        >
        <Image
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
          src={aiuImage}
          alt="aiu logo"
        />
        </motion.div>

        <div className='px-0 md:px-10'>
          <h4 className='text-4xl font-light'>FabLab Coordinator</h4>
          <p className='font-bold text-2xl mt-1'>American International University</p>
          <div className='flex space-x-2 my-2'>
            <Image
              className="h-10 w-10 rounded-full"
              src={rhinoLogo}
              alt="aiu logo"
           />

           <Image
              className="h-10 w-10 rounded-full"
              src={rhinoLogo}
              alt="aiu logo"
           />

           <Image
              className="h-10 w-10 rounded-full"
              src={rhinoLogo}
              alt="aiu logo"
           />

          </div>
          <p className='uppercase py-5 text-gray-300'>Started work... - Ended...</p>
          <ul className='list-disc space-y-4 ml-5 text-lg'>
            <li >Summary Points</li>
            <li>Summary Points</li>
            <li>Summary Points</li>
            <li>Summary Points</li>
          </ul>
        </div>

    </article>
  )
}

export default ExperienceCard