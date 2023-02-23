import BackgroundCircles from "@/components/BackgroundCircles";
import Button from "@/components/Button"
import {Cursor, useTypewriter} from "react-simple-typewriter";

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
      <h1>
        <span className="text-blue-900 dark:text-red-200">{text}</span>
        <Cursor cursorColor="blue" />
      </h1>
    </div>

  )
}

export default Hero