import React, { ReactElement } from 'react';
import PropTypes, { string } from 'prop-types';
import Theme from './Theme';
import { List } from 'postcss/lib/list';

interface CardProps {
  title: string;
  description: string;
  btnTxt: string;
  link:string;
  skills: Array<string>;
  skillqnt: number;
}

interface Skill {
  name: string; // Assuming your skill object has a `name` property
}

function Skills({ skills, amount }: { skills: Skill[]; amount: number }) {
  const skillsList = skills.map((skill, index) => (
    <a
      key={skill.name || index} // Use `skill.name` if available, otherwise fallback to index
      className="items-center px-3 py-2 text-sm max-w-24 font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      style={{ marginRight: "15px", marginBottom: "10px", display: "flex" }}
    >
      {skill.name}
    </a>
  ));

  return skillsList;
}
//card w-96 bg-base-100 shadow-xl
const Card: React.FC<CardProps> = ({ title, description, skills, skillqnt, btnTxt, link}) => {
  // Create an object with both skills and amount
  const skillsData = {
    skills: [
      { name: 'Skill 1' }, // Assuming your data has objects with a 'name' property
      { name: 'Skill 2' },
      // ... other skill objects
    ],
    amount: skillqnt,
  };

const skillsList = Skills(skillsData); // Pass the combined object as one argument

  return (
    <div data-theme={Theme} className="p-6 w-96 hover:scale-105 hover:rotate-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-all" style={{marginTop:"15px", marginRight:"20px", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
        <div>
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-success">{title}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
            <div style={{display:"flex", flexWrap: "wrap"}}>
              {skillsList}
            </div>
        </div>
        
        <a href={link}>
          <button className='cardButton'>
            {btnTxt}
          </button>
          </a>
          
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  btnTxt: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;
