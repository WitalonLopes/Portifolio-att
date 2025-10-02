import React from 'react'
import star from '../assets/images/star.svg';

const Marquee = () => {
  return (
    <>
      <div className='bg-white text-black pb-28 lg:pb-44 overflow-hidden'>
        {/*LINHA 1 */}
        <div className='whitespace-nowrap animate-marquee text-6xl lg:text-[7vw] font-heading font-semibold leading-[1] tracking-tight'>
          <span className='flex gap-4 lg:gap-8 mx-8'>
            WEB <img src={star} alt="" className='marquee-star1 w-[7vw]' />
            DESIGN <img src={star} alt="" className='marquee-star1 w-[7vw]' />
            INSPIRAÇÃO <img src={star} alt="" className='marquee-star1 w-[7vw]' />
            WEB <img src={star} alt="" className='marquee-star1 w-[7vw]' />
            DESIGN <img src={star} alt="" className='marquee-star1 w-[7vw]' />
            INSPIRAÇÃO <img src={star} alt="" className='marquee-star1 w-[7vw]' />
          </span>
        </div>
        {/*LINHA 2 */}
        <div className='whitespace-nowrap animate-marquee-reverse text-6xl lg:text-[7vw] font-heading font-semibold leading-[1] tracking-tight'>
          <span className='flex gap-4 lg:gap-8 mx-8'>
            WEB <img src={star} alt="" className='marquee-star2 w-[7vw]' />
            DESIGN <img src={star} alt="" className='marquee-star2 w-[7vw]' />
            INSPIRAÇÃO <img src={star} alt="" className='marquee-star2 w-[7vw]' />
            WEB <img src={star} alt="" className='marquee-star2 w-[7vw]' />
            DESIGN <img src={star} alt="" className='marquee-star2 w-[7vw]' />
            INSPIRAÇÃO <img src={star} alt="" className='marquee-star2 w-[7vw]' />
          </span>
        </div>
      </div>
    </>
  )
}

export default Marquee