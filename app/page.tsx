'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

import Projects from './Components/Pages/Projects/page';
import Theme from './Components/Theme';
import About from './Components/Pages/About/page';
import Blog from './Components/Pages/Blog/page'; // Note: Blog is not used in this file
import Awards from './Components/Pages/Awards/page'; // Note: Awards is commented out
import SocialBar from './Components/SocialBar';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home/page';

export default function Main() {
  const router = useRouter(); // Note: `router` is not used

  return (
    <main className="flex flex-col" data-theme={Theme}>
      <div className="fixed z-[100] w-full top-0">
        <Navbar />
      </div>

      <motion.div
        style={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4 }}
      >
        <SocialBar />
      </motion.div>

      <div id="Home" className="hero">
        <Home />
      </div>
      <div id="About" className="relative ml-[200px]">
        <About />
      </div>
      <div id="Projects" className="relative mb-10 ml-[200px]">
        <Projects />
      </div>
      {/* <div id="Awards"><Awards /></div> */}
    </main>
  );
}
