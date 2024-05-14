'use client'
import React from 'react'
import Navbar from '../../Navbar'
import AnimatedText from '../../AnimatedText'
import Theme from '../../Theme'
import Link from 'next/link'

const Blog = () => {
  return (
    <main data-theme={Theme}>
      <AnimatedText className=" font-bold text-7xl m-8" text="Blog." once speed={0.1}/>
    <div className=' flex flex-row justify-center'>
      <div>
      <AnimatedText className=" mt-6 text-3xl font-bold text-warning"text="Nothing yet! Come back soon..." once speed={0.1}></AnimatedText>
      <Link href="/">
        <AnimatedText className=" mt-6 text-3xl font-bold text-success hover:text-sky-400"text="<--   Click here to go back" once speed={0.1}></AnimatedText>
      </Link>
      </div>
      
    </div>
    
    </main>
  )
}

export default Blog
