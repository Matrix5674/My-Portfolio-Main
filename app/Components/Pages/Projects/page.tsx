'use client'
import Theme from "../../Theme";
import { useScroll } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import throttle from 'lodash/throttle'; // Correct import for lodash.throttle
//import codeOfSpotAPI from "../../Assets/Code Spot. API.png";
//import terminalOfSpotAPI from "../../Assets/Terminal Spot. API.png";
import ProjHighlights from "../../ProjHighlights";
/*import tictactoeGame from "../../Assets/tictactoeGame.png";
import tictactoeGit from "../../Assets/tictactoeGit.png";
import portfolioProj from "../../Assets/portfolioProj.png";
import portfolioGit from "../../Assets/portfolioGit.png";
import minesweeperGame from "../../Assets/minesweeperGame.png";
import minesweeperGit from "../../Assets/minesweeperGit.png";*/
import { PageProps } from "@/.next/types/app/page";

export interface ProjectProps extends PageProps {
  data?: any[][];
}

const Project: React.FC<ProjectProps> = ({ data, params, searchParams }) => {
  const projectRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ["start end", "end end"]
  });

  const [projectOpacity, setProjectOpacity] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = throttle(() => {
        const scrollTop = window.scrollY;
        const projectElement = projectRef.current;
        if (projectElement) { 
          const projectRect = projectElement.getBoundingClientRect();
          const scrollProgress = Math.min(
            1,
            ((scrollTop - projectRect.top) / projectRect.height)
          );
          setProjectOpacity(scrollProgress);
        }
      }, 100); // Adjust the throttle delay as needed

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <main data-theme={Theme} className="flex-wrap mt-[100px]">
      <div ref={projectRef} id="ProjectID" style={{ opacity: projectOpacity }}>
        <p className="text-6xl w-56 h-24 hover:text-gray-400 mb-5 underline underline-offset-[15px]">Projects</p>

        {data && data.map((row: any[], index: number) => (
          <div key={index} className="grid grid-cols-1 gap-4 mr-16">
            <ProjHighlights
              title={row[0]}
              btnTxt={row[2]}
              imgUnder={row[3]}
              imgTop={row[4]}
              link={row[5]}
              description={row[1]}
            />
          </div>
        ))}
      
        

      {/* Cool Button Component */}
      <div className="flex justify-end mt-6 mr-16">
        <a href="https://github.com/Matrix5674" target="_blank" rel="noopener noreferrer">
          <button className="animated-button">
            <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
            <span className="text">View My Github</span>
            <span className="circle"></span>
            <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </button>
        </a>
      </div>
      </div>
    </main>
  )
}
export default Project;