import Image from 'next/image'
import React from 'react'

const Card = ({image,title,category,price,id}) => {
  return (
    <>
      <div className="max-h-fit flex flex-col max-w-[200px]" id={id}>
        <div>
          <Image src={image} width={200} height={150} className='rounded-md'/>
        </div>
        <div className="flex gap-2">
          <div className="w-[65%] h-fit">
            <p className="w-[100%] line-clamp-3 text-xs font-medium">{title}</p>
            <p className="text-[#475924] font-normal text-lg">
              ₹{price} <span className='line-through text-gray-400'>₹{+price+price/5}</span>
            </p>
          </div>
          <div className="w-[45%] h-[30px] m-auto border border-black flex justify-center cursor-pointer">
            <button className="">ADD</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card