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
          <div className="front  bg-red-50 p-1  bg_card">
          <h1 className='text-xl w-[80%]  mt-3 font-bold text-white'>Watch Live Score</h1>
          </div>

            {/* Right Side */}
            
          <div className="right bg-red-50 p-1 flex flex-col items-start justify-center gap-y-2 bg_score">  
            <Data/> 
          </div>

            {/* Back Side */}
          <div className="back bg-red-50 p-1  bg_card">
          <h1 className='text-xl w-[80%]  mt-3 font-bold text-white'>Watch Live Score</h1>
          </div>

            {/* Left Side */}
          <div className="left bg-red-50 p-1 flex flex-col items-start justify-center gap-y-2 bg_score">
           <Data/>
          </div>
       
        </div>
      </div>
      
    </div>
    </div>
    </>
  );
};

export default Cube;
