import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import PricingIcon from '../../Assets/img/Pricing.png'
import Button from '../Button'
import PriceCard from './PriceCard'


type Props = {}

const Pricing = (props: Props) => {
  const service1: { id: number, service: string}[] = [
    { "id": 1, "service": "Sales Monitoring" },
    { "id": 2, "service": "Sales analysis"},
    { "id": 3,"service": "Customer acquisition"}
    ];
  
  const service2: { id: number, service: string}[] = [
      { "id": 1, "service": "Sales Monitoring" },
      { "id": 2, "service": "Sales analysis"},
      { "id": 3,"service": "Customer acquisition"},
      { "id": 4,"service": "Profit recommendation"}
      ];
    
  const service3: { id: number, service: string}[] = [
        { "id": 1, "service": "Sales Monitoring" },
        { "id": 2, "service": "Sales analysis"},
        { "id": 3,"service": "Customer acquisition"},
        { "id": 4,"service": "Profit recommendation"},
        { "id": 5,"service": "Price prediction"},
        ];



  return (
    <div>
        <section className='mt-[100px] '>
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
                    <PriceCard services={service1}  price="₦2,900" annualPay="₦29,000 annually (save ₦5,800)"/>
                    <PriceCard services={service2}  price="₦5,900" annualPay="₦59,000 annually (save ₦11,800)"/>
                    <PriceCard services={service3}  price="₦9,900" annualPay="₦99,000 annually (save ₦19,800)"/>
                </main>

                <div className='w-[250px] h-[36px] mx-auto mt-[61px]'>
                            <div className='px-[24px]'>
                            <Link href="/Register">
                              <a>
                              <Button text='Try Vouchsafe free' width='w-[213px]' font='font-Anybody' height='h-[44px]' radius='rounded-[30px]'/>
                              </a>
                            </Link>
                            </div>
                            <p className='pt-[20px] text-[14px] text-[#797979] font-Anybody italic text-center'>Try Vouchsafe free for a month</p>
                      </div>
                
        </section>
    </div>
  )
}

export default Pricing