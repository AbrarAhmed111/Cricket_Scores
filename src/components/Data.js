import React, { useState, useEffect } from 'react';
import { IoMdCloseCircle } from "react-icons/io";
import axios from 'axios';
const Data = () => {
  const [pos, setPos] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const [apiData, setApiData] = useState(null);
  const [teamOne, setTeamOne] = useState(null);
  const [teamTwo, setTeamTwo] = useState(null);
  const [error, setError] = useState(null);
  console.log(apiData,'apiData')
  console.log(teamOne,'TeamOne')
  console.log(teamTwo,'TeamTwo')
  const toggleHandler = () =>
  {
    setIsOpen(!isOpen)
  }  


  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://livescore6.p.rapidapi.com/matches/v2/list-live',
        params: {
          Category: 'cricket',
          Timezone: '5'
        },
        headers: {
          'X-RapidAPI-Key': '3bd08291bbmshfc601e0741f7c6ap150b4cjsnf77f52bca2c2',
          'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setApiData(response.data);
      } catch (error) {
        setError(error);
      }
    };
    // const intervalId = setInterval(() => {
    //   fetchData();
    // }, 4000);

    // return () => clearInterval(intervalId);
 
  }, []); 
  useEffect(() => {
    if (apiData && apiData?.Stages.length > 0) {
      const stage = apiData.Stages[0]; // Assuming you are interested in the first stage

      if (stage && stage.Events && stage.Events.length > 0) {
        const event = stage.Events[0]; // Assuming you are interested in the first event

        if (event && event.T1 && event.T1.length > 0 && event.T2 && event.T2.length > 0) {
          const teamOneDetails = {
            name: event.T1[0].Abr,
            score: event.Tr1C1,
            over: event.Tr1CO1,
            wicket: event.Tr1CW1
          };

          const teamTwoDetails = {
            name: event.T2[0].Abr,
            score: event.Tr2C1,
            over: event.Tr2CO1,
            wicket: event.Tr2CW1
          };

          setTeamOne(teamOneDetails);
          setTeamTwo(teamTwoDetails);
        }
      }
    }
  }, [apiData]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setPos(prevPos => prevPos - 90);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
    {apiData?.Stages?.length >0?(<> 
          <h1 className='absolute top-1 right-2 text-blue-500 font-bold'>Live</h1>
         <div className='w-full justify-between items-center flex pr-2 mb-3 mt-[108px] text-white font-semibold'>
            {/* Country Names */}
            <h5 className='text-[15px] '>{teamOne?.name}</h5>
            <span className='text-[20px] text-yellow-400'>vs</span>
            <h5 className='text-[15px]'>{teamTwo?.name}</h5>
         </div>
         <div className='w-full justify-between items-center flex pl-[2px] pr-[6px] mt-[135px] text-[13px]'>
            {/* status of country 1 */}
            {teamOne?.score!= undefined?(<p className='text-blue-500'>{teamOne?.score}/{teamOne?.wicket} - ({teamOne?.over})</p>):(<p className='text-blue-500'>Yet to bet</p>)} 
            {/* status of country 2 */}
           {teamTwo?.score!= undefined?(<p className='text-blue-500'>{teamTwo?.score}/{teamTwo?.wicket} - ({teamTwo?.over})</p>):(<p className='text-blue-500'>Yet to bet</p>)} 
        </div></>):(<p className='text-white text-[14px] mt-5 text-center'>No match in progress...</p>)}
    </>
  )
}

export default Data;
