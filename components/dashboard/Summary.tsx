import React from 'react'
import Card from './Card'
import Dropdown from './Dropdown'

type Props = {}

const Summary = (props: Props) => {
  return (
    <div>
        <div className='flex items-center    justify-between my-[30px] '>
            <h1 className='w-[162px] h-[48px] text-[32px] text-[#797979] leading-[48px] font-Poppins font-semibold'>Summary</h1>
            <Dropdown/>
        </div>


      <section className='flex justify-between items-center flex-wrap'>
        <div className='relative w-[419px] h-[195px] '>
          <div className='absolute z-20  w-[419px] h-[195px] rounded-[15px] summary-gradient'>
                <main className='mx-[20px] my-[20px]'>
                  <section className='mb-[40px]'>
                    <div className='flex justify-between mb-[10px]'>
                      <h1 className='text-base text-white font-Poppins font-semibold leading-[24px]
                      '>Total earnings</h1>
                      <h4 className='text-sm text-[#EAFDEA] font-Poppins font-normal leading-[21px]'>Per week</h4>
                    </div>
                    <h1 className='text-[36px] text-white font-Poppins font-medium leading-[54px]'>₦672,000</h1>
                  </section>

                  <div className='flex items-center gap-[5px]'>
                    <div className='flex items-center justify-center w-[90px] h-[27px] rounded-[30px] bg-[#EAFDEA]'>
                        <h3 className='text-sm text-[#292929] font-Poppins font-medium leading-[21px]'>+ ₦54,600</h3>
                    </div>
                    <h3 className='text-sm text-white font-Poppins font-normal leading-[21px]'>in the last 7 days</h3>
                  </div>

                  
                </main>

            </div>
            <div className='absolute top-3 left-[20px] w-[380px] h-[194px] bg-[#D8E0FF] rounded-[30px]'/>
            
        </div>

        <Card title='Total cost' primaryAmount='₦2,290,000' secondaryAmount='1,834,000' timeDate='Previous week'/>
        <Card productExp='Products sold' productNumber={349} title='Products sold' primaryAmount='₦1,453,000' productAddition='+ 27' />
        <Card productExp='Expenses' productNumber={149} title='Expenses' wide={true} primaryAmount='₦165,000' productAddition='+ 43,000' />

        <Card title='Visits' visitNumber={124} productAddition='+ 13' />
      </section>

        
    </div>
  )
}

export default Summary