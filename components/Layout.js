import Footer from "@/sections/Footer"
import Header from "@/sections/Header"
import Head from "next/head"

const Layout = ({children}) => {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-scroll z-0">
    <Head>
       <title>Jmdc's Portfolio</title> 
    </Head>
    <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow ">
            {children}
        </main>
        <Footer/>
    </div>
    </div>
  )
}

export default Layout