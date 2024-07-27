import About from '@/components/About'
import BecomeCreator from '@/components/BecomeCreator'
import Hero from '@/components/Hero'
import LiveBidding from '@/components/LiveBidding'
import Nav from '@/components/Nav'
import PopularNft from '@/components/PopularNft'
import TopCreator from '@/components/TopCreator'
import React from 'react'


const HomePage = () => {
  return (
    <div >
      <Nav />
      <Hero />
      <About />
      <BecomeCreator />
      <PopularNft />
      <LiveBidding />
      <TopCreator />
    </div>
  )
}

export default HomePage