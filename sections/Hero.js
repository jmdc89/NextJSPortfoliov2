import Button from "@/components/Button"
import {Cursor, useTypewriter} from "react-simple-typewriter";

const Hero = () => {

  // const [text, count] = useTypewriter({
  //     words: [
  //       "Hi, The name's Jose",
  //       "Coffee Lover",
  //       "Code lover"
  //     ],
  //     loop: true,
  //     delay: 2000,
  // });

  return (
    <section className="mt-16">
      <h1 className="text-7xl font-bold">Hi I' m Jose</h1>
      <h3 className="text-4xl my-3">I am a web Developer</h3>
      <p className="text-gray-700 mb-8">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
      <Button
        className="bg-purple-600 text-white px-6"
      >Hire Me!</Button>
    </section>

    // <div>
    //   <h1>
    //     <span>{text}</span>
    //     <Cursor cursorColor="blue" />
    //   </h1>
    // </div>

  )
}

export default Hero