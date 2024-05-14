'use client'
import {useRouter} from 'next/navigation'
import Projects from "./Components/Pages/Projects/page";
import Theme from "./Components/Theme";
import About from "./Components/Pages/About/page";
import Blog from "./Components/Pages/Blog/page"
import Awards from "./Components/Pages/Awards/page"
import SocialBar from "./Components/SocialBar";
import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Home/page";
import {motion} from "framer-motion"

export default function Main() {

  const router = useRouter();

  return (
      <main className="flex-col" data-theme={Theme}>
        
        <div className="fixed justify-center z-[100] w-full top-0">
          <Navbar/>
        </div>


        <motion.div style={{opacity:0}} animate={{opacity:1}} transition={{duration:4}}>
          <SocialBar/>
        </motion.div >
       

          <div id="Home" className="hero"><Home/></div>
          <div className= "relative" id="About"><About/></div>
          <div className= "relative mb-10" id="Projects"><Projects/></div>
          {/*<div id="Awards"><Awards/></div>*/}
          
      </main>
  )};
