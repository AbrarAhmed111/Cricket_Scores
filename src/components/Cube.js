import React, { useState, useEffect } from 'react';

import img from '../assets/img/demo.png'
const Cube = () => {
  const [pos, setPos] = useState(90);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPos(prevPos => prevPos - 90);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className='absolute left-8 bottom-36'>

    <div className="wrapper">
      <div className="container">
        <div className="image-cube" style={{ transform: `rotateY(${pos}deg)` }}>
          <div className="front  bg-red-50 p-1  bg_card">
          <h1 className='text-xl w-[80%]  mt-3 font-bold text-white'>Watch Live Score</h1>
          </div>
          <div className="right bg-red-50 p-1 flex flex-col items-start justify-center gap-y-2 bg_score">

          <h1 className='absolute top-1 right-2 text-blue-500 font-bold'>Live</h1>
          <div className='w-full justify-between items-center flex pr-2 mb-3 mt-[108px] text-white font-semibold'>
            {/* Country Names */}
            <h5 className='text-[15px] '>Srilanka</h5>
            <span className='text-[10px] text-yellow-400'>vs</span>
            <h5 className='text-[15px]'>Zimbabwe</h5>
         </div>
         <div className='w-full justify-between items-center flex pl-[2px] pr-[6px] mt-[135px] text-[13px]'>
            {/* status of country 1 */}
            <p className='text-yellow-400'>86/4 - (14.3)</p>
            {/* status of country 2 */}
            <p className='text-blue-500'>Yet to bat</p>
         </div>
          </div>
          <div className="back bg-red-50 p-1  bg_card">
          <h1 className='text-xl w-[80%]  mt-3 font-bold text-white'>Watch Live Score</h1>

          </div>
          <div className="left bg-red-50 p-1 flex flex-col items-start justify-center gap-y-2 bg_score">
          <h1 className='absolute top-1 right-2 text-blue-500 font-bold'>Live</h1>
          <div className='w-full justify-between items-center flex pr-2 mb-3 mt-[108px] text-white font-semibold'>
            {/* Country Names */}
            <h5 className='text-[15px] '>Srilanka</h5>
            <span className='text-[10px] text-yellow-400'>vs</span>
            <h5 className='text-[15px]'>Zimbabwe</h5>
         </div>
         <div className='w-full justify-between items-center flex pl-[2px] pr-[6px] mt-[135px] text-[13px]'>
            {/* status of country 1 */}
            <p className='text-yellow-400'>86/4 - (14.3)</p>
            {/* status of country 2 */}
            <p className='text-blue-500'>Yet to bat</p>
         </div>
          </div>
        </div>
      </div>
      
    </div>
    </div>
  );
};

export default Cube;
