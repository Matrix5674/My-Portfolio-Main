import React from 'react';
import Theme from './Theme';

interface CardProps {
  title: string;
  description: string;
  btnTxt: string;
  link: string;
  skills: string[];
  skillqnt: number;
}

const Skills: React.FC<{ skills: string[] }> = ({ skills }) => {
  return (
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <a
          key={index}
          className="px-3 py-2 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none  bg-green-600 hover:bg-green-700 focus:ring-green-800"
          style={{ marginBottom: '10px' }}
        >
          {skill}
        </a>
      ))}
    </div>
  );
};

const Card: React.FC<CardProps> = ({ title, description, skills, btnTxt, link }) => {
  return (
    <div
      data-theme={Theme}
      className="p-6 w-96 rounded-lg shadow bg-gray-800 border-gray-700 transition-transform hover:scale-105 hover:rotate-2"
      style={{ marginTop: '15px', marginRight: '20px' }}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white hover:text-success">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-400">{description}</p>
          <Skills skills={skills} />
        </div>
        <a href={link}>
          <button className="cardButton mt-4">{btnTxt}</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
