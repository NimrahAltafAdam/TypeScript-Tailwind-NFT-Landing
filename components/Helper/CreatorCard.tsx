import Image from 'next/image'
import React from 'react'
interface Props {
    user:string,
    price: string,
    image:string,
}

const CreatorCard = ({image,price, user}:Props) => {
  return (
    <div className='text-center'>
        <div>
            <Image src={`${image}`} alt={user} width={200} height={200} className='mx-auto' />
        </div>
        <h1 className='text-[25px] text-white mt-[1.5rem]'>{user}</h1>
        <p>{price}</p>
      
    </div>
  )
}

export default CreatorCard
