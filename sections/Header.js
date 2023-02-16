import { motion } from "framer-motion"
import { SocialIcon } from "react-social-icons"



const Header = () => {
 
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

          {/* <DarkModeSwitch
            style={{}}
            checked={isDarkMode}
            onChange = {handleDarkModeChange}
            // onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            size={50}
            moonColor={"gray"}
            sunColor={'black'}
          /> */}

          {/* <DarkModeButton /> */}

      </motion.div>

    </header>
    
  )

}

export default Header