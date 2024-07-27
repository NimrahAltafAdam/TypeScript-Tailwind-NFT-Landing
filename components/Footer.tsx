import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-blue-900'>
      <div className='w-[80%] border-b-[1.2px] pb-[2rem] border-b-slate-500 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem] '>
        <div>
        <h1 className='text-[20px] sm:text-[30px] text-white'>
            NF<span className='text-yellow-300'>tf</span>y
        </h1>
        <p className='text-[14px] text-white opacity-60 mt-[1rem] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis a assumenda quae eos reprehenderit numquam fuga molestias? Atque perspiciatis voluptates vitae corrupti? Veritatis quas similique excepturi soluta expedita impedit quod!</p>
        <p className='text-[14px] mt-[1.4rem] text-white opacity-80 '>(+800) 1234 5678 90 - info@example.com</p>
        </div>
        <div className='lg:mx-auto'>
            <h1 className='text-[20px] text-white mb-[1.5rem] '>Information</h1>
            <p className='footer__link'>About Us</p>
            <p className='footer__link'>Privacy Policy</p>
            <p className='footer__link'>Wallet</p>
            <p className='footer__link'>Bidding</p>
            <p className='footer__link'>FAQ</p>
        </div>
        <div className='lg:mx-auto'>
            <h1 className='text-[20px] text-white mb-[1.5rem] '>Account</h1>
            <p className='footer__link'>Dashboard</p>
            <p className='footer__link'>My Bidding</p>
            <p className='footer__link'>My Wishlist</p>
            <p className='footer__link'>Account Details</p>
            <p className='footer__link'>Track My Sell</p>
        </div>
        <div className='lg:mx-auto'>
            <h1 className='text-[20px] text-white mb-[1.5rem] '>Shop</h1>
            <p className='footer__link'>Affiliate</p>
            <p className='footer__link'>Bestsellers</p>
            <p className='footer__link'>Discount</p>
            <p className='footer__link'>Latest Product</p>
            <p className='footer__link'>Sale Products</p>
        </div>
      </div>
      <div className='mt-[2rem] grid grid-cols-1 gap-[1.4rem] sm:grid-cols-2 justify-between w-[80%] mx-auto'>
        <p className='text-[14px] text-white opacity-60'>&#169; Copyright NimrahAltafAdam</p>
        <Image src="/images/pay.svg" alt="pay" width={230} height={230} className='object-contain sm:ml-auto ' />
      </div>
    </div>
  )
}

export default Footer
