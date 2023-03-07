import BackgroundCircles from "@/components/BackgroundCircles";
import Button from "@/components/Button"
import {Cursor, useTypewriter} from "react-simple-typewriter";
import Image from "next/image";
import MeImage from '../images/me.png'
import Link from "next/link";
import Arrows from "@/components/Arrows";

const Hero = () => {

  const [text, count] = useTypewriter({
      words: [
        "Architect",
        "University Professor",
        "Computational Designer",
        "Software Developer",
        "Digital Fabrication Specialist"
      ],
      loop: true,
      delay: 2000,
  });

  return (
    // <section className="mt-16">
    //   <h1 className="text-7xl font-bold">Hi I' m Jose</h1>
    //   <h3 className="text-4xl my-3">I am a web Developer</h3>
    //   <p className="text-gray-700 mb-8 dark:text-yellow-300">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
    //   <Button
    //     className="bg-purple-600 dark:bg-yellow-400 text-white px-6"
    //   >Hire Me!</Button>
    // </section>

    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overlflow-hidden z-0">
      <BackgroundCircles />
      <Image 
        className="relative rounded-full h-40 w-40 mx-auto object-cover"
        src={MeImage}
        alt="Hero"
        priority
      />
      <div>
        <h2 className="text-lg dark:text-gray-500 text-gray-900 pb-2 px-5 tracking-[5px]">"Hi, this is Jose",</h2>
        <h1 className="text-2xl font-semibold px-10">
          <span className="mr-3 text-gray-900 dark:text-gray-500">{text}</span>
          <Cursor cursorColor="gray" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
          <button className="heroButton">About</button>
          </Link>

          <Link href="#experience">
          <button className="heroButton">Experience</button>
          </Link>

          <Link href="#skills">
          <button className="heroButton">Skill</button>
          </Link>

          <Link href="#projects">
          <button className="heroButton">Projects</button>
          </Link>
          
        </div>
        
      </div>

      <Arrows />
      
    </div>

  )
}

export default Hero