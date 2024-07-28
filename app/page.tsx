'use client';


import { motion } from 'framer-motion';

import Projects from './Components/Pages/Projects/page';
import Theme from './Components/Theme';
import DataFetcher from './dataFetcher';
import Awards from './Components/Pages/Awards/page'; // Note: Awards is commented out
import SocialBar from './Components/SocialBar';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home/page';
import DataFetcherProjects from './dataFetcherProjects';

export default function page() {
  

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
        <DataFetcher />
      </div>
      <div id="Projects" className="relative mb-10 ml-[200px]">
        <DataFetcherProjects />
      </div>
      {/* <div id="Awards"><Awards /></div> */}
    </main>
  );
}
