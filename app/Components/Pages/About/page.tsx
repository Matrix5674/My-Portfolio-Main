"use client";

import { useRef, useState, useEffect } from 'react';
import Theme from '../../Theme';
import Card from '../../Card';
import { useScroll } from 'framer-motion';
import throttle from 'lodash/throttle';
import { PageProps } from '@/.next/types/app/page';

export interface AboutProps extends PageProps {
  data?: any[][];
  data2?: any[][];
}

const About: React.FC<AboutProps> = ({ data, data2, params, searchParams }) => {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end end"]
  });
  const [aboutOpacity, setAboutOpacity] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll: EventListener = throttle(() => {
        const scrollTop = window.scrollY;
        const aboutElement = aboutRef.current;
        if (aboutElement) {
          const viewportHeight = window.innerHeight;
          const aboutRect = aboutElement.getBoundingClientRect();
          const scrollProgress = Math.min(
            1,
            (scrollTop - aboutRect.top) / aboutRect.height
          );
          setAboutOpacity(scrollProgress);
        }
      }, 100); // Adjust the throttle delay as needed

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <main data-theme={Theme}>
      <div ref={aboutRef} style={{ marginTop: "75px", opacity: aboutOpacity }}>
        <div style={{ paddingTop: "30px", fontFamily: "OCR B Letterpress M W01 Regular" }}>
          <p className="text-7xl w-56 h-24 hover:text-gray-400" style={{ marginBottom: "50px", textDecoration: "underline", textUnderlinePosition: "under" }}>About</p>
          <p className="text-3xl text-warning hover:font-bold hover:underline">Skills</p>
        </div>
        <div className="max-w-10/12 text-neutral-content" style={{ display: 'inline-block', marginTop: "30px", paddingLeft: "10px", paddingTop: "10px", paddingBottom: "10px", fontFamily: "OCR B Letterpress M W01 Regular", borderWidth: "2px" }}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <button className="btn btn-active btn-primary hover:bg-sky-800 hover:rotate-3">HTML5</button>
            <button className="btn btn-success min-w-20 hover:bg-teal-800 hover:rotate-3">CSS3</button>
            <button className="btn btn-warning min-w-20 hover:bg-yellow-800 hover:rotate-3">TailwindCSS</button>
            <button className="btn btn-outline btn-default min-w-20 hover:rotate-3">React</button>
            <button className="btn btn-outline btn-accent min-w-20 hover:rotate-3">NextJS</button>
            <button className="btn btn-outline btn-primary min-w-20 hover:rotate-3">TypeScript</button>
            <button className="btn btn-outline btn-secondary min-w-20 hover:rotate-3">JavaScript</button>
            <button className="btn btn-outline btn-accent min-w-20 hover:rotate-3">Bootstrap</button>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button style={{ marginRight: "60px", marginTop: "15px" }} className="btn bg-gray-800 hover:bg-gray-900 hover:rotate-3">Bash</button>
            <button style={{ marginRight: "60px", marginTop: "15px" }} className="btn bg-red-600 hover:bg-red-900 text-black min-w-20 hover:rotate-3">Ubuntu</button>
            <button style={{ marginRight: "60px", marginTop: "15px" }} className="btn bg-orange-400 text-black min-w-20 hover:bg-orange-800 hover:rotate-3">Java</button>
            <button style={{ marginRight: "60px", marginTop: "15px" }} className="btn bg-sky-600 text-black min-w-20 hover:bg-sky-800 hover:rotate-3">Python</button>
            <button style={{ marginRight: "60px", marginTop: "15px" }} className="btn bg-purple-400 text-black min-w-20 hover:rotate-3">C</button>
            <button style={{ marginRight: "60px", marginTop: "15px" }} className="btn bg-white text-black min-w-20 hover:rotate-3">C++</button>
            <button style={{ marginRight: "60px", marginTop: "15px" }} className="btn bg-green-500 text-black min-w-20 hover:rotate-3">AI</button>
          </div>
        </div>
        <div className="text-neutral-content" style={{ marginTop: "30px", paddingTop: "10px", paddingBottom: "10px", fontFamily: "OCR B Letterpress M W01 Regular" }}>
          <p className="text-3xl text-warning hover:font-bold hover:underline">Experience</p>
          <div style={{ display: "flex", justifyContent: "row" }}>
            {data && data.map((row: any[], index: number) => (
              <Card
                key={index}
                title={row[0]}
                description={row[1]}
                btnTxt={row[3]}
                skills={row[2].split(", ")}
                skillqnt={row[2].split(", ").length}
                link={row[4]}
              />
            ))}
          </div>
        </div>
        <div className="text-neutral-content" style={{ marginTop: "30px", paddingTop: "10px", paddingBottom: "10px", fontFamily: "OCR B Letterpress M W01 Regular" }}>
          <p className="text-3xl text-warning hover:font-bold hover:underline">Certifications</p>
          <div style={{ display: "flex", justifyContent: "row" }}>
            {data2 && data2.map((row: any[], index: number) => (
              <Card
                key={index}
                title={row[0]}
                description={row[1]}
                btnTxt={row[3]}
                skills={row[2].split(", ")}
                skillqnt={row[2].split(", ").length}
                link={row[4]}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default About;