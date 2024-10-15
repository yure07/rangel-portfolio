import { useRef } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Certificates } from "./components/Certificates";
//import { Projects } from "./components/Projects";

function App() {
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const certificatesRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null)
  
  return (
    <div className="flex flex-col self-center mx-auto max-w-[1300px]">
     <Header sectionsRefs={{ homeRef, aboutRef, projectsRef, certificatesRef, contactRef, }}/>
     <Home ref={homeRef}/>
     <About ref={aboutRef}/>
     {/* <Projects ref={projectsRef}/> */}
     <Certificates ref={certificatesRef}/>
     <Contact ref={contactRef}/>
    </div>
  )
}

export default App
