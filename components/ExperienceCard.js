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

        <div>
          <h4>FabLab Coordinator</h4>
          <p>American International University</p>
          <div>
            {/* Tech used */}
            {/* Tech used */}
            {/* Tech used */}
          </div>
          <p>Started work... - Ended...</p>
          <ul>
            <li>Summary Points</li>
            <li>Summary Points</li>
            <li>Summary Points</li>
            <li>Summary Points</li>
          </ul>
        </div>
        
    </article>
  )
}

export default ExperienceCard