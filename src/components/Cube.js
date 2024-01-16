import React, { useState, useEffect } from 'react';
import { IoMdCloseCircle } from "react-icons/io";
import axios from 'axios';
import Data from './Data';
const Cube = () => {
  const [pos, setPos] = useState(0);
  const [isOpen, setIsOpen] = useState(true);


  const toggleHandler = () =>
  {
    setIsOpen(!isOpen)
  }  

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPos(prevPos => prevPos - 90);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
     <IoMdCloseCircle onClick={toggleHandler} size={30} className={`${isOpen ? 'block' : 'hidden'} text-blue-500 absolute left-[17.5px] cursor-pointer bottom-[215px]`}/> 
    <div className={`${isOpen ? 'block' : 'hidden'} absolute left-2 bottom-28`}>
    <div className="wrapper">
      <div className="container">
        <div className="image-cube" style={{ transform: `rotateY(${pos}deg)` }}>

            {/* Front Side */}
          <div className="p-1 front bg-[#151515] ">
          {/* <h1 className='text-xl w-[80%]  mt-3 font-bold text-white'>Watch Live Score</h1> */}
          </div>

            {/* Right Side */}
            
          <div className="flex flex-col items-start justify-center p-1 right bg-red-50 gap-y-2 bg_score">  
            <Data/> 
          </div>

            {/* Back Side */}
          <div className="p-1 back bg-[#151515] ">
          {/* <h1 className='text-xl w-[80%]  mt-3 font-bold text-white'>Watch Live Score</h1> */}
          </div>

            {/* Left Side */}
          <div className="left  p-1 flex flex-col items-start justify-center gap-y-2 bg-[#151515]">
           {/* <Data/> */}
          </div>
       
        </div>
      </div>
      
    </div>
    </div>
    </>
  );
};

export default Cube;
