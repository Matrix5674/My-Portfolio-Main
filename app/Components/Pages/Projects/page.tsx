'use client'
import Theme from "../../Theme";
import { useScroll } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import throttle from 'lodash/throttle'; // Correct import for lodash.throttle
import codeOfSpotAPI from "../../Assets/Code Spot. API.png";
import terminalOfSpotAPI from "../../Assets/Terminal Spot. API.png";
import ProjHighlights from "../../ProjHighlights";
import tictactoeGame from "../../Assets/tictactoeGame.png";
import tictactoeGit from "../../Assets/tictactoeGit.png";
import portfolioProj from "../../Assets/portfolioProj.png";
import portfolioGit from "../../Assets/portfolioGit.png";
import minesweeperGame from "../../Assets/minesweeperGame.png";
import minesweeperGit from "../../Assets/minesweeperGit.png";

export default function Projects() {
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
      
        {/*Project 1: Spotify API*/}
        <div className="grid grid-cols-1 gap-4 mr-16">
          <ProjHighlights 
            title="Spotify API" 
            btnTxt="View Spotify API" 
            imgUnder={codeOfSpotAPI} 
            imgTop={terminalOfSpotAPI} 
            link="" 
            description="A fully functioning command-line interface application, written in Python, that leverages the Spotify API to retrieve the top 10 albums and songs of any artist provided by the user. The application can also easily be modified to list a specific user's top 10 songs, artists, and albums." 
          />
          
          {/*Project 2: Minesweeper AI*/}
          <ProjHighlights 
            title="Minesweeper AI" 
            btnTxt="View Minesweeper" 
            imgTop={minesweeperGame} 
            imgUnder={minesweeperGit} 
            link="https://github.com/Matrix5674/Minesweeper/blob/main/minesweeper.py" 
            description="An Artificial Intelligence designed to make optimal moves in the traditional minesweeper game. The AI uses its own knowledge base to make inferences about the optimal moves. This project was created using Pygame library within Python." 
          />

          {/*Project 3: TicTacToe AI*/}
          <ProjHighlights 
            title="Tic-Tac-Toe AI" 
            btnTxt="View Tic-Tac-Toe AI" 
            imgTop={tictactoeGame} 
            imgUnder={tictactoeGit} 
            link="https://github.com/Matrix5674/TicTacToeAI-Python-" 
            description="An Artificial Intelligence algorithm constructed to optimally determine moves for Tic-Tac-Toe. The AI is coded fully in Python and utilizes a mini-max algorithm to determine optimal moves based on heuristic values assigned to the possible states." 
          />
      
          {/*Project 4: Portfolio Website*/}
          <ProjHighlights 
            title="Portfolio Website" 
            btnTxt="View Portfolio Github" 
            imgTop={portfolioProj} 
            imgUnder={portfolioGit} 
            link="https://github.com/Matrix5674/Portolio" 
            description="A well designed portfolio website dedicated to showcasing my achievements and learning advances through my software engineering career. This website was created using NextJS, TailwindCSS, and TypeScript. Coming soon will be API integrations with time, weather, Instagram, etc." 
          />    
        </div>
      </div>

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
    </main>
  )
}
