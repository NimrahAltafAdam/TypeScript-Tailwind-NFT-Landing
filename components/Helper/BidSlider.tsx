import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import NftCard from './NftCard';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1300, min: 764 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1
    }
  };
  

const BidSlider = () => {
  return (
    <div>
      <Carousel responsive={responsive} additionalTransfrom={0} arrows={true} autoPlay={true} autoPlaySpeed={5000} centerMode={false} infinite itemClass='item'>
      <div>
           <NftCard image="/images/nft1.svg" title="Warrior" author="sajal" price="3.25"  />
          </div>
          <div>
          <NftCard image="/images/nft2.svg" title="Meata Forted" author="sajal" price="4.25"  />
          </div>
          <div>
          <NftCard image="/images/nft3.svg" title="Forted" author="sajal" price="5.25"  />
          </div>
          <div>
          <NftCard image="/images/nft4.svg" title="Forted Eastern" author="sajal" price="6.25"  />
          </div>
          <div>
          <NftCard image="/images/nft5.svg" title="Forted Warrior" author="sajal" price="7.25"  />
          </div>
          <div>
          <NftCard image="/images/nft6.svg" title="Warrior Eastern" author="sajal" price="8.25"  />
          </div>
  </Carousel>;
    </div>
  )
}

export default BidSlider
