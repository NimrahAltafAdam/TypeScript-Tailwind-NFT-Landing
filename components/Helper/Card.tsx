import React from 'react'
import { RocketLaunchIcon } from '@heroicons/react/16/solid'

// Define the props interface
interface CardProps {
    heading: string;
    description: string;
    buttonText: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    iconColor: string;
    delay?: number;
  }
  
  // Use the interface in the component function
  const Card: React.FC<CardProps> = ({ heading, description, buttonText, Icon, iconColor,delay }) => {
    return (
      <div data-aos="fade-right" data-anchor-placement="top-center" data-aos-delay={delay} className='bg-white hover:bg-red-700 transition-all cursor-pointer duration-300 bg-opacity-10 rounded-md p-4'>
        <Icon className={`w-[4rem] h-[4rem] mt-[1.5rem] ${iconColor}`} />
        <h1 className='mt-[1rem] text-[20px] text-white'>{heading}</h1>
        <p className='mt-[1rem] text-[15px] text-white opacity-85'>{description}</p>
        <button className='mt-[1rem] text-[17px] hover:text-yellow-300 text-white underline'>{buttonText}</button>
      </div>
    )
  }

export default Card