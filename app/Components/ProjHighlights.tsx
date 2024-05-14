import React from 'react'
import AnimatedText from './AnimatedText'
import Image, { StaticImageData } from 'next/image'

interface ProjHighlightsProps {
  title:string,
  description: string;
  link: string;
  btnTxt: string;
  imgUnder: StaticImageData;
  imgTop: StaticImageData;
}

const ProjHighlights: React.FC<ProjHighlightsProps> = ({title, description, link, btnTxt, imgUnder, imgTop}) => {
    return (
            <div className="flex mb-8 border-2 p-5 rounded-lg">
                    <div className="w-full flex-grow mr-auto">
                        <AnimatedText 
                            speed={0.1} 
                            once 
                            text={title} 
                            className="mb-3 text-warning text-wrap text-3xl mr-36"        />

                        <AnimatedText 
                        speed={0.01} 
                        once 
                        text={description} 
                        className="text-wrap text-xl mr-36"        />


                        <a href={link}>
                        <button className='cardButton mt-5'>
                            {btnTxt}
                        </button>
                        </a>
                    </div>
                    <div className="flex flex-col">
                        <Image
                            className=""
                            src={imgUnder}
                            width={600}
                            height={600}
                            alt=""
                        />
                        <Image
                            className=" -ml-10 -mt-28"
                            src={imgTop}
                            width={600}
                            height={600}
                            alt=""
                        />
                    </div>
                </div>
                
        
    )
}

export default ProjHighlights
