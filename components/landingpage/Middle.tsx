import Image from 'next/image'
import React from 'react'
import Gears from '../../Assets/img/Gears.png'
import How_Works from '../../Assets/img/How_Works.png'

type Props = {}

const Middle = (props: Props) => {
  return (
    <div className=''>
      <main className='w-[1340px] h-[583px] mx-auto mt-[97px]'>
        <div className='w-[203px] h-[93px] ml-[596px]'>
          <div className='flex justify-center mb-[10px]'>
            <Image src={Gears} objectFit='cover' alt="How it works icon"/>
          </div>
          <div className='flex justify-center'>
            <h1 className='text-[#797979] text-[32px] font-Anybody font-normal leading-[33px] '>How it works</h1>
          </div>
        </div>

        <div className='flex justify-between items-center px-[50px] mt-[54px] rounded-[25px] w-[1340px] h-[436px] bg-clip-border bg-gradient-to-r  from-[#1937AD] to-[#F93DE6] '>
            <div className='w-[550px] '>
              <h1 className='text-white text-5xl font-Anybody font-normal leading-[50px] mb-[50px]'>See for <span className='text-[55px] font-Courgette font-normal leading-[69px]'>yourself</span> </h1>
              <p className='text-2xl text-white font-Anybody font-normal leading-[32px] w-[550px] h-16'>This 2-minute video shows you how Vouchsafe works in a business. Can you relate to this?</p>
            </div>

            <div className='w-[578px] h-[352px]'>
              <Image src={How_Works} alt='How it works video'/>
            </div>
        </div>
      </main>
    </div>
  )
}

export default Middle