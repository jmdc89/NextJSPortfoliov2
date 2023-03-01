import Button from "@/components/Button"
import { motion } from "framer-motion"
import { SocialIcon } from "react-social-icons"
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";



const Header = () => {

  const { systemTheme, theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);



  const renderThemeChanger = () => {
    if(!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;
    
    if(currentTheme === 'dark') {
      return (
        <Button className="bg-gray-200 dark:bg-gray-600"
          onClick={() => setTheme('light')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
        </Button>
      )
    } else {
      return (
        <Button className="bg-gray-200"
          onClick={() => setTheme('dark')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </Button>
      )
    }

  }

 
  return (
    <header 
    // className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-100 xl:items-center"
    className="sticky top-0 p-5 flex items-center justify-between"
    >
      
      <motion.div
        // className="flex flex-row items-center justify-start"
        className="flex gap-4"
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
        >

        {/* Social Icons */}
        <SocialIcon 
        url="https://www.linkedin.com/in/jos%C3%A9-manuel-dom%C3%ADnguez-425b1b113/"
        fgColor={ theme === 'light' ? "black" : "gray" }
        bgColor="transparent"
        />

        <SocialIcon 
        url="https://github.com/jmdc89" 
        fgColor={ theme === 'light' ? "black" : "gray" }
        bgColor="transparent"
        />

        <SocialIcon
        className="cursor-pointer"
        network="email"
        fgColor={ theme === 'light' ? "black" : "gray" }
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

          className="flex flex-row items-center justify-end">

          {renderThemeChanger()}

      </motion.div>

    </header>
    
  )

}

export default Header