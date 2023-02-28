import BackgroundCircles from "@/components/BackgroundCircles";
import Button from "@/components/Button"
import {Cursor, useTypewriter} from "react-simple-typewriter";
import Image from "next/image";
import MeImage from '../images/me.png'

const Hero = () => {

  const [text, count] = useTypewriter({
      words: [
        "Hi, The name's Jose",
        "Team work lover",
        "AIU lover"
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

    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overlflow-hidden">
      <BackgroundCircles />
      <Image 
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={MeImage}
      />
      <div>
        <h2 className="text-sm dark:text-gray-500 text-gray-900 pb-2 px-5 tracking-[5px]"> Architect_Computational Designer_Software Developer</h2>
        <h1 className="text-2xl lg:text-6xl font-semibold px-10">
          <span className="mr-3 text-gray-900 dark:text-gray-500">{text}</span>
          <Cursor cursorColor="gray" />
        </h1>
      </div>
      
    </div>

  )
}

export default Hero