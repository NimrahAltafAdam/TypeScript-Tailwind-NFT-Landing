import About from '@/components/About'
import BecomeCreator from '@/components/BecomeCreator'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import LiveBidding from '@/components/LiveBidding'
import Nav from '@/components/Nav'
import PopularNft from '@/components/PopularNft'
import TopCreator from '@/components/TopCreator'
import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


const HomePage = () => {

  useEffect (() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: 'top-bottom',
      
    })
  })
  return (
    <div >
      <Nav />
      <Hero />
      <About />
      <BecomeCreator />
      <PopularNft />
      <LiveBidding />
      <TopCreator />
      <Footer />
    </div>
  )
}

export default HomePage