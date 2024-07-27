import React from 'react'
import NftCard from './Helper/NftCard'


const PopularNft = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-blue-950'>
        <div className='text-center'>
          <p className= "heading__mini">Popular Item</p>
          <h1 className='heading__primary'>Explore <span className='text-yellow-300'>Popular</span> Nfts</h1>
        </div>
        <div className='w-[80%] pt-[5rem] mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[1.5rem]'>
          <div data-aos="fade-up" data-aos-anchor-placement="top-center" >
           <NftCard image="/images/nft1.svg" title="Warrior" author="sajal" price="3.25"  />
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="100">
          <NftCard image="/images/nft2.svg" title="Meata Forted" author="sajal" price="4.25"  />
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
          <NftCard image="/images/nft3.svg" title="Forted" author="sajal" price="5.25"  />
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="300">
          <NftCard image="/images/nft4.svg" title="Forted Eastern" author="sajal" price="6.25"  />
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="400">
          <NftCard image="/images/nft5.svg" title="Forted Warrior" author="sajal" price="7.25"  />
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="500">
          <NftCard image="/images/nft6.svg" title="Warrior Eastern" author="sajal" price="8.25"  />
          </div>

        </div>
    </div>
  )
}

export default PopularNft