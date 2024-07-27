import React from 'react'
import BidSlider from './Helper/BidSlider'

const LiveBidding = () => {
  return (
    <div className='pb-[5rem] pt-[3rem] bg-blue-900 '>
        <div className='text-center '>
            <p className='heading__mini'>Bidding</p>
            <h1 className='heading__primary mt-[0.5rem]'>Live <span className='text-yellow-300'>Bidding</span></h1>
        </div>
        <div className='w-[80%] mx-auto pt-[5rem] '>
            <BidSlider />
        </div>
    </div>
  )
}

export default LiveBidding