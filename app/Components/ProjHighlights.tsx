import React from 'react';
import AnimatedText from './AnimatedText';
import Image, { StaticImageData } from 'next/image';

interface ProjHighlightsProps {
  title: string;
  description: string;
  link: string;
  btnTxt: string;
  imgUnder: StaticImageData;
  imgTop: StaticImageData;
}

const ProjHighlights: React.FC<ProjHighlightsProps> = ({ title, description, link, btnTxt, imgUnder, imgTop }) => {
  return (
    <div className="flex mb-8 border-2 p-5 rounded-lg">
      <div className="w-full flex-grow mr-auto">
        <AnimatedText
          speed={0.1}
          once
          text={title}
          className="mb-3 text-warning text-3xl mr-36"
        />
        <AnimatedText
          speed={0.01}
          once
          text={description}
          className="text-xl mr-36"
        />
        <a href={link}>
          <button className="cardButton mt-5">
            {btnTxt}
          </button>
        </a>
      </div>
      <div className="flex flex-col">
        <Image
          src={imgUnder}
          width={600}
          height={600}
          alt={`${title} - Under Image`} // Added meaningful alt text
        />
        <Image
          src={imgTop}
          width={600}
          height={600}
          alt={`${title} - Top Image`} // Added meaningful alt text
          className="-ml-10 -mt-28"
        />
      </div>
    </div>
  );
}

export default ProjHighlights;
