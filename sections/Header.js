import Button from "@/components/Button"
import { motion } from "framer-motion"
import { SocialIcon } from "react-social-icons"



const Header = () => {

  const renderThemeChanger = () => {
    return (
        <Button className = "bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
        </Button>
    )
  }

 
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-100 xl:items-center">
      
      <motion.div 
      initial={{
        x: -500,
        opacity: 0,
        scale: 0.5
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-row items-center">

        {/* Social Icons */}
        <SocialIcon 
        url="https://www.linkedin.com/in/jos%C3%A9-manuel-dom%C3%ADnguez-425b1b113/"
        fgColor = 'black'
        // fgColor={ theme === 'light' ? "black" : "gray" }
        bgColor="transparent"
        />

        <SocialIcon 
        url="https://github.com/jmdc89" 
        fgColor = 'black'
        // fgColor={ theme === 'light' ? "black" : "gray" }
        bgColor="transparent"
        />

        <SocialIcon
        className="cursor-pointer"
        network="email"
        fgColor = 'black'
        // fgColor={ theme === 'light' ? "black" : "gray" }
        bgColor="transparent"
        />

      </motion.div>

      <motion.div 

          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1.5,
          }}

          className="flex flex-row items-center">

          {renderThemeChanger()}

      </motion.div>

    </header>
    
  )

}

export default Header