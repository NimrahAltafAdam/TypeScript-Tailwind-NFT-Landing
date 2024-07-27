import { ChartPieIcon, IdentificationIcon, PresentationChartBarIcon, RocketLaunchIcon } from '@heroicons/react/16/solid'
import React from 'react'
import Card from './Helper/Card'

const BecomeCreator = () => {
  return (
    <div className='pb-[3rem] pt-[5rem] bg-blue-900 '>
        <div className='text-center '>
            <p className='heading__mini'>Become A creator</p>
            <h1 className='heading__primary'>Create and <span className='text-yellow-300'>Sell</span> Your Nfts</h1>
        </div>
        <div className='w-[80%] mx-auto mt-[5rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem]'>
            {/* <div className='bg-white hover:bg-red-700 transition-all cursor-pointer duration-300 bg-opacity-10 rounded-md p-4'>
                <RocketLaunchIcon className='w-[4rem] h-[4rem] mt-[1.5rem] text-yellow-300' />
                <h1 className='mt-[1rem] text-[20px] text-white'>Setup Your Wallet</h1>
                <p className='mt-[1rem] text-[15px] text-white opacity-85'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, accusantium.</p>
                <button className='mt-[1rem] text-[17px] hover:text-yellow-300 text-white underline'>Read More</button>
            </div> */}
            <Card heading="Setup Your Wallet" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, accusantium." buttonText='Read More' Icon={RocketLaunchIcon} iconColor='text-yellow-300' />
            <Card heading="Setup Your Wallet" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, accusantium." buttonText='Read More' Icon={ChartPieIcon} iconColor='text-green-300' delay={100} />
            <Card heading="Setup Your Wallet" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, accusantium." buttonText='Read More' Icon={IdentificationIcon} iconColor='text-orange-300' delay={200} />
            <Card heading="Setup Your Wallet" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, accusantium." buttonText='Read More' Icon={PresentationChartBarIcon} iconColor='text-emerald-300' delay={300} />

        </div>
    </div>
  )
}

export default BecomeCreator