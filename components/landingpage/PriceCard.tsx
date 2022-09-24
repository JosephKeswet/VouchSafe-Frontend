import React from 'react'

type Props = {}

const PriceCard = (props: Props) => {
  return (
    <div>
        <div className='card-border-gradient w-[413px] h-[396px] rounded-[25px] '>
                        <main className='ml-[30px] mt-[30px]'>
                            <div className=' h-[76px]'>
                                <h1 className='text-[48px] leading-[50px] bg-clip-text bg-gradient-to-r  from-[#1937AD] to-[#F93DE6] text-transparent  font-Anybody font-normal mb-[5px]'>₦2,900 <span className='text-xl text-[#292929] leading-[21px] font-Anybody font-normal'>per month</span></h1>  
                                <p className='text-[#797979] text-xl font-Anybody font-normal leading-[21px]'>₦29,000 annually (save ₦5,800)</p> 
                            </div>

                            <div className='mt-[40px]'>
                                <div className='flex items-center gap-[10px] mb-[15px]'>
                                    <div className='flex items-center justify-center bg-[#797979] rounded-[30px] w-[25px] h-[25px]'>
                                        <h1 className='text-white text-base leading-[17px] font-Anybody font-normal'>1</h1>
                                    </div>
                                    <h3 className='text-[#292929] text-[16px] font-Anybody font-normal leading-[17px]'>Sales monitoring</h3>
                                </div>

                                <div className='flex items-center gap-[10px] mb-[15px]'>
                                    <div className='flex items-center justify-center bg-[#797979] rounded-[30px] w-[25px] h-[25px]'>
                                        <h1 className='text-white text-base leading-[17px] font-Anybody font-normal'>2</h1>
                                    </div>
                                    <h3 className='text-[#292929] text-[16px] font-Anybody font-normal leading-[17px]'>Sales analysis</h3>
                                </div>

                                <div className='flex items-center gap-[10px] mb-[15px]'>
                                    <div className='flex items-center justify-center bg-[#797979] rounded-[30px] w-[25px] h-[25px]'>
                                        <h1 className='text-white text-base leading-[17px] font-Anybody font-normal'>3</h1>
                                    </div>
                                    <h3 className='text-[#292929] text-[16px] font-Anybody font-normal leading-[17px]'>Customer acquisition</h3>
                                </div>   
                            </div>
                        </main>
                    </div>
    </div>
  )
}

export default PriceCard