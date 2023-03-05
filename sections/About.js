import React from 'react'
import {motion} from "framer-motion"
import Image from "next/image";
import AboutImage from '../images/about.jpg'

function About() {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left  md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center pointer-events-none'>
        <h3 className='md:absolute top-24 uppercase tracking-[20px] dark:text-gray-500 text-2xl'>
            About.<span className='dark:text-[#F7AB0A] text-blue-900'>ME</span>
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
          className="mt-10 mb-20 md:mb-0 flex-shrink-0 "
        >
        <Image
          className="w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[300px] xl:h-[350px]"
          src={AboutImage}
        />
        </motion.div>
        
        <div className='space-y-10 px-0 md:px-10'>
          {/* <h4 className='text-4xl font-semibold dark:text-gray-500'>Here is a <span className='dark:text-[#F7AB0A] text-blue-900'>little</span> background</h4> */}
          <p className='text-base dark:text-gray-500'>
          Hey there, it's me, José - your go-to guy for problem-solving with style! As a former architect turned coder, I've got a knack for designing creative solutions that really stand out.
          <br/>
          <br/>
          I've been lucky enough to live all over the world, from Europe to Mexico, Brazil to the Middle East. My diverse experiences have given me a unique perspective and endless creativity. I even had the chance to help finish the incredible Sagrada Familia in Barcelona!
          <br/>
          <br/>
          As a university professor and FabLab coordinator, I've honed my skills in design computation using Rhinoceros and Grasshopper. And thanks to the amazing power of AI, I can handle any challenge that comes my way with ease - no sweat required!
          <br/>
          <br/>
          But don't let my technical skills fool you - I've got a great sense of humor and love to live life to the fullest. So if you're looking for a coder who can crack a joke and take on any adventure, look no further than yours truly - José!
          </p>

        </div>


    </div>
  )
}

export default About