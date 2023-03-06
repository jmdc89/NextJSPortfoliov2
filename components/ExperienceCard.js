import React from 'react'
import { motion } from 'framer-motion'
import Image from "next/image";
import aiuImage from '../images/aiu.png'
import BasilicaImage from '../images/BasilicaSF-01.png'
import unespImage from '../images/unesp.png'

function ExperienceCard() {
  return (
    <article>
        <motion.div
          // initial={{
          //   x: -200,
          //   opacity: 0,
          // }}
          // transition={{
          //   duration: 1.2,
          // }}
          // whileInView={{opacity:1, x:0}}
          // viewport={{once:true}}
          // className="mt-10 mb-20 md:mb-0 flex-shrink-0 "
        >
        <Image
          className="w-56 md:w-64 md:h-64 xl:w-[300px] xl:h-[350px]"
          src={aiuImage}
        />
        </motion.div>
    </article>
  )
}

export default ExperienceCard