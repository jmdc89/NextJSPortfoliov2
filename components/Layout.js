import Footer from "@/sections/Footer"
import Header from "@/sections/Header"
import Head from "next/head"

const Layout = ({children}) => {
  return (
    <>
    <Head>
       <title>Jmdc's Portfolio</title> 
    </Head>
    <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow bg-red-400">
            {children}
        </main>
        <Footer/>
    </div>
    </>
  )
}

export default Layout