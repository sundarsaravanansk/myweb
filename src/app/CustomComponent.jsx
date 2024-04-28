import About from "./Component/About/About"
import Contact from "./Component/Contact/Contact"
import Intro from "./Component/Indroduction/Intro"
import Projects from "./Component/Projects/Projects"
import Skill from "./Component/Skill/Skill"




const CustomComponent = () => {
  return (
    <>
      <div className="main-wrapper">
        <video className="bg-video fixed top-0 bottom-0 left-0 right-0 object-cover h-[100vh] w-[100%] "
          autoPlay
          muted
          loop
          preload="metadata"
          poster="/Intro/Logo/webvideo2.jpg"
        >
          <source
            src="/Intro/webvideo3.mp4"
            type="video/mp4"
          />
        </video>
        <div className=" overflow-x-hidden absolute top-0 left-0 right-0 bg-[#00000083]">

          <div className="container mx-auto  px-8 lg:px-10">
            <Intro />

            <About />
            <Skill />
            <Projects />
         
            <Contact />
          </div>
        </div>
      </div>

    </>
  )
}

export default CustomComponent