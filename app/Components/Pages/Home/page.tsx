'use client'

import { useScroll } from 'framer-motion';
import {useRouter} from 'next/navigation';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import AnimatedText from '../../AnimatedText';
import { motion } from 'framer-motion';
import Theme from '../../Theme';
import throttle from 'lodash/throttle';

export default function Home() {
    const homeRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
      target: homeRef,
      offset: ["start end", "end end"]
    });
    const [homeOpacity, setHomeOpacity] = useState(0);

    useEffect(() => {
        const handleScroll = throttle(() => {
            const scrollTop = window.scrollY;
            const homeElement = homeRef.current;
            if (homeElement) {
                const viewportHeight = window.innerHeight;
                const homeRect = homeElement.getBoundingClientRect();
                const scrollProgress = Math.min(
                    1,
                    (scrollTop - homeRect.top) / homeRect.height
                );
                setHomeOpacity(scrollProgress);
            }
        }, 100); // Adjust the throttle delay as needed

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const router = useRouter();

    const navbtnPressed = useCallback((element_id: string) => {
        const element = document.getElementById(element_id);
        element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            document.addEventListener("DOMContentLoaded", function() {
                document.getElementById("navbar")?.animate({opacity:[0, 1]}, 1000);
            });
        }
    }, []);

    return (
        <div data-theme={Theme} ref={homeRef} className="flex-col mt-[150px]" style={{opacity: (1 - homeOpacity)}}>
            <AnimatedText speed={0.1} once text="Hi, my name is..." className="text-xl text-success mb-[10px] font-Letterpress"/>
            <motion.div style={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 4 }}>
                <AnimatedText speed={0.1} once className="text-8xl mb-[10px] font-LouisRegular" text="Soham Sahasrabuddhe."></AnimatedText>
                <AnimatedText speed={0.1} once className="text-5xl mb-[20px] font-LouisRegular" text="I am a Full Stack Developer."></AnimatedText>
                <p>
                    Welcome to my portfolio! I am a Full Stack Developer from Sunnyvale, California. Currently, I am a
                    <br />
                    10th grader at Fremont High, hoping to pursue a Computer Science major upon graduation. In my freetime,
                    <br />
                    I enjoy working on personal projects (like this website), and am always pushing to learn more.
                    <br />
                    I have extensive knowledge of languages and libraries that I can use to provide users with a more
                    <br />
                    streamlined experience. I am also currently working at <a className="text-success underline underline-offset-2 hover:font-bold" href="https://roboticsforall.net/" target="_blank" rel="noopener noreferrer">
                    Robotics for All</a> as a Software Developer.
                </p>
                <button className="btn btn-outline btn-success w-40 h-16 mt-[20px] hover:scale-110" onClick={() => navbtnPressed("About")}>More about Me!</button>
            </motion.div>
        </div>
    );
}
