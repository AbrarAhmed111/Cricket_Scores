<div className="right bg-red-50 p-1 flex flex-col items-start justify-center gap-y-2 bg_score">
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
</div></>):(<p className='text-white text-[16px] mt-5 text-center'>No match in progress</p>)}