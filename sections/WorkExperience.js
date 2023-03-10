import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from '@/components/ExperienceCard'

function WorkExperience() {
  return (
    <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1.5}}
      className='h-screen flex relative overflow-hidden flex-col text-left max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='mt-20 mb-30 inline-flex uppercase tracking-[20px] dark:text-gray-500 text-2xl'>
            Experience
        </h3>

        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </div>
    </motion.div>
  )
}

export default WorkExperience