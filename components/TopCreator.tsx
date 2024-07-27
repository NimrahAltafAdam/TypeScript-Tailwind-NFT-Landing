import React from 'react'
import CreatorCard from './Helper/CreatorCard'

const TopCreator = () => {
  return (
    <div className='pb-[3rem] pt-[5rem] bg-blue-950 '>
      <div className='text-center'>
        <p className='heading__mini'> Creator</p>
        <h1 className='heading__primary'>Top<span className='text-yellow-300'>Creator</span> of Today</h1>
      </div>
      <div className='w-[80%] pt-[5rem] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-[2rem] '>
      <div data-aos="fade-up" data-aos-anchor-placement="top-center">
            <CreatorCard image="/images/user6.png" user="Tohn Lee" price="934.5ETH" />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="100">
            <CreatorCard image="/images/user5.png" user="Eohn Lee" price="834.5ETH" />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
            <CreatorCard image="/images/user4.png" user="Kohn Lee" price="734.5ETH" />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="300">
            <CreatorCard image="/images/user3.png" user="Lohn Lee" price="634.5ETH" />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="400">
            <CreatorCard image="/images/user2.png" user="Bohn Lee" price="534.5ETH" />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="500">
            <CreatorCard image="/images/user1.png" user="John Lee" price="434.5ETH" />
        </div>
      </div>
    </div>
  )
}

export default TopCreator
