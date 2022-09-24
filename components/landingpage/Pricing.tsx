import Image from 'next/image'
import React from 'react'
import PricingIcon from '../../Assets/img/Pricing.png'
import PriceCard from './PriceCard'


type Props = {}

const Pricing = (props: Props) => {
  return (
    <div>
        <section className='mt-[100px]'>
                <div className='w-[203px] h-[93px] mx-auto'>
                        <div className='flex justify-center mb-[10px]'>
                            <Image src={PricingIcon} objectFit='cover' alt="What we do icon"/>
                        </div>
                        <div className='flex justify-center '>
                            <h1 className='text-[#797979] text-[32px] font-Anybody font-normal leading-[33px] '>Our pricing</h1>
                        </div>
                </div>
                <p className='text-center text-[#292929] text-[20px] leading-[20px] font-Anybody font-normal mt-[50px]'>Affordable plans you can choose from</p>
                <main className='flex items-center justify-center gap-[50px] mx-auto mt-[50px] w-[1340px]'>
                    <PriceCard/>
                    <PriceCard/>
                    <PriceCard/>
                </main>
                
        </section>
    </div>
  )
}

export default Pricing