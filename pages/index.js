import About from "@/sections/About";
import Hero from "@/sections/Hero";
import WorkExperince from "@/sections/WorkExperience";

export default function Home() {
  return (
    <>

    {/* <section id="hero" className="snap-start"> */}
    <section id="hero">
      <Hero />
    </section>

    {/* <section id="about" className="snap-center"> */}
    <section id="about">
      <About />
    </section>

    <section id="experience">
      <WorkExperince />
    </section>

    </>
    

  )
}
