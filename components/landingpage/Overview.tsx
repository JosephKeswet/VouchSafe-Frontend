import Image from 'next/image'
import React from 'react'
import WhatWeDo from '../../Assets/img/WhatWeDo.png'
import DashboardBig from '../../Assets/img/Dashboard.png'



type Props = {}

const Overview = (props: Props) => {
  return (
    <div>
        <main className='mt-[100px]'>
        <div className='w-[203px] h-[93px] mx-auto'>
          <div className='flex justify-center mb-[10px]'>
            <Image src={WhatWeDo} objectFit='cover' alt="What we do icon"/>
          </div>
          <div className='flex justify-center '>
            <h1 className='text-[#797979] text-[32px] font-Anybody font-normal leading-[33px] '>What we do</h1>
          </div>
        </div>

          <div className='relative mt-[54px]'>

            <div className=' w-[1210px] h-[527px] bg-[#E1E1E1] rounded-[25px] ml-[220px] mr-[50px]'>
              <div className='absolute top-[50px] left-[500px] w-[846px] h-[427px] flex flex-wrap gap-[50px]'>
                {/* First Card */}
                <div className='w-[398px] h-[188px] rounded-[15px] bg-white'>
                  <main className='ml-[20px] mt-[15px]'>
                      <div className='flex items-center gap-2'>
                        <div className='flex items-center justify-center bg-[#797979] rounded-[30px] w-[30px] h-[30px]'>
                          <h1 className='text-white text-xl leading-[21px] font-Anybody font-normal'>1</h1>
                        </div>
                        <h1 className='text-xl text-[#797979] leading-[21px] font-Anybody font-normal'>Price <span className='bg-clip-text bg-gradient-to-r  from-[#1937AD] to-[#F93DE6] text-transparent font-Anybody font-normal'>prediction</span> </h1>
                      </div>

                      <div className='w-[175px] h-[92px] mt-[32px]'>
                        <p className='text-[#292929] text-base leading-[23px] font-Anybody font-normal'>Imagine <span className='bg-clip-text bg-gradient-to-r  from-[#1937AD] to-[#1937AD] text-transparent'>knowing the changes in prices</span> of goods before they happen.</p>
                      </div>
                  </main>
                </div>
                {/* Second Card */}
                <div className='w-[398px] h-[188px] rounded-[15px] bg-white'>
                  <main className='ml-[20px] mt-[15px]'>
                      <div className='flex items-center gap-2'>
                        <div className='flex items-center justify-center bg-[#797979] rounded-[30px] w-[30px] h-[30px]'>
                          <h1 className='text-white text-xl leading-[21px] font-Anybody font-normal'>2</h1>
                        </div>
                        <h1 className='text-xl text-[#797979] leading-[21px] font-Anybody font-normal'>Sale <span className='bg-clip-text bg-gradient-to-r  from-[#1937AD] to-[#F93DE6] text-transparent font-Anybody font-normal'>monitoring & analysis</span> </h1>
                      </div>

                      <div className='w-[175px] h-[92px] mt-[32px]'>
                        <p className='text-[#292929] text-base leading-[23px] font-Anybody font-normal'>With just a click, know <span className='bg-clip-text bg-gradient-to-r  from-[#1937AD] to-[#1937AD] text-transparent'>what sells the most. </span>We keep of every sale for you.</p>
                      </div>
                  </main>
                </div>   
                {/* Third Card */}

                <div className='w-[398px] h-[188px] rounded-[15px] bg-white'>
                  <main className='ml-[20px] mt-[15px]'>
                      <div className='flex items-center gap-2'>
                        <div className='flex items-center justify-center bg-[#797979] rounded-[30px] w-[30px] h-[30px]'>
                          <h1 className='text-white text-xl leading-[21px] font-Anybody font-normal'>3</h1>
                        </div>
                        <h1 className='text-xl text-[#797979] leading-[21px] font-Anybody font-normal'>Customer <span className='bg-clip-text bg-gradient-to-r  from-[#1937AD] to-[#F93DE6] text-transparent font-Anybody font-normal'>acquisition</span> </h1>
                      </div>

                      <div className='w-[175px] h-[92px] mt-[32px]'>
                        <p className='text-[#292929] text-base leading-[23px] font-Anybody font-normal'>How do you know <span className='bg-clip-text bg-gradient-to-r  from-[#1937AD] to-[#1937AD] text-transparent'>who your customers are</span> and what they want?</p>
                      </div>
                  </main>
                </div>
                {/* Fourth Card */}
                <div className='w-[398px] h-[188px] rounded-[15px] bg-white'>
                  <main className='ml-[20px] mt-[15px]'>
                      <div className='flex items-center gap-2'>
                        <div className='flex items-center justify-center bg-[#797979] rounded-[30px] w-[30px] h-[30px]'>
                          <h1 className='text-white text-xl leading-[21px] font-Anybody font-normal'>4</h1>
                        </div>
                        <h1 className='text-xl text-[#797979] leading-[21px] font-Anybody font-normal'>Profit <span className='bg-clip-text bg-gradient-to-r  from-[#1937AD] to-[#F93DE6] text-transparent font-Anybody font-normal'>recommendations</span> </h1>
                      </div>

                      <div className='w-[175px] h-[92px] mt-[32px]'>
                        <p className='text-[#292929] text-base leading-[23px] font-Anybody font-normal'>Get practical advice and make yourself  <span className='bg-clip-text bg-gradient-to-r  from-[#1937AD] to-[#1937AD] text-transparent'>more money.</span></p>
                      </div>
                  </main>
                </div>

              </div>

              <div className='absolute left-[-310px] top-[20px] z-10'>
                  <Image src={DashboardBig} objectFit='cover' alt="Dashboard"/>
              </div>
            </div>
         </div>

      
        </main>
    </div>
  )
}

export default Overview