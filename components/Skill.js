import React from 'react'
import { motion } from 'framer-motion'
import Image from "next/image";
import ThDLogo from '../images/3dprintinglogo.png'
import cncLogo from '../images/cnclogo.png'


function Skill({directionLeft}) {
  return (
    <motion.div
    initial={{
      x: directionLeft ? -200 : 200,
      opacity:0
    }}
    whileInView={{opacity:1, x: 0}}
    transition={{duration:1}}
    className='group relative flex cursor-pointer'
    >
      <Image
          className="w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[300px] xl:h-[350px]"
          src={ThDLogo}
        />
    </motion.div>
  )
}

export default Skill