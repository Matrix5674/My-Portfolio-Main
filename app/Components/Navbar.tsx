'use client'
import React from 'react'
import {motion} from 'framer-motion'
import AnimatedText from './AnimatedText'
import Theme from './Theme'
import {useRouter} from "next/navigation"
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    const router = useRouter();

    const navPressed = function (element_id: string) {
        const element = document.getElementById(element_id)
        element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
      }
      if (typeof window !== "undefined") {
        document.addEventListener("DOMContentLoaded", function() {
          document.getElementById("navbar")?.animate({opacity:[0, 1]}, 1000);
        });
      }

  return (
    <div data-theme={Theme} id ="navbar" className="flex-row justify-center">
      
        <div className="navbar bg-neutral text-neutral-content justify-between" >
            <div className="flex-row">
              <div className="spinner ml-2 mr-2">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
               <AnimatedText once className='text-xl hover:text-success ml-5 font-bold' speed={0.1} text="My Portfolio"></AnimatedText>
               </div>
            <ul className="">
              <motion.button onClick={() => navPressed('Home')} className="btn btn-ghost text-xl hover:underline hover:text-warning transition-all duration-200 opacity-0" animate={{opacity:1}} transition={{duration: 4}}>Home</motion.button>
              <motion.button onClick={() => navPressed('About')} className="btn btn-ghost text-xl hover:underline hover:text-warning transition-all duration-200 opacity-0" animate={{opacity:1}} transition={{duration: 4}}>About</motion.button>
              <motion.button onClick={() => navPressed('Projects')} className="btn btn-ghost text-xl hover:underline hover:text-warning transition-all duration-200 opacity-0" animate={{opacity:1}} transition={{duration: 4}}>Projects</motion.button>
              {/*<motion.button onClick={() => navPressed('Awards')} className="btn btn-ghost text-xl hover:underline hover:text-warning transition-all duration-200 opacity-0" animate={{opacity:1}} transition={{duration: 4}}>Awards</motion.button>*/}
              <Link href="/Components/Pages/Blog" target="_blank"> 
                <motion.button className="btn btn-ghost text-xl hover:underline hover:text-warning transition-all duration-200 opacity-0" animate={{opacity:1}} transition={{duration: 4}}>Blog <img width="36" height="36" src="https://img.icons8.com/pulsar-color/48/external-link-squared.png" alt="external-link-squared"/></motion.button>
              </Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
