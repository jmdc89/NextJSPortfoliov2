import React from 'react'

function BackgroundCircles() {
  return (
    <div className='relative flex justify-center items-center'>
        <div className='absolute border border-red-500 rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
        <div className='absolute border border-red-500 rounded-full h-[300px] w-[300px] mt-52'/>
        <div className='absolute border border-red-500 rounded-full h-[500px] w-[500px] mt-52'/>
        <div />
        <div />
    </div>
  )
}

export default BackgroundCircles